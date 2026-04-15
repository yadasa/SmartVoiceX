import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/Footer.tsx");import * as RefreshRuntime from "/@react-refresh";
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/dev-server/src/components/Footer.tsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}

import { jsxDEV as _jsxDEV } from "/@id/__x00__jsx-source/jsx-dev-runtime";
export default function Footer() {
    return /*#__PURE__*/ _jsxDEV("footer", {
        className: "bg-secondary py-12 border-t border-secondary-foreground/10",
        children: /*#__PURE__*/ _jsxDEV("div", {
            className: "container mx-auto px-6",
            children: /*#__PURE__*/ _jsxDEV("div", {
                className: "flex flex-col md:flex-row items-center justify-between gap-6",
                children: [
                    /*#__PURE__*/ _jsxDEV("div", {
                        children: [
                            /*#__PURE__*/ _jsxDEV("span", {
                                className: "font-heading text-xl font-bold text-secondary-foreground",
                                children: "Bellaire"
                            }, void 0, false, {
                                fileName: "/dev-server/src/components/Footer.tsx",
                                lineNumber: 7,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ _jsxDEV("span", {
                                className: "text-xs tracking-[0.2em] uppercase text-secondary-foreground/50 ml-2",
                                children: "Modern Dental"
                            }, void 0, false, {
                                fileName: "/dev-server/src/components/Footer.tsx",
                                lineNumber: 10,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "/dev-server/src/components/Footer.tsx",
                        lineNumber: 6,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ _jsxDEV("div", {
                        className: "flex gap-8 text-sm text-secondary-foreground/60",
                        children: [
                            /*#__PURE__*/ _jsxDEV("a", {
                                href: "#about",
                                className: "hover:text-secondary-foreground transition-colors",
                                children: "About"
                            }, void 0, false, {
                                fileName: "/dev-server/src/components/Footer.tsx",
                                lineNumber: 15,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ _jsxDEV("a", {
                                href: "#services",
                                className: "hover:text-secondary-foreground transition-colors",
                                children: "Services"
                            }, void 0, false, {
                                fileName: "/dev-server/src/components/Footer.tsx",
                                lineNumber: 16,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ _jsxDEV("a", {
                                href: "#team",
                                className: "hover:text-secondary-foreground transition-colors",
                                children: "Team"
                            }, void 0, false, {
                                fileName: "/dev-server/src/components/Footer.tsx",
                                lineNumber: 17,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ _jsxDEV("a", {
                                href: "#contact",
                                className: "hover:text-secondary-foreground transition-colors",
                                children: "Contact"
                            }, void 0, false, {
                                fileName: "/dev-server/src/components/Footer.tsx",
                                lineNumber: 18,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "/dev-server/src/components/Footer.tsx",
                        lineNumber: 14,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ _jsxDEV("p", {
                        className: "text-xs text-secondary-foreground/40",
                        children: "© 2026 Bellaire Modern Dental. All rights reserved."
                    }, void 0, false, {
                        fileName: "/dev-server/src/components/Footer.tsx",
                        lineNumber: 20,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/dev-server/src/components/Footer.tsx",
                lineNumber: 5,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "/dev-server/src/components/Footer.tsx",
            lineNumber: 4,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "/dev-server/src/components/Footer.tsx",
        lineNumber: 3,
        columnNumber: 5
    }, this);
}
_c = Footer;
var _c;
$RefreshReg$(_c, "Footer");


if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}


if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/dev-server/src/components/Footer.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/dev-server/src/components/Footer.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkZvb3Rlci50c3giXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9vdGVyKCkge1xuICByZXR1cm4gKFxuICAgIDxmb290ZXIgY2xhc3NOYW1lPVwiYmctc2Vjb25kYXJ5IHB5LTEyIGJvcmRlci10IGJvcmRlci1zZWNvbmRhcnktZm9yZWdyb3VuZC8xMFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBweC02XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBtZDpmbGV4LXJvdyBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGdhcC02XCI+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtaGVhZGluZyB0ZXh0LXhsIGZvbnQtYm9sZCB0ZXh0LXNlY29uZGFyeS1mb3JlZ3JvdW5kXCI+XG4gICAgICAgICAgICAgIEJlbGxhaXJlXG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRyYWNraW5nLVswLjJlbV0gdXBwZXJjYXNlIHRleHQtc2Vjb25kYXJ5LWZvcmVncm91bmQvNTAgbWwtMlwiPlxuICAgICAgICAgICAgICBNb2Rlcm4gRGVudGFsXG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC04IHRleHQtc20gdGV4dC1zZWNvbmRhcnktZm9yZWdyb3VuZC82MFwiPlxuICAgICAgICAgICAgPGEgaHJlZj1cIiNhYm91dFwiIGNsYXNzTmFtZT1cImhvdmVyOnRleHQtc2Vjb25kYXJ5LWZvcmVncm91bmQgdHJhbnNpdGlvbi1jb2xvcnNcIj5BYm91dDwvYT5cbiAgICAgICAgICAgIDxhIGhyZWY9XCIjc2VydmljZXNcIiBjbGFzc05hbWU9XCJob3Zlcjp0ZXh0LXNlY29uZGFyeS1mb3JlZ3JvdW5kIHRyYW5zaXRpb24tY29sb3JzXCI+U2VydmljZXM8L2E+XG4gICAgICAgICAgICA8YSBocmVmPVwiI3RlYW1cIiBjbGFzc05hbWU9XCJob3Zlcjp0ZXh0LXNlY29uZGFyeS1mb3JlZ3JvdW5kIHRyYW5zaXRpb24tY29sb3JzXCI+VGVhbTwvYT5cbiAgICAgICAgICAgIDxhIGhyZWY9XCIjY29udGFjdFwiIGNsYXNzTmFtZT1cImhvdmVyOnRleHQtc2Vjb25kYXJ5LWZvcmVncm91bmQgdHJhbnNpdGlvbi1jb2xvcnNcIj5Db250YWN0PC9hPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1zZWNvbmRhcnktZm9yZWdyb3VuZC80MFwiPlxuICAgICAgICAgICAgwqkgMjAyNiBCZWxsYWlyZSBNb2Rlcm4gRGVudGFsLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Zvb3Rlcj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJGb290ZXIiLCJmb290ZXIiLCJjbGFzc05hbWUiLCJkaXYiLCJzcGFuIiwiYSIsImhyZWYiLCJwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGVBQWUsU0FBU0E7SUFDdEIscUJBQ0UsUUFBQ0M7UUFBT0MsV0FBVTtrQkFDaEIsY0FBQSxRQUFDQztZQUFJRCxXQUFVO3NCQUNiLGNBQUEsUUFBQ0M7Z0JBQUlELFdBQVU7O2tDQUNiLFFBQUNDOzswQ0FDQyxRQUFDQztnQ0FBS0YsV0FBVTswQ0FBMkQ7Ozs7OzswQ0FHM0UsUUFBQ0U7Z0NBQUtGLFdBQVU7MENBQXVFOzs7Ozs7Ozs7Ozs7a0NBSXpGLFFBQUNDO3dCQUFJRCxXQUFVOzswQ0FDYixRQUFDRztnQ0FBRUMsTUFBSztnQ0FBU0osV0FBVTswQ0FBb0Q7Ozs7OzswQ0FDL0UsUUFBQ0c7Z0NBQUVDLE1BQUs7Z0NBQVlKLFdBQVU7MENBQW9EOzs7Ozs7MENBQ2xGLFFBQUNHO2dDQUFFQyxNQUFLO2dDQUFRSixXQUFVOzBDQUFvRDs7Ozs7OzBDQUM5RSxRQUFDRztnQ0FBRUMsTUFBSztnQ0FBV0osV0FBVTswQ0FBb0Q7Ozs7Ozs7Ozs7OztrQ0FFbkYsUUFBQ0s7d0JBQUVMLFdBQVU7a0NBQXVDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTzlEO0tBMUJ3QkYifQ==