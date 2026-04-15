import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/HeroSection.tsx");import * as RefreshRuntime from "/@react-refresh";
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/dev-server/src/components/HeroSection.tsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}

import { jsxDEV as _jsxDEV } from "/@id/__x00__jsx-source/jsx-dev-runtime";
import { Trophy } from "/node_modules/.vite/deps/lucide-react.js?v=eb25920b";
import { Button } from "/src/components/ui/button.tsx";
const HERO_BG = "https://images.squarespace-cdn.com/content/v1/67522ea9ea4b3147aabef81c/40755f97-ec1e-4acb-86f4-90c218361757/Houston-Skyline-Gold-Cropped.jpg";
export default function HeroSection() {
    return /*#__PURE__*/ _jsxDEV("section", {
        className: "relative min-h-screen flex items-center justify-center overflow-hidden",
        children: [
            /*#__PURE__*/ _jsxDEV("div", {
                className: "absolute inset-0 bg-cover bg-center scale-105 animate-[slowZoom_20s_ease-in-out_infinite_alternate]",
                style: {
                    backgroundImage: `url(${HERO_BG})`
                }
            }, void 0, false, {
                fileName: "/dev-server/src/components/HeroSection.tsx",
                lineNumber: 9,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ _jsxDEV("div", {
                className: "absolute inset-0 bg-gradient-to-b from-charcoal/80 via-charcoal/70 to-charcoal/90"
            }, void 0, false, {
                fileName: "/dev-server/src/components/HeroSection.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ _jsxDEV("div", {
                className: "relative z-10 container mx-auto px-6 text-center py-32",
                children: /*#__PURE__*/ _jsxDEV("div", {
                    className: "max-w-4xl mx-auto",
                    children: [
                        /*#__PURE__*/ _jsxDEV("div", {
                            className: "inline-flex items-center gap-2 bg-primary/20 border border-primary/30 rounded-full px-5 py-2 mb-8 animate-fade-up",
                            children: [
                                /*#__PURE__*/ _jsxDEV(Trophy, {
                                    className: "h-4 w-4 text-primary"
                                }, void 0, false, {
                                    fileName: "/dev-server/src/components/HeroSection.tsx",
                                    lineNumber: 18,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ _jsxDEV("span", {
                                    className: "text-sm font-medium text-primary",
                                    children: "Award-Winning Practice"
                                }, void 0, false, {
                                    fileName: "/dev-server/src/components/HeroSection.tsx",
                                    lineNumber: 19,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "/dev-server/src/components/HeroSection.tsx",
                            lineNumber: 17,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ _jsxDEV("h1", {
                            className: "text-4xl sm:text-5xl lg:text-7xl font-heading font-bold text-secondary-foreground leading-tight mb-6 animate-fade-up animation-delay-200",
                            children: [
                                "Voted the #1 Cosmetic &",
                                " ",
                                /*#__PURE__*/ _jsxDEV("span", {
                                    className: "text-gradient-gold",
                                    children: "Restorative Dentist"
                                }, void 0, false, {
                                    fileName: "/dev-server/src/components/HeroSection.tsx",
                                    lineNumber: 26,
                                    columnNumber: 13
                                }, this),
                                " ",
                                "in Houston, TX"
                            ]
                        }, void 0, true, {
                            fileName: "/dev-server/src/components/HeroSection.tsx",
                            lineNumber: 24,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ _jsxDEV("p", {
                            className: "text-lg sm:text-xl text-secondary-foreground/70 max-w-2xl mx-auto mb-10 font-light animate-fade-up animation-delay-400",
                            children: [
                                /*#__PURE__*/ _jsxDEV("em", {
                                    children: "Welcome to Bellaire Modern Dental."
                                }, void 0, false, {
                                    fileName: "/dev-server/src/components/HeroSection.tsx",
                                    lineNumber: 31,
                                    columnNumber: 13
                                }, this),
                                " An award-winning dental practice offering general, cosmetic, and restorative dentistry with a special focus in smile design."
                            ]
                        }, void 0, true, {
                            fileName: "/dev-server/src/components/HeroSection.tsx",
                            lineNumber: 30,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ _jsxDEV("div", {
                            className: "flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up animation-delay-600",
                            children: [
                                /*#__PURE__*/ _jsxDEV(Button, {
                                    size: "lg",
                                    className: "bg-gradient-gold text-primary-foreground hover:opacity-90 transition-all rounded-full px-10 py-6 text-base font-semibold hover:scale-105 hover:shadow-lg hover:shadow-primary/20",
                                    children: "Book a Consultation"
                                }, void 0, false, {
                                    fileName: "/dev-server/src/components/HeroSection.tsx",
                                    lineNumber: 37,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ _jsxDEV(Button, {
                                    size: "lg",
                                    variant: "outline",
                                    className: "rounded-full px-10 py-6 text-base border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10 hover:scale-105 transition-all",
                                    children: "Our Services"
                                }, void 0, false, {
                                    fileName: "/dev-server/src/components/HeroSection.tsx",
                                    lineNumber: 43,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "/dev-server/src/components/HeroSection.tsx",
                            lineNumber: 36,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/dev-server/src/components/HeroSection.tsx",
                    lineNumber: 16,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "/dev-server/src/components/HeroSection.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ _jsxDEV("div", {
                className: "absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"
            }, void 0, false, {
                fileName: "/dev-server/src/components/HeroSection.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "/dev-server/src/components/HeroSection.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
_c = HeroSection;
var _c;
$RefreshReg$(_c, "HeroSection");


if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}


if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/dev-server/src/components/HeroSection.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/dev-server/src/components/HeroSection.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkhlcm9TZWN0aW9uLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUcm9waHkgfSBmcm9tIFwibHVjaWRlLXJlYWN0XCI7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2J1dHRvblwiO1xuXG5jb25zdCBIRVJPX0JHID0gXCJodHRwczovL2ltYWdlcy5zcXVhcmVzcGFjZS1jZG4uY29tL2NvbnRlbnQvdjEvNjc1MjJlYTllYTRiMzE0N2FhYmVmODFjLzQwNzU1Zjk3LWVjMWUtNGFjYi04NmY0LTkwYzIxODM2MTc1Ny9Ib3VzdG9uLVNreWxpbmUtR29sZC1Dcm9wcGVkLmpwZ1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZXJvU2VjdGlvbigpIHtcbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBtaW4taC1zY3JlZW4gZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgb3ZlcmZsb3ctaGlkZGVuXCI+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LTAgYmctY292ZXIgYmctY2VudGVyIHNjYWxlLTEwNSBhbmltYXRlLVtzbG93Wm9vbV8yMHNfZWFzZS1pbi1vdXRfaW5maW5pdGVfYWx0ZXJuYXRlXVwiXG4gICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRJbWFnZTogYHVybCgke0hFUk9fQkd9KWAgfX1cbiAgICAgIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LTAgYmctZ3JhZGllbnQtdG8tYiBmcm9tLWNoYXJjb2FsLzgwIHZpYS1jaGFyY29hbC83MCB0by1jaGFyY29hbC85MFwiIC8+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgei0xMCBjb250YWluZXIgbXgtYXV0byBweC02IHRleHQtY2VudGVyIHB5LTMyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctNHhsIG14LWF1dG9cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiBiZy1wcmltYXJ5LzIwIGJvcmRlciBib3JkZXItcHJpbWFyeS8zMCByb3VuZGVkLWZ1bGwgcHgtNSBweS0yIG1iLTggYW5pbWF0ZS1mYWRlLXVwXCI+XG4gICAgICAgICAgICA8VHJvcGh5IGNsYXNzTmFtZT1cImgtNCB3LTQgdGV4dC1wcmltYXJ5XCIgLz5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1wcmltYXJ5XCI+XG4gICAgICAgICAgICAgIEF3YXJkLVdpbm5pbmcgUHJhY3RpY2VcbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBzbTp0ZXh0LTV4bCBsZzp0ZXh0LTd4bCBmb250LWhlYWRpbmcgZm9udC1ib2xkIHRleHQtc2Vjb25kYXJ5LWZvcmVncm91bmQgbGVhZGluZy10aWdodCBtYi02IGFuaW1hdGUtZmFkZS11cCBhbmltYXRpb24tZGVsYXktMjAwXCI+XG4gICAgICAgICAgICBWb3RlZCB0aGUgIzEgQ29zbWV0aWMgJntcIiBcIn1cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtZ3JhZGllbnQtZ29sZFwiPlJlc3RvcmF0aXZlIERlbnRpc3Q8L3NwYW4+e1wiIFwifVxuICAgICAgICAgICAgaW4gSG91c3RvbiwgVFhcbiAgICAgICAgICA8L2gxPlxuXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1sZyBzbTp0ZXh0LXhsIHRleHQtc2Vjb25kYXJ5LWZvcmVncm91bmQvNzAgbWF4LXctMnhsIG14LWF1dG8gbWItMTAgZm9udC1saWdodCBhbmltYXRlLWZhZGUtdXAgYW5pbWF0aW9uLWRlbGF5LTQwMFwiPlxuICAgICAgICAgICAgPGVtPldlbGNvbWUgdG8gQmVsbGFpcmUgTW9kZXJuIERlbnRhbC48L2VtPiBBbiBhd2FyZC13aW5uaW5nIGRlbnRhbFxuICAgICAgICAgICAgcHJhY3RpY2Ugb2ZmZXJpbmcgZ2VuZXJhbCwgY29zbWV0aWMsIGFuZCByZXN0b3JhdGl2ZSBkZW50aXN0cnkgd2l0aFxuICAgICAgICAgICAgYSBzcGVjaWFsIGZvY3VzIGluIHNtaWxlIGRlc2lnbi5cbiAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgc206ZmxleC1yb3cgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGdhcC00IGFuaW1hdGUtZmFkZS11cCBhbmltYXRpb24tZGVsYXktNjAwXCI+XG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgIHNpemU9XCJsZ1wiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWdyYWRpZW50LWdvbGQgdGV4dC1wcmltYXJ5LWZvcmVncm91bmQgaG92ZXI6b3BhY2l0eS05MCB0cmFuc2l0aW9uLWFsbCByb3VuZGVkLWZ1bGwgcHgtMTAgcHktNiB0ZXh0LWJhc2UgZm9udC1zZW1pYm9sZCBob3ZlcjpzY2FsZS0xMDUgaG92ZXI6c2hhZG93LWxnIGhvdmVyOnNoYWRvdy1wcmltYXJ5LzIwXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgQm9vayBhIENvbnN1bHRhdGlvblxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgIHNpemU9XCJsZ1wiXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1mdWxsIHB4LTEwIHB5LTYgdGV4dC1iYXNlIGJvcmRlci1zZWNvbmRhcnktZm9yZWdyb3VuZC8zMCB0ZXh0LXNlY29uZGFyeS1mb3JlZ3JvdW5kIGhvdmVyOmJnLXNlY29uZGFyeS1mb3JlZ3JvdW5kLzEwIGhvdmVyOnNjYWxlLTEwNSB0cmFuc2l0aW9uLWFsbFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIE91ciBTZXJ2aWNlc1xuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgYm90dG9tLTAgbGVmdC0wIHJpZ2h0LTAgaC0zMiBiZy1ncmFkaWVudC10by10IGZyb20tYmFja2dyb3VuZCB0by10cmFuc3BhcmVudFwiIC8+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlRyb3BoeSIsIkJ1dHRvbiIsIkhFUk9fQkciLCJIZXJvU2VjdGlvbiIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJkaXYiLCJzdHlsZSIsImJhY2tncm91bmRJbWFnZSIsInNwYW4iLCJoMSIsInAiLCJlbSIsInNpemUiLCJ2YXJpYW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLFNBQVNBLE1BQU0sUUFBUSxlQUFlO0FBQ3RDLFNBQVNDLE1BQU0sUUFBUSx5QkFBeUI7QUFFaEQsTUFBTUMsVUFBVTtBQUVoQixlQUFlLFNBQVNDO0lBQ3RCLHFCQUNFLFFBQUNDO1FBQVFDLFdBQVU7OzBCQUNqQixRQUFDQztnQkFDQ0QsV0FBVTtnQkFDVkUsT0FBTztvQkFBRUMsaUJBQWlCLENBQUMsSUFBSSxFQUFFTixRQUFRLENBQUMsQ0FBQztnQkFBQzs7Ozs7OzBCQUU5QyxRQUFDSTtnQkFBSUQsV0FBVTs7Ozs7OzBCQUVmLFFBQUNDO2dCQUFJRCxXQUFVOzBCQUNiLGNBQUEsUUFBQ0M7b0JBQUlELFdBQVU7O3NDQUNiLFFBQUNDOzRCQUFJRCxXQUFVOzs4Q0FDYixRQUFDTDtvQ0FBT0ssV0FBVTs7Ozs7OzhDQUNsQixRQUFDSTtvQ0FBS0osV0FBVTs4Q0FBbUM7Ozs7Ozs7Ozs7OztzQ0FLckQsUUFBQ0s7NEJBQUdMLFdBQVU7O2dDQUEySTtnQ0FDL0g7OENBQ3hCLFFBQUNJO29DQUFLSixXQUFVOzhDQUFxQjs7Ozs7O2dDQUEyQjtnQ0FBSTs7Ozs7OztzQ0FJdEUsUUFBQ007NEJBQUVOLFdBQVU7OzhDQUNYLFFBQUNPOzhDQUFHOzs7Ozs7Z0NBQXVDOzs7Ozs7O3NDQUs3QyxRQUFDTjs0QkFBSUQsV0FBVTs7OENBQ2IsUUFBQ0o7b0NBQ0NZLE1BQUs7b0NBQ0xSLFdBQVU7OENBQ1g7Ozs7Ozs4Q0FHRCxRQUFDSjtvQ0FDQ1ksTUFBSztvQ0FDTEMsU0FBUTtvQ0FDUlQsV0FBVTs4Q0FDWDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBT1AsUUFBQ0M7Z0JBQUlELFdBQVU7Ozs7Ozs7Ozs7OztBQUdyQjtLQW5Ed0JGIn0=