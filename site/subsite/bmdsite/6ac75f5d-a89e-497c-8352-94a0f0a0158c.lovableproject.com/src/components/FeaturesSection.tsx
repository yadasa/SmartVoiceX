import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/FeaturesSection.tsx");import * as RefreshRuntime from "/@react-refresh";
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/dev-server/src/components/FeaturesSection.tsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}

import { jsxDEV as _jsxDEV } from "/@id/__x00__jsx-source/jsx-dev-runtime";
var _s = $RefreshSig$();
import { Award, DollarSign, Microscope, Clock, Heart, CalendarDays } from "/node_modules/.vite/deps/lucide-react.js?v=eb25920b";
import { useScrollReveal } from "/src/hooks/useScrollReveal.tsx";
const features = [
    {
        icon: Award,
        title: "Award-Winning Dentists",
        description: "Houston's top cosmetic and restorative dentist with a 4.8 star rating across 550+ Google reviews."
    },
    {
        icon: DollarSign,
        title: "Affordable Care",
        description: "Certified specialists at general dentistry prices. We accept most insurance and offer financing."
    },
    {
        icon: Microscope,
        title: "In-House Lab",
        description: "Our in-house dental lab ensures the highest quality, speed, and customization for your new smile."
    },
    {
        icon: Clock,
        title: "Short Notice Appointments",
        description: "We accept dental emergencies and offer short notice appointments when you need us most."
    },
    {
        icon: Heart,
        title: "Gentle Care",
        description: "Cutting edge technology ensures high quality and comfortable care for every patient."
    },
    {
        icon: CalendarDays,
        title: "Free Smile Consultations",
        description: "Complimentary consultations for many of our procedures. Start your journey today."
    }
];
export default function FeaturesSection() {
    _s();
    const { ref, isVisible } = useScrollReveal();
    return /*#__PURE__*/ _jsxDEV("section", {
        id: "about",
        className: "py-24 lg:py-32",
        children: /*#__PURE__*/ _jsxDEV("div", {
            className: "container mx-auto px-6",
            ref: ref,
            children: [
                /*#__PURE__*/ _jsxDEV("div", {
                    className: `text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`,
                    children: [
                        /*#__PURE__*/ _jsxDEV("p", {
                            className: "text-sm font-medium tracking-widest uppercase text-primary mb-4",
                            children: "Why Choose Us"
                        }, void 0, false, {
                            fileName: "/dev-server/src/components/FeaturesSection.tsx",
                            lineNumber: 44,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ _jsxDEV("h2", {
                            className: "text-3xl lg:text-5xl font-heading font-bold text-foreground mb-6",
                            children: [
                                "High quality dentistry accessible to ",
                                /*#__PURE__*/ _jsxDEV("span", {
                                    className: "text-gradient-gold",
                                    children: "all"
                                }, void 0, false, {
                                    fileName: "/dev-server/src/components/FeaturesSection.tsx",
                                    lineNumber: 48,
                                    columnNumber: 50
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "/dev-server/src/components/FeaturesSection.tsx",
                            lineNumber: 47,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ _jsxDEV("p", {
                            className: "text-muted-foreground text-lg",
                            children: "We've carefully crafted a patient experience focused on the highest quality care without breaking the bank."
                        }, void 0, false, {
                            fileName: "/dev-server/src/components/FeaturesSection.tsx",
                            lineNumber: 50,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/dev-server/src/components/FeaturesSection.tsx",
                    lineNumber: 43,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ _jsxDEV("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                    children: features.map((feature, i)=>/*#__PURE__*/ _jsxDEV("div", {
                            className: `group relative bg-card rounded-2xl p-8 border border-border hover:border-primary/30 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`,
                            style: {
                                transitionDelay: isVisible ? `${i * 100}ms` : "0ms"
                            },
                            children: [
                                /*#__PURE__*/ _jsxDEV("div", {
                                    className: "w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300",
                                    children: /*#__PURE__*/ _jsxDEV(feature.icon, {
                                        className: "h-6 w-6 text-primary"
                                    }, void 0, false, {
                                        fileName: "/dev-server/src/components/FeaturesSection.tsx",
                                        lineNumber: 63,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "/dev-server/src/components/FeaturesSection.tsx",
                                    lineNumber: 62,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ _jsxDEV("h3", {
                                    className: "text-lg font-heading font-semibold text-foreground mb-2",
                                    children: feature.title
                                }, void 0, false, {
                                    fileName: "/dev-server/src/components/FeaturesSection.tsx",
                                    lineNumber: 65,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ _jsxDEV("p", {
                                    className: "text-muted-foreground text-sm leading-relaxed",
                                    children: feature.description
                                }, void 0, false, {
                                    fileName: "/dev-server/src/components/FeaturesSection.tsx",
                                    lineNumber: 68,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, feature.title, true, {
                            fileName: "/dev-server/src/components/FeaturesSection.tsx",
                            lineNumber: 57,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "/dev-server/src/components/FeaturesSection.tsx",
                    lineNumber: 55,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "/dev-server/src/components/FeaturesSection.tsx",
            lineNumber: 42,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "/dev-server/src/components/FeaturesSection.tsx",
        lineNumber: 41,
        columnNumber: 5
    }, this);
}
_s(FeaturesSection, "aCOyLg7yh4JHGJYS1/e1njthfZ4=", false, function() {
    return [
        useScrollReveal
    ];
});
_c = FeaturesSection;
var _c;
$RefreshReg$(_c, "FeaturesSection");


if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}


if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/dev-server/src/components/FeaturesSection.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/dev-server/src/components/FeaturesSection.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkZlYXR1cmVzU2VjdGlvbi50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXdhcmQsIERvbGxhclNpZ24sIE1pY3Jvc2NvcGUsIENsb2NrLCBIZWFydCwgQ2FsZW5kYXJEYXlzIH0gZnJvbSBcImx1Y2lkZS1yZWFjdFwiO1xuaW1wb3J0IHsgdXNlU2Nyb2xsUmV2ZWFsIH0gZnJvbSBcIkAvaG9va3MvdXNlU2Nyb2xsUmV2ZWFsXCI7XG5cbmNvbnN0IGZlYXR1cmVzID0gW1xuICB7XG4gICAgaWNvbjogQXdhcmQsXG4gICAgdGl0bGU6IFwiQXdhcmQtV2lubmluZyBEZW50aXN0c1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkhvdXN0b24ncyB0b3AgY29zbWV0aWMgYW5kIHJlc3RvcmF0aXZlIGRlbnRpc3Qgd2l0aCBhIDQuOCBzdGFyIHJhdGluZyBhY3Jvc3MgNTUwKyBHb29nbGUgcmV2aWV3cy5cIixcbiAgfSxcbiAge1xuICAgIGljb246IERvbGxhclNpZ24sXG4gICAgdGl0bGU6IFwiQWZmb3JkYWJsZSBDYXJlXCIsXG4gICAgZGVzY3JpcHRpb246IFwiQ2VydGlmaWVkIHNwZWNpYWxpc3RzIGF0IGdlbmVyYWwgZGVudGlzdHJ5IHByaWNlcy4gV2UgYWNjZXB0IG1vc3QgaW5zdXJhbmNlIGFuZCBvZmZlciBmaW5hbmNpbmcuXCIsXG4gIH0sXG4gIHtcbiAgICBpY29uOiBNaWNyb3Njb3BlLFxuICAgIHRpdGxlOiBcIkluLUhvdXNlIExhYlwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIk91ciBpbi1ob3VzZSBkZW50YWwgbGFiIGVuc3VyZXMgdGhlIGhpZ2hlc3QgcXVhbGl0eSwgc3BlZWQsIGFuZCBjdXN0b21pemF0aW9uIGZvciB5b3VyIG5ldyBzbWlsZS5cIixcbiAgfSxcbiAge1xuICAgIGljb246IENsb2NrLFxuICAgIHRpdGxlOiBcIlNob3J0IE5vdGljZSBBcHBvaW50bWVudHNcIixcbiAgICBkZXNjcmlwdGlvbjogXCJXZSBhY2NlcHQgZGVudGFsIGVtZXJnZW5jaWVzIGFuZCBvZmZlciBzaG9ydCBub3RpY2UgYXBwb2ludG1lbnRzIHdoZW4geW91IG5lZWQgdXMgbW9zdC5cIixcbiAgfSxcbiAge1xuICAgIGljb246IEhlYXJ0LFxuICAgIHRpdGxlOiBcIkdlbnRsZSBDYXJlXCIsXG4gICAgZGVzY3JpcHRpb246IFwiQ3V0dGluZyBlZGdlIHRlY2hub2xvZ3kgZW5zdXJlcyBoaWdoIHF1YWxpdHkgYW5kIGNvbWZvcnRhYmxlIGNhcmUgZm9yIGV2ZXJ5IHBhdGllbnQuXCIsXG4gIH0sXG4gIHtcbiAgICBpY29uOiBDYWxlbmRhckRheXMsXG4gICAgdGl0bGU6IFwiRnJlZSBTbWlsZSBDb25zdWx0YXRpb25zXCIsXG4gICAgZGVzY3JpcHRpb246IFwiQ29tcGxpbWVudGFyeSBjb25zdWx0YXRpb25zIGZvciBtYW55IG9mIG91ciBwcm9jZWR1cmVzLiBTdGFydCB5b3VyIGpvdXJuZXkgdG9kYXkuXCIsXG4gIH0sXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGZWF0dXJlc1NlY3Rpb24oKSB7XG4gIGNvbnN0IHsgcmVmLCBpc1Zpc2libGUgfSA9IHVzZVNjcm9sbFJldmVhbCgpO1xuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gaWQ9XCJhYm91dFwiIGNsYXNzTmFtZT1cInB5LTI0IGxnOnB5LTMyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHB4LTZcIiByZWY9e3JlZn0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgdGV4dC1jZW50ZXIgbWF4LXctMnhsIG14LWF1dG8gbWItMTYgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tNzAwICR7aXNWaXNpYmxlID8gXCJvcGFjaXR5LTEwMCB0cmFuc2xhdGUteS0wXCIgOiBcIm9wYWNpdHktMCB0cmFuc2xhdGUteS04XCJ9YH0+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LW1lZGl1bSB0cmFja2luZy13aWRlc3QgdXBwZXJjYXNlIHRleHQtcHJpbWFyeSBtYi00XCI+XG4gICAgICAgICAgICBXaHkgQ2hvb3NlIFVzXG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBsZzp0ZXh0LTV4bCBmb250LWhlYWRpbmcgZm9udC1ib2xkIHRleHQtZm9yZWdyb3VuZCBtYi02XCI+XG4gICAgICAgICAgICBIaWdoIHF1YWxpdHkgZGVudGlzdHJ5IGFjY2Vzc2libGUgdG8gPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ncmFkaWVudC1nb2xkXCI+YWxsPC9zcGFuPlxuICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1tdXRlZC1mb3JlZ3JvdW5kIHRleHQtbGdcIj5cbiAgICAgICAgICAgIFdlJ3ZlIGNhcmVmdWxseSBjcmFmdGVkIGEgcGF0aWVudCBleHBlcmllbmNlIGZvY3VzZWQgb24gdGhlIGhpZ2hlc3QgcXVhbGl0eSBjYXJlIHdpdGhvdXQgYnJlYWtpbmcgdGhlIGJhbmsuXG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgbWQ6Z3JpZC1jb2xzLTIgbGc6Z3JpZC1jb2xzLTMgZ2FwLTZcIj5cbiAgICAgICAgICB7ZmVhdHVyZXMubWFwKChmZWF0dXJlLCBpKSA9PiAoXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGtleT17ZmVhdHVyZS50aXRsZX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZ3JvdXAgcmVsYXRpdmUgYmctY2FyZCByb3VuZGVkLTJ4bCBwLTggYm9yZGVyIGJvcmRlci1ib3JkZXIgaG92ZXI6Ym9yZGVyLXByaW1hcnkvMzAgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tNTAwIGhvdmVyOnNoYWRvdy14bCBob3ZlcjpzaGFkb3ctcHJpbWFyeS81IGhvdmVyOi10cmFuc2xhdGUteS0xICR7aXNWaXNpYmxlID8gXCJvcGFjaXR5LTEwMCB0cmFuc2xhdGUteS0wXCIgOiBcIm9wYWNpdHktMCB0cmFuc2xhdGUteS04XCJ9YH1cbiAgICAgICAgICAgICAgc3R5bGU9e3sgdHJhbnNpdGlvbkRlbGF5OiBpc1Zpc2libGUgPyBgJHtpICogMTAwfW1zYCA6IFwiMG1zXCIgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEyIGgtMTIgcm91bmRlZC14bCBiZy1wcmltYXJ5LzEwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG1iLTUgZ3JvdXAtaG92ZXI6YmctcHJpbWFyeS8yMCBncm91cC1ob3ZlcjpzY2FsZS0xMTAgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwXCI+XG4gICAgICAgICAgICAgICAgPGZlYXR1cmUuaWNvbiBjbGFzc05hbWU9XCJoLTYgdy02IHRleHQtcHJpbWFyeVwiIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LWhlYWRpbmcgZm9udC1zZW1pYm9sZCB0ZXh0LWZvcmVncm91bmQgbWItMlwiPlxuICAgICAgICAgICAgICAgIHtmZWF0dXJlLnRpdGxlfVxuICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkLWZvcmVncm91bmQgdGV4dC1zbSBsZWFkaW5nLXJlbGF4ZWRcIj5cbiAgICAgICAgICAgICAgICB7ZmVhdHVyZS5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkF3YXJkIiwiRG9sbGFyU2lnbiIsIk1pY3Jvc2NvcGUiLCJDbG9jayIsIkhlYXJ0IiwiQ2FsZW5kYXJEYXlzIiwidXNlU2Nyb2xsUmV2ZWFsIiwiZmVhdHVyZXMiLCJpY29uIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsIkZlYXR1cmVzU2VjdGlvbiIsInJlZiIsImlzVmlzaWJsZSIsInNlY3Rpb24iLCJpZCIsImNsYXNzTmFtZSIsImRpdiIsInAiLCJoMiIsInNwYW4iLCJtYXAiLCJmZWF0dXJlIiwiaSIsInN0eWxlIiwidHJhbnNpdGlvbkRlbGF5IiwiaDMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLFNBQVNBLEtBQUssRUFBRUMsVUFBVSxFQUFFQyxVQUFVLEVBQUVDLEtBQUssRUFBRUMsS0FBSyxFQUFFQyxZQUFZLFFBQVEsZUFBZTtBQUN6RixTQUFTQyxlQUFlLFFBQVEsMEJBQTBCO0FBRTFELE1BQU1DLFdBQVc7SUFDZjtRQUNFQyxNQUFNUjtRQUNOUyxPQUFPO1FBQ1BDLGFBQWE7SUFDZjtJQUNBO1FBQ0VGLE1BQU1QO1FBQ05RLE9BQU87UUFDUEMsYUFBYTtJQUNmO0lBQ0E7UUFDRUYsTUFBTU47UUFDTk8sT0FBTztRQUNQQyxhQUFhO0lBQ2Y7SUFDQTtRQUNFRixNQUFNTDtRQUNOTSxPQUFPO1FBQ1BDLGFBQWE7SUFDZjtJQUNBO1FBQ0VGLE1BQU1KO1FBQ05LLE9BQU87UUFDUEMsYUFBYTtJQUNmO0lBQ0E7UUFDRUYsTUFBTUg7UUFDTkksT0FBTztRQUNQQyxhQUFhO0lBQ2Y7Q0FDRDtBQUVELGVBQWUsU0FBU0M7O0lBQ3RCLE1BQU0sRUFBRUMsR0FBRyxFQUFFQyxTQUFTLEVBQUUsR0FBR1A7SUFFM0IscUJBQ0UsUUFBQ1E7UUFBUUMsSUFBRztRQUFRQyxXQUFVO2tCQUM1QixjQUFBLFFBQUNDO1lBQUlELFdBQVU7WUFBeUJKLEtBQUtBOzs4QkFDM0MsUUFBQ0s7b0JBQUlELFdBQVcsQ0FBQyxnRUFBZ0UsRUFBRUgsWUFBWSw4QkFBOEIsMkJBQTJCOztzQ0FDdEosUUFBQ0s7NEJBQUVGLFdBQVU7c0NBQWtFOzs7Ozs7c0NBRy9FLFFBQUNHOzRCQUFHSCxXQUFVOztnQ0FBbUU7OENBQzFDLFFBQUNJO29DQUFLSixXQUFVOzhDQUFxQjs7Ozs7Ozs7Ozs7O3NDQUU1RSxRQUFDRTs0QkFBRUYsV0FBVTtzQ0FBZ0M7Ozs7Ozs7Ozs7Ozs4QkFLL0MsUUFBQ0M7b0JBQUlELFdBQVU7OEJBQ1pULFNBQVNjLEdBQUcsQ0FBQyxDQUFDQyxTQUFTQyxrQkFDdEIsUUFBQ047NEJBRUNELFdBQVcsQ0FBQyw0S0FBNEssRUFBRUgsWUFBWSw4QkFBOEIsMkJBQTJCOzRCQUMvUFcsT0FBTztnQ0FBRUMsaUJBQWlCWixZQUFZLEdBQUdVLElBQUksSUFBSSxFQUFFLENBQUMsR0FBRzs0QkFBTTs7OENBRTdELFFBQUNOO29DQUFJRCxXQUFVOzhDQUNiLGNBQUEsUUFBQ00sUUFBUWQsSUFBSTt3Q0FBQ1EsV0FBVTs7Ozs7Ozs7Ozs7OENBRTFCLFFBQUNVO29DQUFHVixXQUFVOzhDQUNYTSxRQUFRYixLQUFLOzs7Ozs7OENBRWhCLFFBQUNTO29DQUFFRixXQUFVOzhDQUNWTSxRQUFRWixXQUFXOzs7Ozs7OzJCQVhqQlksUUFBUWIsS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbUJoQztHQXhDd0JFOztRQUNLTDs7O0tBRExLIn0=