import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/ServicesSection.tsx");import * as RefreshRuntime from "/@react-refresh";
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/dev-server/src/components/ServicesSection.tsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}

import { jsxDEV as _jsxDEV } from "/@id/__x00__jsx-source/jsx-dev-runtime";
var _s = $RefreshSig$();
import { ArrowRight } from "/node_modules/.vite/deps/lucide-react.js?v=eb25920b";
import { Button } from "/src/components/ui/button.tsx";
import { useScrollReveal } from "/src/hooks/useScrollReveal.tsx";
const services = [
    {
        image: "https://images.squarespace-cdn.com/content/v1/67522ea9ea4b3147aabef81c/b0dda1c1-f45e-4cf9-ba22-1554f112bc4f/Implants-and-Dentures.jpg",
        title: "Dental Implants & Dentures",
        subtitle: "Replace Your Missing Teeth",
        description: "A full range of dental implant options using industry-leading equipment and techniques to restore your smile at affordable prices."
    },
    {
        image: "https://images.squarespace-cdn.com/content/v1/67522ea9ea4b3147aabef81c/da29314c-e56d-4281-80cf-4df74750ae79/Cosmetic-Dentistry.jpg",
        title: "Cosmetic Dentistry",
        subtitle: "Smile with Confidence",
        description: "Full range of aesthetic options to improve imperfections — from alignment and shape to brightening your smile."
    },
    {
        image: "https://images.squarespace-cdn.com/content/v1/67522ea9ea4b3147aabef81c/0213ce87-1817-4b17-bbf3-2b4f3539a253/Surgery.jpg",
        title: "Oral Surgery",
        subtitle: "Compassionate Care From Specialists",
        description: "Experienced specialists with decades of experience using state-of-the-art equipment and diagnostic tools."
    },
    {
        image: "https://images.squarespace-cdn.com/content/v1/67522ea9ea4b3147aabef81c/740d694d-a3c0-4097-abd5-d5e7dc7276d5/General-Dentistry.jpg",
        title: "General Dentistry",
        subtitle: "Care For the Whole Family",
        description: "From children to grandparents, we've got your whole family covered with convenient family visits."
    }
];
export default function ServicesSection() {
    _s();
    const { ref, isVisible } = useScrollReveal();
    return /*#__PURE__*/ _jsxDEV("section", {
        id: "services",
        className: "py-24 lg:py-32 bg-muted/50",
        children: /*#__PURE__*/ _jsxDEV("div", {
            className: "container mx-auto px-6",
            ref: ref,
            children: [
                /*#__PURE__*/ _jsxDEV("div", {
                    className: `text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`,
                    children: [
                        /*#__PURE__*/ _jsxDEV("p", {
                            className: "text-sm font-medium tracking-widest uppercase text-primary mb-4",
                            children: "What We Offer"
                        }, void 0, false, {
                            fileName: "/dev-server/src/components/ServicesSection.tsx",
                            lineNumber: 43,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ _jsxDEV("h2", {
                            className: "text-3xl lg:text-5xl font-heading font-bold text-foreground",
                            children: "Our Dental Services"
                        }, void 0, false, {
                            fileName: "/dev-server/src/components/ServicesSection.tsx",
                            lineNumber: 46,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/dev-server/src/components/ServicesSection.tsx",
                    lineNumber: 42,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ _jsxDEV("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 gap-8",
                    children: services.map((service, i)=>/*#__PURE__*/ _jsxDEV("div", {
                            className: `group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/30 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`,
                            style: {
                                transitionDelay: isVisible ? `${i * 150}ms` : "0ms"
                            },
                            children: [
                                /*#__PURE__*/ _jsxDEV("div", {
                                    className: "relative h-64 overflow-hidden",
                                    children: [
                                        /*#__PURE__*/ _jsxDEV("img", {
                                            src: service.image,
                                            alt: service.title,
                                            loading: "lazy",
                                            className: "w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                        }, void 0, false, {
                                            fileName: "/dev-server/src/components/ServicesSection.tsx",
                                            lineNumber: 59,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ _jsxDEV("div", {
                                            className: "absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent"
                                        }, void 0, false, {
                                            fileName: "/dev-server/src/components/ServicesSection.tsx",
                                            lineNumber: 65,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "/dev-server/src/components/ServicesSection.tsx",
                                    lineNumber: 58,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ _jsxDEV("div", {
                                    className: "p-8",
                                    children: [
                                        /*#__PURE__*/ _jsxDEV("p", {
                                            className: "text-sm font-medium text-primary italic mb-1",
                                            children: service.subtitle
                                        }, void 0, false, {
                                            fileName: "/dev-server/src/components/ServicesSection.tsx",
                                            lineNumber: 68,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ _jsxDEV("h3", {
                                            className: "text-xl font-heading font-bold text-foreground mb-3",
                                            children: service.title
                                        }, void 0, false, {
                                            fileName: "/dev-server/src/components/ServicesSection.tsx",
                                            lineNumber: 71,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ _jsxDEV("p", {
                                            className: "text-muted-foreground text-sm leading-relaxed mb-5",
                                            children: service.description
                                        }, void 0, false, {
                                            fileName: "/dev-server/src/components/ServicesSection.tsx",
                                            lineNumber: 74,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ _jsxDEV("button", {
                                            className: "inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all",
                                            children: [
                                                "Learn More ",
                                                /*#__PURE__*/ _jsxDEV(ArrowRight, {
                                                    className: "h-4 w-4"
                                                }, void 0, false, {
                                                    fileName: "/dev-server/src/components/ServicesSection.tsx",
                                                    lineNumber: 78,
                                                    columnNumber: 30
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "/dev-server/src/components/ServicesSection.tsx",
                                            lineNumber: 77,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "/dev-server/src/components/ServicesSection.tsx",
                                    lineNumber: 67,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, service.title, true, {
                            fileName: "/dev-server/src/components/ServicesSection.tsx",
                            lineNumber: 53,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "/dev-server/src/components/ServicesSection.tsx",
                    lineNumber: 51,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ _jsxDEV("div", {
                    className: "text-center mt-12",
                    children: /*#__PURE__*/ _jsxDEV(Button, {
                        variant: "outline",
                        className: "rounded-full px-8 py-6 text-base border-primary text-primary hover:bg-primary/10 hover:scale-105 transition-all",
                        children: "See All Services"
                    }, void 0, false, {
                        fileName: "/dev-server/src/components/ServicesSection.tsx",
                        lineNumber: 86,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "/dev-server/src/components/ServicesSection.tsx",
                    lineNumber: 85,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "/dev-server/src/components/ServicesSection.tsx",
            lineNumber: 41,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "/dev-server/src/components/ServicesSection.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
_s(ServicesSection, "aCOyLg7yh4JHGJYS1/e1njthfZ4=", false, function() {
    return [
        useScrollReveal
    ];
});
_c = ServicesSection;
var _c;
$RefreshReg$(_c, "ServicesSection");


if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}


if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/dev-server/src/components/ServicesSection.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/dev-server/src/components/ServicesSection.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNlcnZpY2VzU2VjdGlvbi50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXJyb3dSaWdodCB9IGZyb20gXCJsdWNpZGUtcmVhY3RcIjtcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvYnV0dG9uXCI7XG5pbXBvcnQgeyB1c2VTY3JvbGxSZXZlYWwgfSBmcm9tIFwiQC9ob29rcy91c2VTY3JvbGxSZXZlYWxcIjtcblxuY29uc3Qgc2VydmljZXMgPSBbXG4gIHtcbiAgICBpbWFnZTogXCJodHRwczovL2ltYWdlcy5zcXVhcmVzcGFjZS1jZG4uY29tL2NvbnRlbnQvdjEvNjc1MjJlYTllYTRiMzE0N2FhYmVmODFjL2IwZGRhMWMxLWY0NWUtNGNmOS1iYTIyLTE1NTRmMTEyYmM0Zi9JbXBsYW50cy1hbmQtRGVudHVyZXMuanBnXCIsXG4gICAgdGl0bGU6IFwiRGVudGFsIEltcGxhbnRzICYgRGVudHVyZXNcIixcbiAgICBzdWJ0aXRsZTogXCJSZXBsYWNlIFlvdXIgTWlzc2luZyBUZWV0aFwiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJBIGZ1bGwgcmFuZ2Ugb2YgZGVudGFsIGltcGxhbnQgb3B0aW9ucyB1c2luZyBpbmR1c3RyeS1sZWFkaW5nIGVxdWlwbWVudCBhbmQgdGVjaG5pcXVlcyB0byByZXN0b3JlIHlvdXIgc21pbGUgYXQgYWZmb3JkYWJsZSBwcmljZXMuXCIsXG4gIH0sXG4gIHtcbiAgICBpbWFnZTogXCJodHRwczovL2ltYWdlcy5zcXVhcmVzcGFjZS1jZG4uY29tL2NvbnRlbnQvdjEvNjc1MjJlYTllYTRiMzE0N2FhYmVmODFjL2RhMjkzMTRjLWU1NmQtNDI4MS04MGNmLTRkZjc0NzUwYWU3OS9Db3NtZXRpYy1EZW50aXN0cnkuanBnXCIsXG4gICAgdGl0bGU6IFwiQ29zbWV0aWMgRGVudGlzdHJ5XCIsXG4gICAgc3VidGl0bGU6IFwiU21pbGUgd2l0aCBDb25maWRlbmNlXCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIkZ1bGwgcmFuZ2Ugb2YgYWVzdGhldGljIG9wdGlvbnMgdG8gaW1wcm92ZSBpbXBlcmZlY3Rpb25zIOKAlCBmcm9tIGFsaWdubWVudCBhbmQgc2hhcGUgdG8gYnJpZ2h0ZW5pbmcgeW91ciBzbWlsZS5cIixcbiAgfSxcbiAge1xuICAgIGltYWdlOiBcImh0dHBzOi8vaW1hZ2VzLnNxdWFyZXNwYWNlLWNkbi5jb20vY29udGVudC92MS82NzUyMmVhOWVhNGIzMTQ3YWFiZWY4MWMvMDIxM2NlODctMTgxNy00YjE3LWJiZjMtMmI0ZjM1MzlhMjUzL1N1cmdlcnkuanBnXCIsXG4gICAgdGl0bGU6IFwiT3JhbCBTdXJnZXJ5XCIsXG4gICAgc3VidGl0bGU6IFwiQ29tcGFzc2lvbmF0ZSBDYXJlIEZyb20gU3BlY2lhbGlzdHNcIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiRXhwZXJpZW5jZWQgc3BlY2lhbGlzdHMgd2l0aCBkZWNhZGVzIG9mIGV4cGVyaWVuY2UgdXNpbmcgc3RhdGUtb2YtdGhlLWFydCBlcXVpcG1lbnQgYW5kIGRpYWdub3N0aWMgdG9vbHMuXCIsXG4gIH0sXG4gIHtcbiAgICBpbWFnZTogXCJodHRwczovL2ltYWdlcy5zcXVhcmVzcGFjZS1jZG4uY29tL2NvbnRlbnQvdjEvNjc1MjJlYTllYTRiMzE0N2FhYmVmODFjLzc0MGQ2OTRkLWEzYzAtNDA5Ny1hYmQ1LWQ1ZTdkYzcyNzZkNS9HZW5lcmFsLURlbnRpc3RyeS5qcGdcIixcbiAgICB0aXRsZTogXCJHZW5lcmFsIERlbnRpc3RyeVwiLFxuICAgIHN1YnRpdGxlOiBcIkNhcmUgRm9yIHRoZSBXaG9sZSBGYW1pbHlcIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiRnJvbSBjaGlsZHJlbiB0byBncmFuZHBhcmVudHMsIHdlJ3ZlIGdvdCB5b3VyIHdob2xlIGZhbWlseSBjb3ZlcmVkIHdpdGggY29udmVuaWVudCBmYW1pbHkgdmlzaXRzLlwiLFxuICB9LFxuXTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2VydmljZXNTZWN0aW9uKCkge1xuICBjb25zdCB7IHJlZiwgaXNWaXNpYmxlIH0gPSB1c2VTY3JvbGxSZXZlYWwoKTtcblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGlkPVwic2VydmljZXNcIiBjbGFzc05hbWU9XCJweS0yNCBsZzpweS0zMiBiZy1tdXRlZC81MFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBweC02XCIgcmVmPXtyZWZ9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHRleHQtY2VudGVyIG1heC13LTJ4bCBteC1hdXRvIG1iLTE2IHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTcwMCAke2lzVmlzaWJsZSA/IFwib3BhY2l0eS0xMDAgdHJhbnNsYXRlLXktMFwiIDogXCJvcGFjaXR5LTAgdHJhbnNsYXRlLXktOFwifWB9PlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1tZWRpdW0gdHJhY2tpbmctd2lkZXN0IHVwcGVyY2FzZSB0ZXh0LXByaW1hcnkgbWItNFwiPlxuICAgICAgICAgICAgV2hhdCBXZSBPZmZlclxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0zeGwgbGc6dGV4dC01eGwgZm9udC1oZWFkaW5nIGZvbnQtYm9sZCB0ZXh0LWZvcmVncm91bmRcIj5cbiAgICAgICAgICAgIE91ciBEZW50YWwgU2VydmljZXNcbiAgICAgICAgICA8L2gyPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgbWQ6Z3JpZC1jb2xzLTIgZ2FwLThcIj5cbiAgICAgICAgICB7c2VydmljZXMubWFwKChzZXJ2aWNlLCBpKSA9PiAoXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGtleT17c2VydmljZS50aXRsZX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZ3JvdXAgYmctY2FyZCByb3VuZGVkLTJ4bCBvdmVyZmxvdy1oaWRkZW4gYm9yZGVyIGJvcmRlci1ib3JkZXIgaG92ZXI6Ym9yZGVyLXByaW1hcnkvMzAgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tNTAwIGhvdmVyOnNoYWRvdy14bCBob3ZlcjpzaGFkb3ctcHJpbWFyeS81IGhvdmVyOi10cmFuc2xhdGUteS0xICR7aXNWaXNpYmxlID8gXCJvcGFjaXR5LTEwMCB0cmFuc2xhdGUteS0wXCIgOiBcIm9wYWNpdHktMCB0cmFuc2xhdGUteS04XCJ9YH1cbiAgICAgICAgICAgICAgc3R5bGU9e3sgdHJhbnNpdGlvbkRlbGF5OiBpc1Zpc2libGUgPyBgJHtpICogMTUwfW1zYCA6IFwiMG1zXCIgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBoLTY0IG92ZXJmbG93LWhpZGRlblwiPlxuICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgIHNyYz17c2VydmljZS5pbWFnZX1cbiAgICAgICAgICAgICAgICAgIGFsdD17c2VydmljZS50aXRsZX1cbiAgICAgICAgICAgICAgICAgIGxvYWRpbmc9XCJsYXp5XCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBoLWZ1bGwgb2JqZWN0LWNvdmVyIGdyb3VwLWhvdmVyOnNjYWxlLTExMCB0cmFuc2l0aW9uLXRyYW5zZm9ybSBkdXJhdGlvbi03MDBcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0wIGJnLWdyYWRpZW50LXRvLXQgZnJvbS1jaGFyY29hbC82MCB0by10cmFuc3BhcmVudFwiIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtOFwiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1wcmltYXJ5IGl0YWxpYyBtYi0xXCI+XG4gICAgICAgICAgICAgICAgICB7c2VydmljZS5zdWJ0aXRsZX1cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1oZWFkaW5nIGZvbnQtYm9sZCB0ZXh0LWZvcmVncm91bmQgbWItM1wiPlxuICAgICAgICAgICAgICAgICAge3NlcnZpY2UudGl0bGV9XG4gICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkLWZvcmVncm91bmQgdGV4dC1zbSBsZWFkaW5nLXJlbGF4ZWQgbWItNVwiPlxuICAgICAgICAgICAgICAgICAge3NlcnZpY2UuZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIGdhcC0yIHRleHQtc20gZm9udC1zZW1pYm9sZCB0ZXh0LXByaW1hcnkgaG92ZXI6Z2FwLTMgdHJhbnNpdGlvbi1hbGxcIj5cbiAgICAgICAgICAgICAgICAgIExlYXJuIE1vcmUgPEFycm93UmlnaHQgY2xhc3NOYW1lPVwiaC00IHctNFwiIC8+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbXQtMTJcIj5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZVwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLWZ1bGwgcHgtOCBweS02IHRleHQtYmFzZSBib3JkZXItcHJpbWFyeSB0ZXh0LXByaW1hcnkgaG92ZXI6YmctcHJpbWFyeS8xMCBob3ZlcjpzY2FsZS0xMDUgdHJhbnNpdGlvbi1hbGxcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIFNlZSBBbGwgU2VydmljZXNcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiQXJyb3dSaWdodCIsIkJ1dHRvbiIsInVzZVNjcm9sbFJldmVhbCIsInNlcnZpY2VzIiwiaW1hZ2UiLCJ0aXRsZSIsInN1YnRpdGxlIiwiZGVzY3JpcHRpb24iLCJTZXJ2aWNlc1NlY3Rpb24iLCJyZWYiLCJpc1Zpc2libGUiLCJzZWN0aW9uIiwiaWQiLCJjbGFzc05hbWUiLCJkaXYiLCJwIiwiaDIiLCJtYXAiLCJzZXJ2aWNlIiwiaSIsInN0eWxlIiwidHJhbnNpdGlvbkRlbGF5IiwiaW1nIiwic3JjIiwiYWx0IiwibG9hZGluZyIsImgzIiwiYnV0dG9uIiwidmFyaWFudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsU0FBU0EsVUFBVSxRQUFRLGVBQWU7QUFDMUMsU0FBU0MsTUFBTSxRQUFRLHlCQUF5QjtBQUNoRCxTQUFTQyxlQUFlLFFBQVEsMEJBQTBCO0FBRTFELE1BQU1DLFdBQVc7SUFDZjtRQUNFQyxPQUFPO1FBQ1BDLE9BQU87UUFDUEMsVUFBVTtRQUNWQyxhQUNFO0lBQ0o7SUFDQTtRQUNFSCxPQUFPO1FBQ1BDLE9BQU87UUFDUEMsVUFBVTtRQUNWQyxhQUNFO0lBQ0o7SUFDQTtRQUNFSCxPQUFPO1FBQ1BDLE9BQU87UUFDUEMsVUFBVTtRQUNWQyxhQUNFO0lBQ0o7SUFDQTtRQUNFSCxPQUFPO1FBQ1BDLE9BQU87UUFDUEMsVUFBVTtRQUNWQyxhQUNFO0lBQ0o7Q0FDRDtBQUVELGVBQWUsU0FBU0M7O0lBQ3RCLE1BQU0sRUFBRUMsR0FBRyxFQUFFQyxTQUFTLEVBQUUsR0FBR1I7SUFFM0IscUJBQ0UsUUFBQ1M7UUFBUUMsSUFBRztRQUFXQyxXQUFVO2tCQUMvQixjQUFBLFFBQUNDO1lBQUlELFdBQVU7WUFBeUJKLEtBQUtBOzs4QkFDM0MsUUFBQ0s7b0JBQUlELFdBQVcsQ0FBQyxnRUFBZ0UsRUFBRUgsWUFBWSw4QkFBOEIsMkJBQTJCOztzQ0FDdEosUUFBQ0s7NEJBQUVGLFdBQVU7c0NBQWtFOzs7Ozs7c0NBRy9FLFFBQUNHOzRCQUFHSCxXQUFVO3NDQUE4RDs7Ozs7Ozs7Ozs7OzhCQUs5RSxRQUFDQztvQkFBSUQsV0FBVTs4QkFDWlYsU0FBU2MsR0FBRyxDQUFDLENBQUNDLFNBQVNDLGtCQUN0QixRQUFDTDs0QkFFQ0QsV0FBVyxDQUFDLCtLQUErSyxFQUFFSCxZQUFZLDhCQUE4QiwyQkFBMkI7NEJBQ2xRVSxPQUFPO2dDQUFFQyxpQkFBaUJYLFlBQVksR0FBR1MsSUFBSSxJQUFJLEVBQUUsQ0FBQyxHQUFHOzRCQUFNOzs4Q0FFN0QsUUFBQ0w7b0NBQUlELFdBQVU7O3NEQUNiLFFBQUNTOzRDQUNDQyxLQUFLTCxRQUFRZCxLQUFLOzRDQUNsQm9CLEtBQUtOLFFBQVFiLEtBQUs7NENBQ2xCb0IsU0FBUTs0Q0FDUlosV0FBVTs7Ozs7O3NEQUVaLFFBQUNDOzRDQUFJRCxXQUFVOzs7Ozs7Ozs7Ozs7OENBRWpCLFFBQUNDO29DQUFJRCxXQUFVOztzREFDYixRQUFDRTs0Q0FBRUYsV0FBVTtzREFDVkssUUFBUVosUUFBUTs7Ozs7O3NEQUVuQixRQUFDb0I7NENBQUdiLFdBQVU7c0RBQ1hLLFFBQVFiLEtBQUs7Ozs7OztzREFFaEIsUUFBQ1U7NENBQUVGLFdBQVU7c0RBQ1ZLLFFBQVFYLFdBQVc7Ozs7OztzREFFdEIsUUFBQ29COzRDQUFPZCxXQUFVOztnREFBK0Y7OERBQ3BHLFFBQUNiO29EQUFXYSxXQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzJCQXhCaENLLFFBQVFiLEtBQUs7Ozs7Ozs7Ozs7OEJBK0J4QixRQUFDUztvQkFBSUQsV0FBVTs4QkFDYixjQUFBLFFBQUNaO3dCQUNDMkIsU0FBUTt3QkFDUmYsV0FBVTtrQ0FDWDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9YO0dBNUR3Qkw7O1FBQ0tOOzs7S0FETE0ifQ==