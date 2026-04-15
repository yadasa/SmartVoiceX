import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/CTASection.tsx");import * as RefreshRuntime from "/@react-refresh";
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/dev-server/src/components/CTASection.tsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}

import { jsxDEV as _jsxDEV } from "/@id/__x00__jsx-source/jsx-dev-runtime";
var _s = $RefreshSig$();
import { Phone, MapPin, Clock } from "/node_modules/.vite/deps/lucide-react.js?v=eb25920b";
import { Button } from "/src/components/ui/button.tsx";
import { useScrollReveal } from "/src/hooks/useScrollReveal.tsx";
export default function CTASection() {
    _s();
    const { ref, isVisible } = useScrollReveal();
    return /*#__PURE__*/ _jsxDEV("section", {
        id: "contact",
        className: "py-24 lg:py-32",
        children: /*#__PURE__*/ _jsxDEV("div", {
            className: "container mx-auto px-6",
            ref: ref,
            children: /*#__PURE__*/ _jsxDEV("div", {
                className: `max-w-4xl mx-auto text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`,
                children: [
                    /*#__PURE__*/ _jsxDEV("p", {
                        className: "text-sm font-medium tracking-widest uppercase text-primary mb-4",
                        children: "Get Started"
                    }, void 0, false, {
                        fileName: "/dev-server/src/components/CTASection.tsx",
                        lineNumber: 12,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ _jsxDEV("h2", {
                        className: "text-3xl lg:text-5xl font-heading font-bold text-foreground mb-6",
                        children: [
                            "Ready to start",
                            " ",
                            /*#__PURE__*/ _jsxDEV("span", {
                                className: "text-gradient-gold",
                                children: "smiling"
                            }, void 0, false, {
                                fileName: "/dev-server/src/components/CTASection.tsx",
                                lineNumber: 17,
                                columnNumber: 13
                            }, this),
                            "?"
                        ]
                    }, void 0, true, {
                        fileName: "/dev-server/src/components/CTASection.tsx",
                        lineNumber: 15,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ _jsxDEV("p", {
                        className: "text-muted-foreground text-lg mb-10 max-w-xl mx-auto",
                        children: "Give us a call or send us a message to book your initial appointment. New patients are always welcome."
                    }, void 0, false, {
                        fileName: "/dev-server/src/components/CTASection.tsx",
                        lineNumber: 19,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ _jsxDEV("div", {
                        className: "flex flex-col sm:flex-row items-center justify-center gap-4 mb-16",
                        children: [
                            /*#__PURE__*/ _jsxDEV(Button, {
                                size: "lg",
                                className: "bg-gradient-gold text-primary-foreground hover:opacity-90 rounded-full px-10 py-6 text-base font-semibold hover:scale-105 transition-all hover:shadow-lg hover:shadow-primary/20",
                                children: "Book Consultation"
                            }, void 0, false, {
                                fileName: "/dev-server/src/components/CTASection.tsx",
                                lineNumber: 25,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ _jsxDEV("a", {
                                href: "tel:2818791786",
                                children: /*#__PURE__*/ _jsxDEV(Button, {
                                    size: "lg",
                                    variant: "outline",
                                    className: "rounded-full px-10 py-6 text-base border-primary text-primary hover:bg-primary/10 hover:scale-105 transition-all",
                                    children: [
                                        /*#__PURE__*/ _jsxDEV(Phone, {
                                            className: "h-4 w-4 mr-2"
                                        }, void 0, false, {
                                            fileName: "/dev-server/src/components/CTASection.tsx",
                                            lineNumber: 37,
                                            columnNumber: 17
                                        }, this),
                                        "(281) 879-1786"
                                    ]
                                }, void 0, true, {
                                    fileName: "/dev-server/src/components/CTASection.tsx",
                                    lineNumber: 32,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "/dev-server/src/components/CTASection.tsx",
                                lineNumber: 31,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "/dev-server/src/components/CTASection.tsx",
                        lineNumber: 24,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ _jsxDEV("div", {
                        className: "grid grid-cols-1 sm:grid-cols-3 gap-8 text-center",
                        children: [
                            /*#__PURE__*/ _jsxDEV("div", {
                                className: "flex flex-col items-center gap-3 group",
                                children: [
                                    /*#__PURE__*/ _jsxDEV("div", {
                                        className: "w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300",
                                        children: /*#__PURE__*/ _jsxDEV(MapPin, {
                                            className: "h-5 w-5 text-primary"
                                        }, void 0, false, {
                                            fileName: "/dev-server/src/components/CTASection.tsx",
                                            lineNumber: 46,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "/dev-server/src/components/CTASection.tsx",
                                        lineNumber: 45,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ _jsxDEV("div", {
                                        children: [
                                            /*#__PURE__*/ _jsxDEV("p", {
                                                className: "font-semibold text-foreground text-sm",
                                                children: "Visit Us"
                                            }, void 0, false, {
                                                fileName: "/dev-server/src/components/CTASection.tsx",
                                                lineNumber: 49,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ _jsxDEV("p", {
                                                className: "text-muted-foreground text-sm",
                                                children: "6630 Harwin Dr, Houston, TX 77036"
                                            }, void 0, false, {
                                                fileName: "/dev-server/src/components/CTASection.tsx",
                                                lineNumber: 50,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "/dev-server/src/components/CTASection.tsx",
                                        lineNumber: 48,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "/dev-server/src/components/CTASection.tsx",
                                lineNumber: 44,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ _jsxDEV("div", {
                                className: "flex flex-col items-center gap-3 group",
                                children: [
                                    /*#__PURE__*/ _jsxDEV("div", {
                                        className: "w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300",
                                        children: /*#__PURE__*/ _jsxDEV(Phone, {
                                            className: "h-5 w-5 text-primary"
                                        }, void 0, false, {
                                            fileName: "/dev-server/src/components/CTASection.tsx",
                                            lineNumber: 57,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "/dev-server/src/components/CTASection.tsx",
                                        lineNumber: 56,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ _jsxDEV("div", {
                                        children: [
                                            /*#__PURE__*/ _jsxDEV("p", {
                                                className: "font-semibold text-foreground text-sm",
                                                children: "Call Us"
                                            }, void 0, false, {
                                                fileName: "/dev-server/src/components/CTASection.tsx",
                                                lineNumber: 60,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ _jsxDEV("p", {
                                                className: "text-muted-foreground text-sm",
                                                children: "(281) 879-1786"
                                            }, void 0, false, {
                                                fileName: "/dev-server/src/components/CTASection.tsx",
                                                lineNumber: 61,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "/dev-server/src/components/CTASection.tsx",
                                        lineNumber: 59,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "/dev-server/src/components/CTASection.tsx",
                                lineNumber: 55,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ _jsxDEV("div", {
                                className: "flex flex-col items-center gap-3 group",
                                children: [
                                    /*#__PURE__*/ _jsxDEV("div", {
                                        className: "w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300",
                                        children: /*#__PURE__*/ _jsxDEV(Clock, {
                                            className: "h-5 w-5 text-primary"
                                        }, void 0, false, {
                                            fileName: "/dev-server/src/components/CTASection.tsx",
                                            lineNumber: 66,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "/dev-server/src/components/CTASection.tsx",
                                        lineNumber: 65,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ _jsxDEV("div", {
                                        children: [
                                            /*#__PURE__*/ _jsxDEV("p", {
                                                className: "font-semibold text-foreground text-sm",
                                                children: "Hours"
                                            }, void 0, false, {
                                                fileName: "/dev-server/src/components/CTASection.tsx",
                                                lineNumber: 69,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ _jsxDEV("p", {
                                                className: "text-muted-foreground text-sm",
                                                children: "Mon–Fri: 9am–5pm"
                                            }, void 0, false, {
                                                fileName: "/dev-server/src/components/CTASection.tsx",
                                                lineNumber: 70,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "/dev-server/src/components/CTASection.tsx",
                                        lineNumber: 68,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "/dev-server/src/components/CTASection.tsx",
                                lineNumber: 64,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "/dev-server/src/components/CTASection.tsx",
                        lineNumber: 43,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/dev-server/src/components/CTASection.tsx",
                lineNumber: 11,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "/dev-server/src/components/CTASection.tsx",
            lineNumber: 10,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "/dev-server/src/components/CTASection.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
_s(CTASection, "aCOyLg7yh4JHGJYS1/e1njthfZ4=", false, function() {
    return [
        useScrollReveal
    ];
});
_c = CTASection;
var _c;
$RefreshReg$(_c, "CTASection");


if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}


if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/dev-server/src/components/CTASection.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/dev-server/src/components/CTASection.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNUQVNlY3Rpb24udHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBob25lLCBNYXBQaW4sIENsb2NrIH0gZnJvbSBcImx1Y2lkZS1yZWFjdFwiO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9idXR0b25cIjtcbmltcG9ydCB7IHVzZVNjcm9sbFJldmVhbCB9IGZyb20gXCJAL2hvb2tzL3VzZVNjcm9sbFJldmVhbFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDVEFTZWN0aW9uKCkge1xuICBjb25zdCB7IHJlZiwgaXNWaXNpYmxlIH0gPSB1c2VTY3JvbGxSZXZlYWwoKTtcblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGlkPVwiY29udGFjdFwiIGNsYXNzTmFtZT1cInB5LTI0IGxnOnB5LTMyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHB4LTZcIiByZWY9e3JlZn0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgbWF4LXctNHhsIG14LWF1dG8gdGV4dC1jZW50ZXIgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tNzAwICR7aXNWaXNpYmxlID8gXCJvcGFjaXR5LTEwMCB0cmFuc2xhdGUteS0wXCIgOiBcIm9wYWNpdHktMCB0cmFuc2xhdGUteS04XCJ9YH0+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LW1lZGl1bSB0cmFja2luZy13aWRlc3QgdXBwZXJjYXNlIHRleHQtcHJpbWFyeSBtYi00XCI+XG4gICAgICAgICAgICBHZXQgU3RhcnRlZFxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0zeGwgbGc6dGV4dC01eGwgZm9udC1oZWFkaW5nIGZvbnQtYm9sZCB0ZXh0LWZvcmVncm91bmQgbWItNlwiPlxuICAgICAgICAgICAgUmVhZHkgdG8gc3RhcnR7XCIgXCJ9XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWdyYWRpZW50LWdvbGRcIj5zbWlsaW5nPC9zcGFuPj9cbiAgICAgICAgICA8L2gyPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbXV0ZWQtZm9yZWdyb3VuZCB0ZXh0LWxnIG1iLTEwIG1heC13LXhsIG14LWF1dG9cIj5cbiAgICAgICAgICAgIEdpdmUgdXMgYSBjYWxsIG9yIHNlbmQgdXMgYSBtZXNzYWdlIHRvIGJvb2sgeW91ciBpbml0aWFsXG4gICAgICAgICAgICBhcHBvaW50bWVudC4gTmV3IHBhdGllbnRzIGFyZSBhbHdheXMgd2VsY29tZS5cbiAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgc206ZmxleC1yb3cgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGdhcC00IG1iLTE2XCI+XG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgIHNpemU9XCJsZ1wiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWdyYWRpZW50LWdvbGQgdGV4dC1wcmltYXJ5LWZvcmVncm91bmQgaG92ZXI6b3BhY2l0eS05MCByb3VuZGVkLWZ1bGwgcHgtMTAgcHktNiB0ZXh0LWJhc2UgZm9udC1zZW1pYm9sZCBob3ZlcjpzY2FsZS0xMDUgdHJhbnNpdGlvbi1hbGwgaG92ZXI6c2hhZG93LWxnIGhvdmVyOnNoYWRvdy1wcmltYXJ5LzIwXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgQm9vayBDb25zdWx0YXRpb25cbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPGEgaHJlZj1cInRlbDoyODE4NzkxNzg2XCI+XG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICBzaXplPVwibGdcIlxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLWZ1bGwgcHgtMTAgcHktNiB0ZXh0LWJhc2UgYm9yZGVyLXByaW1hcnkgdGV4dC1wcmltYXJ5IGhvdmVyOmJnLXByaW1hcnkvMTAgaG92ZXI6c2NhbGUtMTA1IHRyYW5zaXRpb24tYWxsXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxQaG9uZSBjbGFzc05hbWU9XCJoLTQgdy00IG1yLTJcIiAvPlxuICAgICAgICAgICAgICAgICgyODEpIDg3OS0xNzg2XG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIHNtOmdyaWQtY29scy0zIGdhcC04IHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGdhcC0zIGdyb3VwXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xMiBoLTEyIHJvdW5kZWQtZnVsbCBiZy1wcmltYXJ5LzEwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGdyb3VwLWhvdmVyOmJnLXByaW1hcnkvMjAgZ3JvdXAtaG92ZXI6c2NhbGUtMTEwIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMFwiPlxuICAgICAgICAgICAgICAgIDxNYXBQaW4gY2xhc3NOYW1lPVwiaC01IHctNSB0ZXh0LXByaW1hcnlcIiAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIHRleHQtZm9yZWdyb3VuZCB0ZXh0LXNtXCI+VmlzaXQgVXM8L3A+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1tdXRlZC1mb3JlZ3JvdW5kIHRleHQtc21cIj5cbiAgICAgICAgICAgICAgICAgIDY2MzAgSGFyd2luIERyLCBIb3VzdG9uLCBUWCA3NzAzNlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgZ2FwLTMgZ3JvdXBcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEyIGgtMTIgcm91bmRlZC1mdWxsIGJnLXByaW1hcnkvMTAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZ3JvdXAtaG92ZXI6YmctcHJpbWFyeS8yMCBncm91cC1ob3ZlcjpzY2FsZS0xMTAgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwXCI+XG4gICAgICAgICAgICAgICAgPFBob25lIGNsYXNzTmFtZT1cImgtNSB3LTUgdGV4dC1wcmltYXJ5XCIgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCB0ZXh0LWZvcmVncm91bmQgdGV4dC1zbVwiPkNhbGwgVXM8L3A+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1tdXRlZC1mb3JlZ3JvdW5kIHRleHQtc21cIj4oMjgxKSA4NzktMTc4NjwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgZ2FwLTMgZ3JvdXBcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEyIGgtMTIgcm91bmRlZC1mdWxsIGJnLXByaW1hcnkvMTAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZ3JvdXAtaG92ZXI6YmctcHJpbWFyeS8yMCBncm91cC1ob3ZlcjpzY2FsZS0xMTAgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwXCI+XG4gICAgICAgICAgICAgICAgPENsb2NrIGNsYXNzTmFtZT1cImgtNSB3LTUgdGV4dC1wcmltYXJ5XCIgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCB0ZXh0LWZvcmVncm91bmQgdGV4dC1zbVwiPkhvdXJzPC9wPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbXV0ZWQtZm9yZWdyb3VuZCB0ZXh0LXNtXCI+XG4gICAgICAgICAgICAgICAgICBNb27igJNGcmk6IDlhbeKAkzVwbVxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUGhvbmUiLCJNYXBQaW4iLCJDbG9jayIsIkJ1dHRvbiIsInVzZVNjcm9sbFJldmVhbCIsIkNUQVNlY3Rpb24iLCJyZWYiLCJpc1Zpc2libGUiLCJzZWN0aW9uIiwiaWQiLCJjbGFzc05hbWUiLCJkaXYiLCJwIiwiaDIiLCJzcGFuIiwic2l6ZSIsImEiLCJocmVmIiwidmFyaWFudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsU0FBU0EsS0FBSyxFQUFFQyxNQUFNLEVBQUVDLEtBQUssUUFBUSxlQUFlO0FBQ3BELFNBQVNDLE1BQU0sUUFBUSx5QkFBeUI7QUFDaEQsU0FBU0MsZUFBZSxRQUFRLDBCQUEwQjtBQUUxRCxlQUFlLFNBQVNDOztJQUN0QixNQUFNLEVBQUVDLEdBQUcsRUFBRUMsU0FBUyxFQUFFLEdBQUdIO0lBRTNCLHFCQUNFLFFBQUNJO1FBQVFDLElBQUc7UUFBVUMsV0FBVTtrQkFDOUIsY0FBQSxRQUFDQztZQUFJRCxXQUFVO1lBQXlCSixLQUFLQTtzQkFDM0MsY0FBQSxRQUFDSztnQkFBSUQsV0FBVyxDQUFDLDBEQUEwRCxFQUFFSCxZQUFZLDhCQUE4QiwyQkFBMkI7O2tDQUNoSixRQUFDSzt3QkFBRUYsV0FBVTtrQ0FBa0U7Ozs7OztrQ0FHL0UsUUFBQ0c7d0JBQUdILFdBQVU7OzRCQUFtRTs0QkFDaEU7MENBQ2YsUUFBQ0k7Z0NBQUtKLFdBQVU7MENBQXFCOzs7Ozs7NEJBQWM7Ozs7Ozs7a0NBRXJELFFBQUNFO3dCQUFFRixXQUFVO2tDQUF1RDs7Ozs7O2tDQUtwRSxRQUFDQzt3QkFBSUQsV0FBVTs7MENBQ2IsUUFBQ1A7Z0NBQ0NZLE1BQUs7Z0NBQ0xMLFdBQVU7MENBQ1g7Ozs7OzswQ0FHRCxRQUFDTTtnQ0FBRUMsTUFBSzswQ0FDTixjQUFBLFFBQUNkO29DQUNDWSxNQUFLO29DQUNMRyxTQUFRO29DQUNSUixXQUFVOztzREFFVixRQUFDVjs0Q0FBTVUsV0FBVTs7Ozs7O3dDQUFpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQU14QyxRQUFDQzt3QkFBSUQsV0FBVTs7MENBQ2IsUUFBQ0M7Z0NBQUlELFdBQVU7O2tEQUNiLFFBQUNDO3dDQUFJRCxXQUFVO2tEQUNiLGNBQUEsUUFBQ1Q7NENBQU9TLFdBQVU7Ozs7Ozs7Ozs7O2tEQUVwQixRQUFDQzs7MERBQ0MsUUFBQ0M7Z0RBQUVGLFdBQVU7MERBQXdDOzs7Ozs7MERBQ3JELFFBQUNFO2dEQUFFRixXQUFVOzBEQUFnQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBDQUtqRCxRQUFDQztnQ0FBSUQsV0FBVTs7a0RBQ2IsUUFBQ0M7d0NBQUlELFdBQVU7a0RBQ2IsY0FBQSxRQUFDVjs0Q0FBTVUsV0FBVTs7Ozs7Ozs7Ozs7a0RBRW5CLFFBQUNDOzswREFDQyxRQUFDQztnREFBRUYsV0FBVTswREFBd0M7Ozs7OzswREFDckQsUUFBQ0U7Z0RBQUVGLFdBQVU7MERBQWdDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7MENBR2pELFFBQUNDO2dDQUFJRCxXQUFVOztrREFDYixRQUFDQzt3Q0FBSUQsV0FBVTtrREFDYixjQUFBLFFBQUNSOzRDQUFNUSxXQUFVOzs7Ozs7Ozs7OztrREFFbkIsUUFBQ0M7OzBEQUNDLFFBQUNDO2dEQUFFRixXQUFVOzBEQUF3Qzs7Ozs7OzBEQUNyRCxRQUFDRTtnREFBRUYsV0FBVTswREFBZ0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVN0Q7R0EzRXdCTDs7UUFDS0Q7OztLQURMQyJ9