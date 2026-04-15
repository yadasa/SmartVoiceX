import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/GallerySection.tsx");import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope;

let prevRefreshReg;
let prevRefreshSig;

if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react-swc can't detect preamble. Something is wrong."
    );
  }

  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/dev-server/src/components/GallerySection.tsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}

import { jsxDEV as _jsxDEV, Fragment as _Fragment } from "/@id/__x00__jsx-source/jsx-dev-runtime";
var _s = $RefreshSig$();
import { useScrollReveal } from "/src/hooks/useScrollReveal.tsx";
import __vite__cjsImport4_react from "/node_modules/.vite/deps/react.js?v=d355e541"; const useState = __vite__cjsImport4_react["useState"];
import { X, ChevronLeft, ChevronRight } from "/node_modules/.vite/deps/lucide-react.js?v=eb25920b";
const galleryImages = [
    {
        src: "https://images.squarespace-cdn.com/content/v1/67522ea9ea4b3147aabef81c/b0dda1c1-f45e-4cf9-ba22-1554f112bc4f/Implants-and-Dentures.jpg",
        alt: "Dental implants & dentures",
        category: "Implants"
    },
    {
        src: "https://images.squarespace-cdn.com/content/v1/67522ea9ea4b3147aabef81c/da29314c-e56d-4281-80cf-4df74750ae79/Cosmetic-Dentistry.jpg",
        alt: "Cosmetic dentistry",
        category: "Cosmetic"
    },
    {
        src: "https://images.squarespace-cdn.com/content/v1/67522ea9ea4b3147aabef81c/0213ce87-1817-4b17-bbf3-2b4f3539a253/Surgery.jpg",
        alt: "Oral surgery",
        category: "Surgery"
    },
    {
        src: "https://images.squarespace-cdn.com/content/v1/67522ea9ea4b3147aabef81c/740d694d-a3c0-4097-abd5-d5e7dc7276d5/General-Dentistry.jpg",
        alt: "General dentistry",
        category: "General"
    }
];
const categories = [
    "All",
    ...new Set(galleryImages.map((img)=>img.category))
];
export default function GallerySection() {
    _s();
    const { ref, isVisible } = useScrollReveal();
    const [activeFilter, setActiveFilter] = useState("All");
    const [lightbox, setLightbox] = useState(null);
    const filtered = activeFilter === "All" ? galleryImages : galleryImages.filter((img)=>img.category === activeFilter);
    const openLightbox = (i)=>setLightbox(i);
    const closeLightbox = ()=>setLightbox(null);
    const prevImage = ()=>setLightbox((prev)=>prev !== null ? (prev - 1 + filtered.length) % filtered.length : null);
    const nextImage = ()=>setLightbox((prev)=>prev !== null ? (prev + 1) % filtered.length : null);
    return /*#__PURE__*/ _jsxDEV(_Fragment, {
        children: [
            /*#__PURE__*/ _jsxDEV("section", {
                className: "py-24 lg:py-32",
                children: /*#__PURE__*/ _jsxDEV("div", {
                    className: "container mx-auto px-6",
                    ref: ref,
                    children: [
                        /*#__PURE__*/ _jsxDEV("div", {
                            className: `text-center max-w-2xl mx-auto mb-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`,
                            children: [
                                /*#__PURE__*/ _jsxDEV("p", {
                                    className: "text-sm font-medium tracking-widest uppercase text-primary mb-4",
                                    children: "Our Work"
                                }, void 0, false, {
                                    fileName: "/dev-server/src/components/GallerySection.tsx",
                                    lineNumber: 52,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ _jsxDEV("h2", {
                                    className: "text-3xl lg:text-5xl font-heading font-bold text-foreground",
                                    children: [
                                        "Smile ",
                                        /*#__PURE__*/ _jsxDEV("span", {
                                            className: "text-gradient-gold",
                                            children: "Transformations"
                                        }, void 0, false, {
                                            fileName: "/dev-server/src/components/GallerySection.tsx",
                                            lineNumber: 54,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "/dev-server/src/components/GallerySection.tsx",
                                    lineNumber: 53,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ _jsxDEV("p", {
                                    className: "mt-4 text-muted-foreground max-w-lg mx-auto",
                                    children: "Browse our gallery of life-changing dental results across every specialty."
                                }, void 0, false, {
                                    fileName: "/dev-server/src/components/GallerySection.tsx",
                                    lineNumber: 56,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "/dev-server/src/components/GallerySection.tsx",
                            lineNumber: 49,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ _jsxDEV("div", {
                            className: `flex flex-wrap justify-center gap-3 mb-12 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`,
                            children: categories.map((cat)=>/*#__PURE__*/ _jsxDEV("button", {
                                    onClick: ()=>setActiveFilter(cat),
                                    className: `px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${activeFilter === cat ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30" : "bg-card border border-border text-muted-foreground hover:border-primary/30 hover:text-foreground"}`,
                                    children: cat
                                }, cat, false, {
                                    fileName: "/dev-server/src/components/GallerySection.tsx",
                                    lineNumber: 66,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "/dev-server/src/components/GallerySection.tsx",
                            lineNumber: 62,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ _jsxDEV("div", {
                            className: "columns-1 sm:columns-2 lg:columns-3 gap-4 max-w-6xl mx-auto [column-fill:_balance]",
                            children: filtered.map((img, i)=>/*#__PURE__*/ _jsxDEV("div", {
                                    className: `group relative break-inside-avoid mb-4 rounded-2xl overflow-hidden cursor-pointer transition-all duration-600 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`,
                                    style: {
                                        transitionDelay: isVisible ? `${i * 120 + 200}ms` : "0ms"
                                    },
                                    onClick: ()=>openLightbox(i),
                                    children: [
                                        /*#__PURE__*/ _jsxDEV("img", {
                                            src: img.src,
                                            alt: img.alt,
                                            loading: "lazy",
                                            className: "w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                                        }, void 0, false, {
                                            fileName: "/dev-server/src/components/GallerySection.tsx",
                                            lineNumber: 89,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ _jsxDEV("div", {
                                            className: "absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                        }, void 0, false, {
                                            fileName: "/dev-server/src/components/GallerySection.tsx",
                                            lineNumber: 95,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ _jsxDEV("div", {
                                            className: "absolute bottom-0 left-0 right-0 p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300",
                                            children: [
                                                /*#__PURE__*/ _jsxDEV("span", {
                                                    className: "inline-block text-xs font-semibold tracking-wider uppercase text-primary bg-primary/10 backdrop-blur-sm px-3 py-1 rounded-full mb-2",
                                                    children: img.category
                                                }, void 0, false, {
                                                    fileName: "/dev-server/src/components/GallerySection.tsx",
                                                    lineNumber: 97,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ _jsxDEV("p", {
                                                    className: "text-background font-heading font-semibold",
                                                    children: img.alt
                                                }, void 0, false, {
                                                    fileName: "/dev-server/src/components/GallerySection.tsx",
                                                    lineNumber: 100,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "/dev-server/src/components/GallerySection.tsx",
                                            lineNumber: 96,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, img.src, true, {
                                    fileName: "/dev-server/src/components/GallerySection.tsx",
                                    lineNumber: 83,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "/dev-server/src/components/GallerySection.tsx",
                            lineNumber: 81,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ _jsxDEV("div", {
                            className: `flex justify-center gap-2 mt-8 transition-all duration-700 delay-500 ${isVisible ? "opacity-100" : "opacity-0"}`,
                            children: filtered.map((img, i)=>/*#__PURE__*/ _jsxDEV("button", {
                                    onClick: ()=>openLightbox(i),
                                    className: "w-16 h-16 rounded-xl overflow-hidden border-2 border-transparent hover:border-primary transition-all duration-200 opacity-70 hover:opacity-100",
                                    children: /*#__PURE__*/ _jsxDEV("img", {
                                        src: img.src,
                                        alt: img.alt,
                                        className: "w-full h-full object-cover"
                                    }, void 0, false, {
                                        fileName: "/dev-server/src/components/GallerySection.tsx",
                                        lineNumber: 116,
                                        columnNumber: 17
                                    }, this)
                                }, img.src + "-thumb", false, {
                                    fileName: "/dev-server/src/components/GallerySection.tsx",
                                    lineNumber: 111,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "/dev-server/src/components/GallerySection.tsx",
                            lineNumber: 107,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/dev-server/src/components/GallerySection.tsx",
                    lineNumber: 48,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "/dev-server/src/components/GallerySection.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            lightbox !== null && /*#__PURE__*/ _jsxDEV("div", {
                className: "fixed inset-0 z-[100] bg-foreground/90 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in",
                onClick: closeLightbox,
                children: [
                    /*#__PURE__*/ _jsxDEV("button", {
                        onClick: closeLightbox,
                        className: "absolute top-6 right-6 text-background/80 hover:text-background transition-colors z-10",
                        children: /*#__PURE__*/ _jsxDEV(X, {
                            className: "h-8 w-8"
                        }, void 0, false, {
                            fileName: "/dev-server/src/components/GallerySection.tsx",
                            lineNumber: 133,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "/dev-server/src/components/GallerySection.tsx",
                        lineNumber: 129,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ _jsxDEV("button", {
                        onClick: (e)=>{
                            e.stopPropagation();
                            prevImage();
                        },
                        className: "absolute left-4 lg:left-8 text-background/60 hover:text-background transition-colors z-10",
                        children: /*#__PURE__*/ _jsxDEV(ChevronLeft, {
                            className: "h-10 w-10"
                        }, void 0, false, {
                            fileName: "/dev-server/src/components/GallerySection.tsx",
                            lineNumber: 139,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "/dev-server/src/components/GallerySection.tsx",
                        lineNumber: 135,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ _jsxDEV("button", {
                        onClick: (e)=>{
                            e.stopPropagation();
                            nextImage();
                        },
                        className: "absolute right-4 lg:right-8 text-background/60 hover:text-background transition-colors z-10",
                        children: /*#__PURE__*/ _jsxDEV(ChevronRight, {
                            className: "h-10 w-10"
                        }, void 0, false, {
                            fileName: "/dev-server/src/components/GallerySection.tsx",
                            lineNumber: 145,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "/dev-server/src/components/GallerySection.tsx",
                        lineNumber: 141,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ _jsxDEV("div", {
                        className: "max-w-4xl max-h-[85vh] animate-scale-in",
                        onClick: (e)=>e.stopPropagation(),
                        children: [
                            /*#__PURE__*/ _jsxDEV("img", {
                                src: filtered[lightbox].src,
                                alt: filtered[lightbox].alt,
                                className: "w-full h-full object-contain rounded-2xl"
                            }, void 0, false, {
                                fileName: "/dev-server/src/components/GallerySection.tsx",
                                lineNumber: 149,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ _jsxDEV("div", {
                                className: "text-center mt-4",
                                children: [
                                    /*#__PURE__*/ _jsxDEV("span", {
                                        className: "text-primary text-xs font-semibold tracking-wider uppercase",
                                        children: filtered[lightbox].category
                                    }, void 0, false, {
                                        fileName: "/dev-server/src/components/GallerySection.tsx",
                                        lineNumber: 155,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ _jsxDEV("p", {
                                        className: "text-background font-heading font-semibold text-lg mt-1",
                                        children: filtered[lightbox].alt
                                    }, void 0, false, {
                                        fileName: "/dev-server/src/components/GallerySection.tsx",
                                        lineNumber: 158,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ _jsxDEV("p", {
                                        className: "text-background/50 text-sm mt-1",
                                        children: [
                                            lightbox + 1,
                                            " / ",
                                            filtered.length
                                        ]
                                    }, void 0, true, {
                                        fileName: "/dev-server/src/components/GallerySection.tsx",
                                        lineNumber: 161,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "/dev-server/src/components/GallerySection.tsx",
                                lineNumber: 154,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "/dev-server/src/components/GallerySection.tsx",
                        lineNumber: 148,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/dev-server/src/components/GallerySection.tsx",
                lineNumber: 125,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
_s(GallerySection, "Dsz32esqxV3dlhzlUTVwg/gRCvI=", false, function() {
    return [
        useScrollReveal
    ];
});
_c = GallerySection;
var _c;
$RefreshReg$(_c, "GallerySection");


if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}


if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/dev-server/src/components/GallerySection.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/dev-server/src/components/GallerySection.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkdhbGxlcnlTZWN0aW9uLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTY3JvbGxSZXZlYWwgfSBmcm9tIFwiQC9ob29rcy91c2VTY3JvbGxSZXZlYWxcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBYLCBDaGV2cm9uTGVmdCwgQ2hldnJvblJpZ2h0IH0gZnJvbSBcImx1Y2lkZS1yZWFjdFwiO1xuXG5jb25zdCBnYWxsZXJ5SW1hZ2VzID0gW1xuICB7XG4gICAgc3JjOiBcImh0dHBzOi8vaW1hZ2VzLnNxdWFyZXNwYWNlLWNkbi5jb20vY29udGVudC92MS82NzUyMmVhOWVhNGIzMTQ3YWFiZWY4MWMvYjBkZGExYzEtZjQ1ZS00Y2Y5LWJhMjItMTU1NGYxMTJiYzRmL0ltcGxhbnRzLWFuZC1EZW50dXJlcy5qcGdcIixcbiAgICBhbHQ6IFwiRGVudGFsIGltcGxhbnRzICYgZGVudHVyZXNcIixcbiAgICBjYXRlZ29yeTogXCJJbXBsYW50c1wiLFxuICB9LFxuICB7XG4gICAgc3JjOiBcImh0dHBzOi8vaW1hZ2VzLnNxdWFyZXNwYWNlLWNkbi5jb20vY29udGVudC92MS82NzUyMmVhOWVhNGIzMTQ3YWFiZWY4MWMvZGEyOTMxNGMtZTU2ZC00MjgxLTgwY2YtNGRmNzQ3NTBhZTc5L0Nvc21ldGljLURlbnRpc3RyeS5qcGdcIixcbiAgICBhbHQ6IFwiQ29zbWV0aWMgZGVudGlzdHJ5XCIsXG4gICAgY2F0ZWdvcnk6IFwiQ29zbWV0aWNcIixcbiAgfSxcbiAge1xuICAgIHNyYzogXCJodHRwczovL2ltYWdlcy5zcXVhcmVzcGFjZS1jZG4uY29tL2NvbnRlbnQvdjEvNjc1MjJlYTllYTRiMzE0N2FhYmVmODFjLzAyMTNjZTg3LTE4MTctNGIxNy1iYmYzLTJiNGYzNTM5YTI1My9TdXJnZXJ5LmpwZ1wiLFxuICAgIGFsdDogXCJPcmFsIHN1cmdlcnlcIixcbiAgICBjYXRlZ29yeTogXCJTdXJnZXJ5XCIsXG4gIH0sXG4gIHtcbiAgICBzcmM6IFwiaHR0cHM6Ly9pbWFnZXMuc3F1YXJlc3BhY2UtY2RuLmNvbS9jb250ZW50L3YxLzY3NTIyZWE5ZWE0YjMxNDdhYWJlZjgxYy83NDBkNjk0ZC1hM2MwLTQwOTctYWJkNS1kNWU3ZGM3Mjc2ZDUvR2VuZXJhbC1EZW50aXN0cnkuanBnXCIsXG4gICAgYWx0OiBcIkdlbmVyYWwgZGVudGlzdHJ5XCIsXG4gICAgY2F0ZWdvcnk6IFwiR2VuZXJhbFwiLFxuICB9LFxuXTtcblxuY29uc3QgY2F0ZWdvcmllcyA9IFtcIkFsbFwiLCAuLi5uZXcgU2V0KGdhbGxlcnlJbWFnZXMubWFwKChpbWcpID0+IGltZy5jYXRlZ29yeSkpXTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR2FsbGVyeVNlY3Rpb24oKSB7XG4gIGNvbnN0IHsgcmVmLCBpc1Zpc2libGUgfSA9IHVzZVNjcm9sbFJldmVhbCgpO1xuICBjb25zdCBbYWN0aXZlRmlsdGVyLCBzZXRBY3RpdmVGaWx0ZXJdID0gdXNlU3RhdGUoXCJBbGxcIik7XG4gIGNvbnN0IFtsaWdodGJveCwgc2V0TGlnaHRib3hdID0gdXNlU3RhdGU8bnVtYmVyIHwgbnVsbD4obnVsbCk7XG5cbiAgY29uc3QgZmlsdGVyZWQgPVxuICAgIGFjdGl2ZUZpbHRlciA9PT0gXCJBbGxcIiA/IGdhbGxlcnlJbWFnZXMgOiBnYWxsZXJ5SW1hZ2VzLmZpbHRlcigoaW1nKSA9PiBpbWcuY2F0ZWdvcnkgPT09IGFjdGl2ZUZpbHRlcik7XG5cbiAgY29uc3Qgb3BlbkxpZ2h0Ym94ID0gKGk6IG51bWJlcikgPT4gc2V0TGlnaHRib3goaSk7XG4gIGNvbnN0IGNsb3NlTGlnaHRib3ggPSAoKSA9PiBzZXRMaWdodGJveChudWxsKTtcbiAgY29uc3QgcHJldkltYWdlID0gKCkgPT5cbiAgICBzZXRMaWdodGJveCgocHJldikgPT4gKHByZXYgIT09IG51bGwgPyAocHJldiAtIDEgKyBmaWx0ZXJlZC5sZW5ndGgpICUgZmlsdGVyZWQubGVuZ3RoIDogbnVsbCkpO1xuICBjb25zdCBuZXh0SW1hZ2UgPSAoKSA9PlxuICAgIHNldExpZ2h0Ym94KChwcmV2KSA9PiAocHJldiAhPT0gbnVsbCA/IChwcmV2ICsgMSkgJSBmaWx0ZXJlZC5sZW5ndGggOiBudWxsKSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicHktMjQgbGc6cHktMzJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBweC02XCIgcmVmPXtyZWZ9PlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YHRleHQtY2VudGVyIG1heC13LTJ4bCBteC1hdXRvIG1iLTEyIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTcwMCAke2lzVmlzaWJsZSA/IFwib3BhY2l0eS0xMDAgdHJhbnNsYXRlLXktMFwiIDogXCJvcGFjaXR5LTAgdHJhbnNsYXRlLXktOFwifWB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LW1lZGl1bSB0cmFja2luZy13aWRlc3QgdXBwZXJjYXNlIHRleHQtcHJpbWFyeSBtYi00XCI+T3VyIFdvcms8L3A+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0zeGwgbGc6dGV4dC01eGwgZm9udC1oZWFkaW5nIGZvbnQtYm9sZCB0ZXh0LWZvcmVncm91bmRcIj5cbiAgICAgICAgICAgICAgU21pbGUgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ncmFkaWVudC1nb2xkXCI+VHJhbnNmb3JtYXRpb25zPC9zcGFuPlxuICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm10LTQgdGV4dC1tdXRlZC1mb3JlZ3JvdW5kIG1heC13LWxnIG14LWF1dG9cIj5cbiAgICAgICAgICAgICAgQnJvd3NlIG91ciBnYWxsZXJ5IG9mIGxpZmUtY2hhbmdpbmcgZGVudGFsIHJlc3VsdHMgYWNyb3NzIGV2ZXJ5IHNwZWNpYWx0eS5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIHsvKiBGaWx0ZXIgdGFicyAqL31cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9e2BmbGV4IGZsZXgtd3JhcCBqdXN0aWZ5LWNlbnRlciBnYXAtMyBtYi0xMiB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi03MDAgZGVsYXktMjAwICR7aXNWaXNpYmxlID8gXCJvcGFjaXR5LTEwMCB0cmFuc2xhdGUteS0wXCIgOiBcIm9wYWNpdHktMCB0cmFuc2xhdGUteS04XCJ9YH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7Y2F0ZWdvcmllcy5tYXAoKGNhdCkgPT4gKFxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAga2V5PXtjYXR9XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0QWN0aXZlRmlsdGVyKGNhdCl9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcHgtNiBweS0yLjUgcm91bmRlZC1mdWxsIHRleHQtc20gZm9udC1tZWRpdW0gdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwICR7XG4gICAgICAgICAgICAgICAgICBhY3RpdmVGaWx0ZXIgPT09IGNhdFxuICAgICAgICAgICAgICAgICAgICA/IFwiYmctcHJpbWFyeSB0ZXh0LXByaW1hcnktZm9yZWdyb3VuZCBzaGFkb3ctbGcgc2hhZG93LXByaW1hcnkvMzBcIlxuICAgICAgICAgICAgICAgICAgICA6IFwiYmctY2FyZCBib3JkZXIgYm9yZGVyLWJvcmRlciB0ZXh0LW11dGVkLWZvcmVncm91bmQgaG92ZXI6Ym9yZGVyLXByaW1hcnkvMzAgaG92ZXI6dGV4dC1mb3JlZ3JvdW5kXCJcbiAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtjYXR9XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICB7LyogTWFzb25yeS1zdHlsZSBnYWxsZXJ5ICovfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1ucy0xIHNtOmNvbHVtbnMtMiBsZzpjb2x1bW5zLTMgZ2FwLTQgbWF4LXctNnhsIG14LWF1dG8gW2NvbHVtbi1maWxsOl9iYWxhbmNlXVwiPlxuICAgICAgICAgICAge2ZpbHRlcmVkLm1hcCgoaW1nLCBpKSA9PiAoXG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBrZXk9e2ltZy5zcmN9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZ3JvdXAgcmVsYXRpdmUgYnJlYWstaW5zaWRlLWF2b2lkIG1iLTQgcm91bmRlZC0yeGwgb3ZlcmZsb3ctaGlkZGVuIGN1cnNvci1wb2ludGVyIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTYwMCAke2lzVmlzaWJsZSA/IFwib3BhY2l0eS0xMDAgc2NhbGUtMTAwXCIgOiBcIm9wYWNpdHktMCBzY2FsZS05NVwifWB9XG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgdHJhbnNpdGlvbkRlbGF5OiBpc1Zpc2libGUgPyBgJHtpICogMTIwICsgMjAwfW1zYCA6IFwiMG1zXCIgfX1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvcGVuTGlnaHRib3goaSl9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICBzcmM9e2ltZy5zcmN9XG4gICAgICAgICAgICAgICAgICBhbHQ9e2ltZy5hbHR9XG4gICAgICAgICAgICAgICAgICBsb2FkaW5nPVwibGF6eVwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1hdXRvIG9iamVjdC1jb3ZlciBncm91cC1ob3ZlcjpzY2FsZS0xMDUgdHJhbnNpdGlvbi10cmFuc2Zvcm0gZHVyYXRpb24tNzAwXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtMCBiZy1ncmFkaWVudC10by10IGZyb20tZm9yZWdyb3VuZC83MCB2aWEtdHJhbnNwYXJlbnQgdG8tdHJhbnNwYXJlbnQgb3BhY2l0eS0wIGdyb3VwLWhvdmVyOm9wYWNpdHktMTAwIHRyYW5zaXRpb24tb3BhY2l0eSBkdXJhdGlvbi0zMDBcIiAvPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgYm90dG9tLTAgbGVmdC0wIHJpZ2h0LTAgcC01IHRyYW5zbGF0ZS15LTQgb3BhY2l0eS0wIGdyb3VwLWhvdmVyOnRyYW5zbGF0ZS15LTAgZ3JvdXAtaG92ZXI6b3BhY2l0eS0xMDAgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwXCI+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2sgdGV4dC14cyBmb250LXNlbWlib2xkIHRyYWNraW5nLXdpZGVyIHVwcGVyY2FzZSB0ZXh0LXByaW1hcnkgYmctcHJpbWFyeS8xMCBiYWNrZHJvcC1ibHVyLXNtIHB4LTMgcHktMSByb3VuZGVkLWZ1bGwgbWItMlwiPlxuICAgICAgICAgICAgICAgICAgICB7aW1nLmNhdGVnb3J5fVxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1iYWNrZ3JvdW5kIGZvbnQtaGVhZGluZyBmb250LXNlbWlib2xkXCI+e2ltZy5hbHR9PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgey8qIFRodW1ibmFpbHMgc3RyaXAgKi99XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgZmxleCBqdXN0aWZ5LWNlbnRlciBnYXAtMiBtdC04IHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTcwMCBkZWxheS01MDAgJHtpc1Zpc2libGUgPyBcIm9wYWNpdHktMTAwXCIgOiBcIm9wYWNpdHktMFwifWB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2ZpbHRlcmVkLm1hcCgoaW1nLCBpKSA9PiAoXG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBrZXk9e2ltZy5zcmMgKyBcIi10aHVtYlwifVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9wZW5MaWdodGJveChpKX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTE2IGgtMTYgcm91bmRlZC14bCBvdmVyZmxvdy1oaWRkZW4gYm9yZGVyLTIgYm9yZGVyLXRyYW5zcGFyZW50IGhvdmVyOmJvcmRlci1wcmltYXJ5IHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTIwMCBvcGFjaXR5LTcwIGhvdmVyOm9wYWNpdHktMTAwXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpbWcuc3JjfSBhbHQ9e2ltZy5hbHR9IGNsYXNzTmFtZT1cInctZnVsbCBoLWZ1bGwgb2JqZWN0LWNvdmVyXCIgLz5cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG5cbiAgICAgIHsvKiBMaWdodGJveCAqL31cbiAgICAgIHtsaWdodGJveCAhPT0gbnVsbCAmJiAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9XCJmaXhlZCBpbnNldC0wIHotWzEwMF0gYmctZm9yZWdyb3VuZC85MCBiYWNrZHJvcC1ibHVyLW1kIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHAtNCBhbmltYXRlLWZhZGUtaW5cIlxuICAgICAgICAgIG9uQ2xpY2s9e2Nsb3NlTGlnaHRib3h9XG4gICAgICAgID5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBvbkNsaWNrPXtjbG9zZUxpZ2h0Ym94fVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTYgcmlnaHQtNiB0ZXh0LWJhY2tncm91bmQvODAgaG92ZXI6dGV4dC1iYWNrZ3JvdW5kIHRyYW5zaXRpb24tY29sb3JzIHotMTBcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxYIGNsYXNzTmFtZT1cImgtOCB3LThcIiAvPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7IGUuc3RvcFByb3BhZ2F0aW9uKCk7IHByZXZJbWFnZSgpOyB9fVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgbGVmdC00IGxnOmxlZnQtOCB0ZXh0LWJhY2tncm91bmQvNjAgaG92ZXI6dGV4dC1iYWNrZ3JvdW5kIHRyYW5zaXRpb24tY29sb3JzIHotMTBcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxDaGV2cm9uTGVmdCBjbGFzc05hbWU9XCJoLTEwIHctMTBcIiAvPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7IGUuc3RvcFByb3BhZ2F0aW9uKCk7IG5leHRJbWFnZSgpOyB9fVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgcmlnaHQtNCBsZzpyaWdodC04IHRleHQtYmFja2dyb3VuZC82MCBob3Zlcjp0ZXh0LWJhY2tncm91bmQgdHJhbnNpdGlvbi1jb2xvcnMgei0xMFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPENoZXZyb25SaWdodCBjbGFzc05hbWU9XCJoLTEwIHctMTBcIiAvPlxuICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy00eGwgbWF4LWgtWzg1dmhdIGFuaW1hdGUtc2NhbGUtaW5cIiBvbkNsaWNrPXsoZSkgPT4gZS5zdG9wUHJvcGFnYXRpb24oKX0+XG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIHNyYz17ZmlsdGVyZWRbbGlnaHRib3hdLnNyY31cbiAgICAgICAgICAgICAgYWx0PXtmaWx0ZXJlZFtsaWdodGJveF0uYWx0fVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1mdWxsIG9iamVjdC1jb250YWluIHJvdW5kZWQtMnhsXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG10LTRcIj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5IHRleHQteHMgZm9udC1zZW1pYm9sZCB0cmFja2luZy13aWRlciB1cHBlcmNhc2VcIj5cbiAgICAgICAgICAgICAgICB7ZmlsdGVyZWRbbGlnaHRib3hdLmNhdGVnb3J5fVxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtYmFja2dyb3VuZCBmb250LWhlYWRpbmcgZm9udC1zZW1pYm9sZCB0ZXh0LWxnIG10LTFcIj5cbiAgICAgICAgICAgICAgICB7ZmlsdGVyZWRbbGlnaHRib3hdLmFsdH1cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWJhY2tncm91bmQvNTAgdGV4dC1zbSBtdC0xXCI+XG4gICAgICAgICAgICAgICAge2xpZ2h0Ym94ICsgMX0gLyB7ZmlsdGVyZWQubGVuZ3RofVxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVNjcm9sbFJldmVhbCIsInVzZVN0YXRlIiwiWCIsIkNoZXZyb25MZWZ0IiwiQ2hldnJvblJpZ2h0IiwiZ2FsbGVyeUltYWdlcyIsInNyYyIsImFsdCIsImNhdGVnb3J5IiwiY2F0ZWdvcmllcyIsIlNldCIsIm1hcCIsImltZyIsIkdhbGxlcnlTZWN0aW9uIiwicmVmIiwiaXNWaXNpYmxlIiwiYWN0aXZlRmlsdGVyIiwic2V0QWN0aXZlRmlsdGVyIiwibGlnaHRib3giLCJzZXRMaWdodGJveCIsImZpbHRlcmVkIiwiZmlsdGVyIiwib3BlbkxpZ2h0Ym94IiwiaSIsImNsb3NlTGlnaHRib3giLCJwcmV2SW1hZ2UiLCJwcmV2IiwibGVuZ3RoIiwibmV4dEltYWdlIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImRpdiIsInAiLCJoMiIsInNwYW4iLCJjYXQiLCJidXR0b24iLCJvbkNsaWNrIiwic3R5bGUiLCJ0cmFuc2l0aW9uRGVsYXkiLCJsb2FkaW5nIiwiZSIsInN0b3BQcm9wYWdhdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsU0FBU0EsZUFBZSxRQUFRLDBCQUEwQjtBQUMxRCxTQUFTQyxRQUFRLFFBQVEsUUFBUTtBQUNqQyxTQUFTQyxDQUFDLEVBQUVDLFdBQVcsRUFBRUMsWUFBWSxRQUFRLGVBQWU7QUFFNUQsTUFBTUMsZ0JBQWdCO0lBQ3BCO1FBQ0VDLEtBQUs7UUFDTEMsS0FBSztRQUNMQyxVQUFVO0lBQ1o7SUFDQTtRQUNFRixLQUFLO1FBQ0xDLEtBQUs7UUFDTEMsVUFBVTtJQUNaO0lBQ0E7UUFDRUYsS0FBSztRQUNMQyxLQUFLO1FBQ0xDLFVBQVU7SUFDWjtJQUNBO1FBQ0VGLEtBQUs7UUFDTEMsS0FBSztRQUNMQyxVQUFVO0lBQ1o7Q0FDRDtBQUVELE1BQU1DLGFBQWE7SUFBQztPQUFVLElBQUlDLElBQUlMLGNBQWNNLEdBQUcsQ0FBQyxDQUFDQyxNQUFRQSxJQUFJSixRQUFRO0NBQUc7QUFFaEYsZUFBZSxTQUFTSzs7SUFDdEIsTUFBTSxFQUFFQyxHQUFHLEVBQUVDLFNBQVMsRUFBRSxHQUFHZjtJQUMzQixNQUFNLENBQUNnQixjQUFjQyxnQkFBZ0IsR0FBR2hCLFNBQVM7SUFDakQsTUFBTSxDQUFDaUIsVUFBVUMsWUFBWSxHQUFHbEIsU0FBd0I7SUFFeEQs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