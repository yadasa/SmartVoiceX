#!/usr/bin/env python3
"""Minimal site mirrorer for SmartVoiceX (Framer-hosted).

No third-party deps (uses urllib).

It crawls same-origin HTML pages and downloads linked assets (css/js/img/font)
including framerusercontent + Google Fonts.

NOTE: This captures the *deployed output*, not the Framer project source.
"""

from __future__ import annotations

import hashlib
import os
import re
import sys
import time
from dataclasses import dataclass
from pathlib import Path
from typing import Optional
from urllib.parse import urljoin, urlparse, urldefrag
from urllib.request import Request, urlopen

START_URL = "https://smartvoicex.com/"
ALLOWED_PAGE_HOSTS = {"smartvoicex.com", "www.smartvoicex.com"}
ALLOWED_ASSET_HOSTS = {
    "smartvoicex.com",
    "www.smartvoicex.com",
    "framerusercontent.com",
    "www.framerusercontent.com",
    "fonts.googleapis.com",
    "fonts.gstatic.com",
}

OUT_DIR = Path("site")
PAGES_DIR = OUT_DIR / "pages"
ASSETS_DIR = OUT_DIR / "assets"

UA = "Mozilla/5.0 (compatible; OpenClawMirror/1.0)"
TIMEOUT = 30
SLEEP_S = 0.05
MAX_PAGES = 200

URL_RE = re.compile(
    r"(?i)(?:href|src)=(?:\"([^\"]+)\"|'([^']+)')|url\((?:\"([^\"]+)\"|'([^']+)'|([^\)]+))\)"
)


def sha1(s: str) -> str:
    return hashlib.sha1(s.encode("utf-8")).hexdigest()


def norm_host(h: str) -> str:
    return (h or "").lower().strip()


def clean_url(u: str, base: str) -> Optional[str]:
    if not u:
        return None
    u = u.strip()
    if u.startswith("data:") or u.startswith("mailto:") or u.startswith("tel:") or u.startswith("javascript:"):
        return None
    abs_u = urljoin(base, u)
    abs_u, _frag = urldefrag(abs_u)
    return abs_u


def url_to_page_path(url: str) -> Path:
    p = urlparse(url)
    path = p.path or "/"
    if path.endswith("/"):
        path = path + "index.html"
    elif not os.path.splitext(path)[1]:
        path = path + ".html"
    if p.query:
        path = path.rstrip("/") + "__q_" + sha1(p.query)[:10] + ".html"
    return PAGES_DIR / path.lstrip("/")


def ext_from_content_type(content_type: str) -> str:
    ct = (content_type or "").split(";")[0].strip().lower()
    return {
        "text/css": ".css",
        "application/javascript": ".js",
        "text/javascript": ".js",
        "image/png": ".png",
        "image/jpeg": ".jpg",
        "image/webp": ".webp",
        "image/svg+xml": ".svg",
        "font/woff2": ".woff2",
        "font/woff": ".woff",
    }.get(ct, "")


def url_to_asset_path(url: str, content_type: str | None) -> Path:
    p = urlparse(url)
    ext = os.path.splitext(p.path)[1]
    if not ext and content_type:
        ext = ext_from_content_type(content_type)
    name = sha1(url)[:18] + (ext or "")
    return ASSETS_DIR / name


def ensure_parent(path: Path) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)


@dataclass
class FetchResult:
    url: str
    status: int
    content_type: str
    data: bytes


def fetch(url: str) -> FetchResult:
    req = Request(url, headers={"User-Agent": UA, "Accept": "*/*"})
    with urlopen(req, timeout=TIMEOUT) as resp:
        status = getattr(resp, "status", 200)
        ct = resp.headers.get("content-type", "")
        data = resp.read()
        final_url = resp.geturl()
        return FetchResult(url=final_url, status=int(status), content_type=str(ct), data=data)


class Mirror:
    def __init__(self) -> None:
        self.seen_pages: set[str] = set()
        self.seen_assets: set[str] = set()
        self.url_to_local: dict[str, Path] = {}

    def extract_urls(self, text: str, base: str) -> set[str]:
        found: set[str] = set()
        for m in URL_RE.finditer(text or ""):
            raw = next((g for g in m.groups() if g), None)
            if not raw:
                continue
            raw = raw.strip().strip('"').strip("'")
            u = clean_url(raw, base)
            if u:
                found.add(u)
        return found

    def rewrite_text(self, text: str, base_url: str) -> str:
        out = text
        base_dir = url_to_page_path(base_url).parent
        for u, p in list(self.url_to_local.items()):
            try:
                rel = os.path.relpath(p, start=base_dir)
            except Exception:
                rel = str(p)
            out = out.replace(u, rel)
        return out

    def download_asset(self, url: str) -> Optional[Path]:
        if url in self.seen_assets:
            return self.url_to_local.get(url)
        self.seen_assets.add(url)

        host = norm_host(urlparse(url).hostname)
        if host not in ALLOWED_ASSET_HOSTS:
            return None

        try:
            r = fetch(url)
        except Exception:
            return None

        out = url_to_asset_path(url, r.content_type)
        ensure_parent(out)
        out.write_bytes(r.data)
        self.url_to_local[url] = out
        time.sleep(SLEEP_S)
        return out

    def crawl_page(self, url: str) -> None:
        if url in self.seen_pages:
            return
        if len(self.seen_pages) >= MAX_PAGES:
            return

        host = norm_host(urlparse(url).hostname)
        if host not in ALLOWED_PAGE_HOSTS:
            return

        self.seen_pages.add(url)

        try:
            r = fetch(url)
        except Exception as e:
            print("[page] failed", url, e)
            return

        ct = (r.content_type or "").lower()
        if "text/html" not in ct:
            self.download_asset(r.url)
            return

        html = r.data.decode("utf-8", errors="ignore")

        # Extract urls
        urls = self.extract_urls(html, r.url)

        # Download external assets first
        for u in sorted(urls):
            uh = norm_host(urlparse(u).hostname)
            if uh in ALLOWED_PAGE_HOSTS:
                continue
            self.download_asset(u)

        # Save HTML
        local_path = url_to_page_path(r.url)
        ensure_parent(local_path)
        rewritten = self.rewrite_text(html, r.url)
        local_path.write_text(rewritten, encoding="utf-8")
        self.url_to_local[r.url] = local_path

        time.sleep(SLEEP_S)

        # Crawl internal pages
        for u in sorted(urls):
            uh = norm_host(urlparse(u).hostname)
            if uh in ALLOWED_PAGE_HOSTS:
                self.crawl_page(u)

    def run(self) -> None:
        OUT_DIR.mkdir(parents=True, exist_ok=True)
        PAGES_DIR.mkdir(parents=True, exist_ok=True)
        ASSETS_DIR.mkdir(parents=True, exist_ok=True)

        print("Mirroring", START_URL)
        self.crawl_page(START_URL)

        # Common extra paths
        for p in ["/", "/privacy", "/terms", "/pricing", "/contact", "/about"]:
            u = urljoin(START_URL, p)
            if u not in self.seen_pages:
                self.crawl_page(u)

        manifest = OUT_DIR / "_mirror_manifest.txt"
        manifest.write_text(
            "\n".join([
                f"pages={len(self.seen_pages)} assets={len(self.seen_assets)}",
                "",
                "PAGES:",
                *sorted(self.seen_pages),
                "",
                "ASSETS:",
                *sorted(self.seen_assets),
            ]),
            encoding="utf-8",
        )

        print("Done.")


if __name__ == "__main__":
    try:
        Mirror().run()
    except KeyboardInterrupt:
        print("Interrupted")
        sys.exit(1)
