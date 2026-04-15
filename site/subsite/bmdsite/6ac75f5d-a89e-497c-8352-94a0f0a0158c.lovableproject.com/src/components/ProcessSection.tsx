import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/ProcessSection.tsx");import * as RefreshRuntime from "/@react-refresh";
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/dev-server/src/components/ProcessSection.tsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}

import { jsxDEV as _jsxDEV } from "/@id/__x00__jsx-source/jsx-dev-runtime";
var _s = $RefreshSig$();
import { CalendarCheck, Stethoscope, Sparkles, SmilePlus } from "/node_modules/.vite/deps/lucide-react.js?v=eb25920b";
import { useScrollReveal } from "/src/hooks/useScrollReveal.tsx";
const steps = [
    {
        icon: CalendarCheck,
        step: "01",
        title: "Book Your Visit",
        description: "Schedule a free consultation online or give us a call. We'll find a time that works for you."
    },
    {
        icon: Stethoscope,
        step: "02",
        title: "Comprehensive Exam",
        description: "Our team performs a thorough evaluation using the latest diagnostic technology."
    },
    {
        icon: Sparkles,
        step: "03",
        title: "Custom Treatment Plan",
        description: "We design a personalized plan tailored to your goals, timeline, and budget."
    },
    {
        icon: SmilePlus,
        step: "04",
        title: "Love Your Smile",
        description: "Walk out with the confidence of a beautiful, healthy smile you'll be proud to show off."
    }
];
export default function ProcessSection() {
    _s();
    const { ref, isVisible } = useScrollReveal();
    return /*#__PURE__*/ _jsxDEV("section", {
        className: "py-24 lg:py-32 bg-muted/30",
        children: /*#__PURE__*/ _jsxDEV("div", {
            className: "container mx-auto px-6",
            ref: ref,
            children: [
                /*#__PURE__*/ _jsxDEV("div", {
                    className: `text-center max-w-2xl mx-auto mb-20 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`,
                    children: [
                        /*#__PURE__*/ _jsxDEV("p", {
                            className: "text-sm font-medium tracking-widest uppercase text-primary mb-4",
                            children: "How It Works"
                        }, void 0, false, {
                            fileName: "/dev-server/src/components/ProcessSection.tsx",
                            lineNumber: 38,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ _jsxDEV("h2", {
                            className: "text-3xl lg:text-5xl font-heading font-bold text-foreground",
                            children: [
                                "Your journey to a ",
                                /*#__PURE__*/ _jsxDEV("span", {
                                    className: "text-gradient-gold",
                                    children: "perfect smile"
                                }, void 0, false, {
                                    fileName: "/dev-server/src/components/ProcessSection.tsx",
                                    lineNumber: 42,
                                    columnNumber: 31
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "/dev-server/src/components/ProcessSection.tsx",
                            lineNumber: 41,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/dev-server/src/components/ProcessSection.tsx",
                    lineNumber: 37,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ _jsxDEV("div", {
                    className: "relative max-w-5xl mx-auto",
                    children: [
                        /*#__PURE__*/ _jsxDEV("div", {
                            className: "hidden lg:block absolute top-24 left-[10%] right-[10%] h-[2px]",
                            children: /*#__PURE__*/ _jsxDEV("div", {
                                className: "h-full bg-gradient-to-r from-transparent via-primary/30 to-transparent transition-all duration-1000",
                                style: {
                                    transform: isVisible ? "scaleX(1)" : "scaleX(0)",
                                    transformOrigin: "left"
                                }
                            }, void 0, false, {
                                fileName: "/dev-server/src/components/ProcessSection.tsx",
                                lineNumber: 49,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "/dev-server/src/components/ProcessSection.tsx",
                            lineNumber: 48,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ _jsxDEV("div", {
                            className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10",
                            children: steps.map((step, i)=>/*#__PURE__*/ _jsxDEV("div", {
                                    className: `relative text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`,
                                    style: {
                                        transitionDelay: isVisible ? `${i * 200}ms` : "0ms"
                                    },
                                    children: [
                                        /*#__PURE__*/ _jsxDEV("div", {
                                            className: "relative mx-auto mb-6 w-20 h-20",
                                            children: [
                                                /*#__PURE__*/ _jsxDEV("div", {
                                                    className: "absolute inset-0 rounded-full border-2 border-primary/20 animate-[spin_20s_linear_infinite]",
                                                    style: {
                                                        animationDelay: `${i * -5}s`
                                                    },
                                                    children: /*#__PURE__*/ _jsxDEV("div", {
                                                        className: "absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-primary rounded-full"
                                                    }, void 0, false, {
                                                        fileName: "/dev-server/src/components/ProcessSection.tsx",
                                                        lineNumber: 68,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "/dev-server/src/components/ProcessSection.tsx",
                                                    lineNumber: 67,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ _jsxDEV("div", {
                                                    className: "absolute inset-2 rounded-full bg-card border border-border flex items-center justify-center shadow-lg group-hover:shadow-primary/10",
                                                    children: /*#__PURE__*/ _jsxDEV(step.icon, {
                                                        className: "h-7 w-7 text-primary"
                                                    }, void 0, false, {
                                                        fileName: "/dev-server/src/components/ProcessSection.tsx",
                                                        lineNumber: 71,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "/dev-server/src/components/ProcessSection.tsx",
                                                    lineNumber: 70,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "/dev-server/src/components/ProcessSection.tsx",
                                            lineNumber: 66,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ _jsxDEV("span", {
                                            className: "text-xs font-bold tracking-widest text-primary/60 uppercase",
                                            children: [
                                                "Step ",
                                                step.step
                                            ]
                                        }, void 0, true, {
                                            fileName: "/dev-server/src/components/ProcessSection.tsx",
                                            lineNumber: 75,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ _jsxDEV("h3", {
                                            className: "text-lg font-heading font-semibold text-foreground mt-2 mb-3",
                                            children: step.title
                                        }, void 0, false, {
                                            fileName: "/dev-server/src/components/ProcessSection.tsx",
                                            lineNumber: 78,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ _jsxDEV("p", {
                                            className: "text-muted-foreground text-sm leading-relaxed",
                                            children: step.description
                                        }, void 0, false, {
                                            fileName: "/dev-server/src/components/ProcessSection.tsx",
                                            lineNumber: 81,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, step.step, true, {
                                    fileName: "/dev-server/src/components/ProcessSection.tsx",
                                    lineNumber: 60,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "/dev-server/src/components/ProcessSection.tsx",
                            lineNumber: 58,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/dev-server/src/components/ProcessSection.tsx",
                    lineNumber: 46,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "/dev-server/src/components/ProcessSection.tsx",
            lineNumber: 36,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "/dev-server/src/components/ProcessSection.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, this);
}
_s(ProcessSection, "aCOyLg7yh4JHGJYS1/e1njthfZ4=", false, function() {
    return [
        useScrollReveal
    ];
});
_c = ProcessSection;
var _c;
$RefreshReg$(_c, "ProcessSection");


if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}


if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/dev-server/src/components/ProcessSection.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/dev-server/src/components/ProcessSection.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlByb2Nlc3NTZWN0aW9uLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYWxlbmRhckNoZWNrLCBTdGV0aG9zY29wZSwgU3BhcmtsZXMsIFNtaWxlUGx1cyB9IGZyb20gXCJsdWNpZGUtcmVhY3RcIjtcbmltcG9ydCB7IHVzZVNjcm9sbFJldmVhbCB9IGZyb20gXCJAL2hvb2tzL3VzZVNjcm9sbFJldmVhbFwiO1xuXG5jb25zdCBzdGVwcyA9IFtcbiAge1xuICAgIGljb246IENhbGVuZGFyQ2hlY2ssXG4gICAgc3RlcDogXCIwMVwiLFxuICAgIHRpdGxlOiBcIkJvb2sgWW91ciBWaXNpdFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlNjaGVkdWxlIGEgZnJlZSBjb25zdWx0YXRpb24gb25saW5lIG9yIGdpdmUgdXMgYSBjYWxsLiBXZSdsbCBmaW5kIGEgdGltZSB0aGF0IHdvcmtzIGZvciB5b3UuXCIsXG4gIH0sXG4gIHtcbiAgICBpY29uOiBTdGV0aG9zY29wZSxcbiAgICBzdGVwOiBcIjAyXCIsXG4gICAgdGl0bGU6IFwiQ29tcHJlaGVuc2l2ZSBFeGFtXCIsXG4gICAgZGVzY3JpcHRpb246IFwiT3VyIHRlYW0gcGVyZm9ybXMgYSB0aG9yb3VnaCBldmFsdWF0aW9uIHVzaW5nIHRoZSBsYXRlc3QgZGlhZ25vc3RpYyB0ZWNobm9sb2d5LlwiLFxuICB9LFxuICB7XG4gICAgaWNvbjogU3BhcmtsZXMsXG4gICAgc3RlcDogXCIwM1wiLFxuICAgIHRpdGxlOiBcIkN1c3RvbSBUcmVhdG1lbnQgUGxhblwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIldlIGRlc2lnbiBhIHBlcnNvbmFsaXplZCBwbGFuIHRhaWxvcmVkIHRvIHlvdXIgZ29hbHMsIHRpbWVsaW5lLCBhbmQgYnVkZ2V0LlwiLFxuICB9LFxuICB7XG4gICAgaWNvbjogU21pbGVQbHVzLFxuICAgIHN0ZXA6IFwiMDRcIixcbiAgICB0aXRsZTogXCJMb3ZlIFlvdXIgU21pbGVcIixcbiAgICBkZXNjcmlwdGlvbjogXCJXYWxrIG91dCB3aXRoIHRoZSBjb25maWRlbmNlIG9mIGEgYmVhdXRpZnVsLCBoZWFsdGh5IHNtaWxlIHlvdSdsbCBiZSBwcm91ZCB0byBzaG93IG9mZi5cIixcbiAgfSxcbl07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2Nlc3NTZWN0aW9uKCkge1xuICBjb25zdCB7IHJlZiwgaXNWaXNpYmxlIH0gPSB1c2VTY3JvbGxSZXZlYWwoKTtcblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInB5LTI0IGxnOnB5LTMyIGJnLW11dGVkLzMwXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHB4LTZcIiByZWY9e3JlZn0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgdGV4dC1jZW50ZXIgbWF4LXctMnhsIG14LWF1dG8gbWItMjAgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tNzAwICR7aXNWaXNpYmxlID8gXCJvcGFjaXR5LTEwMCB0cmFuc2xhdGUteS0wXCIgOiBcIm9wYWNpdHktMCB0cmFuc2xhdGUteS04XCJ9YH0+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LW1lZGl1bSB0cmFja2luZy13aWRlc3QgdXBwZXJjYXNlIHRleHQtcHJpbWFyeSBtYi00XCI+XG4gICAgICAgICAgICBIb3cgSXQgV29ya3NcbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtM3hsIGxnOnRleHQtNXhsIGZvbnQtaGVhZGluZyBmb250LWJvbGQgdGV4dC1mb3JlZ3JvdW5kXCI+XG4gICAgICAgICAgICBZb3VyIGpvdXJuZXkgdG8gYSA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWdyYWRpZW50LWdvbGRcIj5wZXJmZWN0IHNtaWxlPC9zcGFuPlxuICAgICAgICAgIDwvaDI+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgbWF4LXctNXhsIG14LWF1dG9cIj5cbiAgICAgICAgICB7LyogQ29ubmVjdGluZyBsaW5lICovfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGlkZGVuIGxnOmJsb2NrIGFic29sdXRlIHRvcC0yNCBsZWZ0LVsxMCVdIHJpZ2h0LVsxMCVdIGgtWzJweF1cIj5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC1mdWxsIGJnLWdyYWRpZW50LXRvLXIgZnJvbS10cmFuc3BhcmVudCB2aWEtcHJpbWFyeS8zMCB0by10cmFuc3BhcmVudCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0xMDAwXCJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IGlzVmlzaWJsZSA/IFwic2NhbGVYKDEpXCIgOiBcInNjYWxlWCgwKVwiLFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybU9yaWdpbjogXCJsZWZ0XCIsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIHNtOmdyaWQtY29scy0yIGxnOmdyaWQtY29scy00IGdhcC0xMFwiPlxuICAgICAgICAgICAge3N0ZXBzLm1hcCgoc3RlcCwgaSkgPT4gKFxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAga2V5PXtzdGVwLnN0ZXB9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcmVsYXRpdmUgdGV4dC1jZW50ZXIgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tNzAwICR7aXNWaXNpYmxlID8gXCJvcGFjaXR5LTEwMCB0cmFuc2xhdGUteS0wXCIgOiBcIm9wYWNpdHktMCB0cmFuc2xhdGUteS0xMlwifWB9XG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgdHJhbnNpdGlvbkRlbGF5OiBpc1Zpc2libGUgPyBgJHtpICogMjAwfW1zYCA6IFwiMG1zXCIgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHsvKiBTdGVwIG51bWJlciByaW5nICovfVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgbXgtYXV0byBtYi02IHctMjAgaC0yMFwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0wIHJvdW5kZWQtZnVsbCBib3JkZXItMiBib3JkZXItcHJpbWFyeS8yMCBhbmltYXRlLVtzcGluXzIwc19saW5lYXJfaW5maW5pdGVdXCIgc3R5bGU9e3sgYW5pbWF0aW9uRGVsYXk6IGAke2kgKiAtNX1zYCB9fT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSAtdG9wLTEgbGVmdC0xLzIgLXRyYW5zbGF0ZS14LTEvMiB3LTIgaC0yIGJnLXByaW1hcnkgcm91bmRlZC1mdWxsXCIgLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0yIHJvdW5kZWQtZnVsbCBiZy1jYXJkIGJvcmRlciBib3JkZXItYm9yZGVyIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHNoYWRvdy1sZyBncm91cC1ob3ZlcjpzaGFkb3ctcHJpbWFyeS8xMFwiPlxuICAgICAgICAgICAgICAgICAgICA8c3RlcC5pY29uIGNsYXNzTmFtZT1cImgtNyB3LTcgdGV4dC1wcmltYXJ5XCIgLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14cyBmb250LWJvbGQgdHJhY2tpbmctd2lkZXN0IHRleHQtcHJpbWFyeS82MCB1cHBlcmNhc2VcIj5cbiAgICAgICAgICAgICAgICAgIFN0ZXAge3N0ZXAuc3RlcH1cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1oZWFkaW5nIGZvbnQtc2VtaWJvbGQgdGV4dC1mb3JlZ3JvdW5kIG10LTIgbWItM1wiPlxuICAgICAgICAgICAgICAgICAge3N0ZXAudGl0bGV9XG4gICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkLWZvcmVncm91bmQgdGV4dC1zbSBsZWFkaW5nLXJlbGF4ZWRcIj5cbiAgICAgICAgICAgICAgICAgIHtzdGVwLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiQ2FsZW5kYXJDaGVjayIsIlN0ZXRob3Njb3BlIiwiU3BhcmtsZXMiLCJTbWlsZVBsdXMiLCJ1c2VTY3JvbGxSZXZlYWwiLCJzdGVwcyIsImljb24iLCJzdGVwIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsIlByb2Nlc3NTZWN0aW9uIiwicmVmIiwiaXNWaXNpYmxlIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImRpdiIsInAiLCJoMiIsInNwYW4iLCJzdHlsZSIsInRyYW5zZm9ybSIsInRyYW5zZm9ybU9yaWdpbiIsIm1hcCIsImkiLCJ0cmFuc2l0aW9uRGVsYXkiLCJhbmltYXRpb25EZWxheSIsImgzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxTQUFTQSxhQUFhLEVBQUVDLFdBQVcsRUFBRUMsUUFBUSxFQUFFQyxTQUFTLFFBQVEsZUFBZTtBQUMvRSxTQUFTQyxlQUFlLFFBQVEsMEJBQTBCO0FBRTFELE1BQU1DLFFBQVE7SUFDWjtRQUNFQyxNQUFNTjtRQUNOTyxNQUFNO1FBQ05DLE9BQU87UUFDUEMsYUFBYTtJQUNmO0lBQ0E7UUFDRUgsTUFBTUw7UUFDTk0sTUFBTTtRQUNOQyxPQUFPO1FBQ1BDLGFBQWE7SUFDZjtJQUNBO1FBQ0VILE1BQU1KO1FBQ05LLE1BQU07UUFDTkMsT0FBTztRQUNQQyxhQUFhO0lBQ2Y7SUFDQTtRQUNFSCxNQUFNSDtRQUNOSSxNQUFNO1FBQ05DLE9BQU87UUFDUEMsYUFBYTtJQUNmO0NBQ0Q7QUFFRCxlQUFlLFNBQVNDOztJQUN0QixNQUFNLEVBQUVDLEdBQUcsRUFBRUMsU0FBUyxFQUFFLEdBQUdSO0lBRTNCLHFCQUNFLFFBQUNTO1FBQVFDLFdBQVU7a0JBQ2pCLGNBQUEsUUFBQ0M7WUFBSUQsV0FBVTtZQUF5QkgsS0FBS0E7OzhCQUMzQyxRQUFDSTtvQkFBSUQsV0FBVyxDQUFDLGdFQUFnRSxFQUFFRixZQUFZLDhCQUE4QiwyQkFBMkI7O3NDQUN0SixRQUFDSTs0QkFBRUYsV0FBVTtzQ0FBa0U7Ozs7OztzQ0FHL0UsUUFBQ0c7NEJBQUdILFdBQVU7O2dDQUE4RDs4Q0FDeEQsUUFBQ0k7b0NBQUtKLFdBQVU7OENBQXFCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBSTNELFFBQUNDO29CQUFJRCxXQUFVOztzQ0FFYixRQUFDQzs0QkFBSUQsV0FBVTtzQ0FDYixjQUFBLFFBQUNDO2dDQUNDRCxXQUFVO2dDQUNWSyxPQUFPO29DQUNMQyxXQUFXUixZQUFZLGNBQWM7b0NBQ3JDUyxpQkFBaUI7Z0NBQ25COzs7Ozs7Ozs7OztzQ0FJSixRQUFDTjs0QkFBSUQsV0FBVTtzQ0FDWlQsTUFBTWlCLEdBQUcsQ0FBQyxDQUFDZixNQUFNZ0Isa0JBQ2hCLFFBQUNSO29DQUVDRCxXQUFXLENBQUMsaURBQWlELEVBQUVGLFlBQVksOEJBQThCLDRCQUE0QjtvQ0FDcklPLE9BQU87d0NBQUVLLGlCQUFpQlosWUFBWSxHQUFHVyxJQUFJLElBQUksRUFBRSxDQUFDLEdBQUc7b0NBQU07O3NEQUc3RCxRQUFDUjs0Q0FBSUQsV0FBVTs7OERBQ2IsUUFBQ0M7b0RBQUlELFdBQVU7b0RBQThGSyxPQUFPO3dEQUFFTSxnQkFBZ0IsR0FBR0YsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO29EQUFDOzhEQUNqSixjQUFBLFFBQUNSO3dEQUFJRCxXQUFVOzs7Ozs7Ozs7Ozs4REFFakIsUUFBQ0M7b0RBQUlELFdBQVU7OERBQ2IsY0FBQSxRQUFDUCxLQUFLRCxJQUFJO3dEQUFDUSxXQUFVOzs7Ozs7Ozs7Ozs7Ozs7OztzREFJekIsUUFBQ0k7NENBQUtKLFdBQVU7O2dEQUE4RDtnREFDdEVQLEtBQUtBLElBQUk7Ozs7Ozs7c0RBRWpCLFFBQUNtQjs0Q0FBR1osV0FBVTtzREFDWFAsS0FBS0MsS0FBSzs7Ozs7O3NEQUViLFFBQUNROzRDQUFFRixXQUFVO3NEQUNWUCxLQUFLRSxXQUFXOzs7Ozs7O21DQXJCZEYsS0FBS0EsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBOEI5QjtHQTVEd0JHOztRQUNLTjs7O0tBRExNIn0=