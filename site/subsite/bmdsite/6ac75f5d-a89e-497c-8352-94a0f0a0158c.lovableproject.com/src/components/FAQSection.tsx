import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/FAQSection.tsx");import * as RefreshRuntime from "/@react-refresh";
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/dev-server/src/components/FAQSection.tsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}

import { jsxDEV as _jsxDEV } from "/@id/__x00__jsx-source/jsx-dev-runtime";
var _s = $RefreshSig$();
import { useScrollReveal } from "/src/hooks/useScrollReveal.tsx";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "/src/components/ui/accordion.tsx";
const faqs = [
    {
        q: "Do you accept dental insurance?",
        a: "Yes! We accept most major dental insurance plans including Delta Dental, Cigna, Aetna, MetLife, and more. Our team will work with you to maximize your benefits."
    },
    {
        q: "What financing options are available?",
        a: "We offer flexible financing through CareCredit and in-house payment plans. We believe everyone deserves a beautiful smile regardless of budget."
    },
    {
        q: "How long does a smile makeover take?",
        a: "Depending on the treatment plan, a complete smile makeover can take anywhere from one visit for teeth whitening to several months for implants or orthodontics. We'll give you a clear timeline during your consultation."
    },
    {
        q: "Are dental implants painful?",
        a: "Modern dental implant procedures are performed under local anesthesia and sedation options, making the experience virtually painless. Most patients report less discomfort than a tooth extraction."
    },
    {
        q: "Do you offer emergency dental services?",
        a: "Yes, we accept dental emergencies and offer short-notice appointments. Call us at (281) 879-1786 and we'll do our best to see you the same day."
    },
    {
        q: "What makes Bellaire Modern Dental different?",
        a: "We combine certified specialists at general dentistry prices, an in-house dental lab for speed and quality, and cutting-edge technology — all in one convenient location. Plus, we've been voted Houston's #1 cosmetic and restorative dentist."
    }
];
export default function FAQSection() {
    _s();
    const { ref, isVisible } = useScrollReveal();
    return /*#__PURE__*/ _jsxDEV("section", {
        className: "py-24 lg:py-32 bg-muted/30",
        children: /*#__PURE__*/ _jsxDEV("div", {
            className: "container mx-auto px-6",
            ref: ref,
            children: /*#__PURE__*/ _jsxDEV("div", {
                className: "max-w-3xl mx-auto",
                children: [
                    /*#__PURE__*/ _jsxDEV("div", {
                        className: `text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`,
                        children: [
                            /*#__PURE__*/ _jsxDEV("p", {
                                className: "text-sm font-medium tracking-widest uppercase text-primary mb-4",
                                children: "Common Questions"
                            }, void 0, false, {
                                fileName: "/dev-server/src/components/FAQSection.tsx",
                                lineNumber: 44,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ _jsxDEV("h2", {
                                className: "text-3xl lg:text-5xl font-heading font-bold text-foreground",
                                children: [
                                    "Frequently Asked ",
                                    /*#__PURE__*/ _jsxDEV("span", {
                                        className: "text-gradient-gold",
                                        children: "Questions"
                                    }, void 0, false, {
                                        fileName: "/dev-server/src/components/FAQSection.tsx",
                                        lineNumber: 48,
                                        columnNumber: 32
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "/dev-server/src/components/FAQSection.tsx",
                                lineNumber: 47,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "/dev-server/src/components/FAQSection.tsx",
                        lineNumber: 43,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ _jsxDEV("div", {
                        className: `transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`,
                        children: /*#__PURE__*/ _jsxDEV(Accordion, {
                            type: "single",
                            collapsible: true,
                            className: "space-y-3",
                            children: faqs.map((faq, i)=>/*#__PURE__*/ _jsxDEV(AccordionItem, {
                                    value: `faq-${i}`,
                                    className: "bg-card border border-border rounded-xl px-6 data-[state=open]:border-primary/30 data-[state=open]:shadow-lg data-[state=open]:shadow-primary/5 transition-all duration-300",
                                    children: [
                                        /*#__PURE__*/ _jsxDEV(AccordionTrigger, {
                                            className: "text-left font-heading font-semibold text-foreground hover:text-primary transition-colors py-5 text-base",
                                            children: faq.q
                                        }, void 0, false, {
                                            fileName: "/dev-server/src/components/FAQSection.tsx",
                                            lineNumber: 60,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ _jsxDEV(AccordionContent, {
                                            className: "text-muted-foreground leading-relaxed pb-5",
                                            children: faq.a
                                        }, void 0, false, {
                                            fileName: "/dev-server/src/components/FAQSection.tsx",
                                            lineNumber: 63,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, i, true, {
                                    fileName: "/dev-server/src/components/FAQSection.tsx",
                                    lineNumber: 55,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "/dev-server/src/components/FAQSection.tsx",
                            lineNumber: 53,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "/dev-server/src/components/FAQSection.tsx",
                        lineNumber: 52,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/dev-server/src/components/FAQSection.tsx",
                lineNumber: 42,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "/dev-server/src/components/FAQSection.tsx",
            lineNumber: 41,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "/dev-server/src/components/FAQSection.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
_s(FAQSection, "aCOyLg7yh4JHGJYS1/e1njthfZ4=", false, function() {
    return [
        useScrollReveal
    ];
});
_c = FAQSection;
var _c;
$RefreshReg$(_c, "FAQSection");


if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}


if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/dev-server/src/components/FAQSection.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/dev-server/src/components/FAQSection.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkZBUVNlY3Rpb24udHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVNjcm9sbFJldmVhbCB9IGZyb20gXCJAL2hvb2tzL3VzZVNjcm9sbFJldmVhbFwiO1xuaW1wb3J0IHtcbiAgQWNjb3JkaW9uLFxuICBBY2NvcmRpb25Db250ZW50LFxuICBBY2NvcmRpb25JdGVtLFxuICBBY2NvcmRpb25UcmlnZ2VyLFxufSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2FjY29yZGlvblwiO1xuXG5jb25zdCBmYXFzID0gW1xuICB7XG4gICAgcTogXCJEbyB5b3UgYWNjZXB0IGRlbnRhbCBpbnN1cmFuY2U/XCIsXG4gICAgYTogXCJZZXMhIFdlIGFjY2VwdCBtb3N0IG1ham9yIGRlbnRhbCBpbnN1cmFuY2UgcGxhbnMgaW5jbHVkaW5nIERlbHRhIERlbnRhbCwgQ2lnbmEsIEFldG5hLCBNZXRMaWZlLCBhbmQgbW9yZS4gT3VyIHRlYW0gd2lsbCB3b3JrIHdpdGggeW91IHRvIG1heGltaXplIHlvdXIgYmVuZWZpdHMuXCIsXG4gIH0sXG4gIHtcbiAgICBxOiBcIldoYXQgZmluYW5jaW5nIG9wdGlvbnMgYXJlIGF2YWlsYWJsZT9cIixcbiAgICBhOiBcIldlIG9mZmVyIGZsZXhpYmxlIGZpbmFuY2luZyB0aHJvdWdoIENhcmVDcmVkaXQgYW5kIGluLWhvdXNlIHBheW1lbnQgcGxhbnMuIFdlIGJlbGlldmUgZXZlcnlvbmUgZGVzZXJ2ZXMgYSBiZWF1dGlmdWwgc21pbGUgcmVnYXJkbGVzcyBvZiBidWRnZXQuXCIsXG4gIH0sXG4gIHtcbiAgICBxOiBcIkhvdyBsb25nIGRvZXMgYSBzbWlsZSBtYWtlb3ZlciB0YWtlP1wiLFxuICAgIGE6IFwiRGVwZW5kaW5nIG9uIHRoZSB0cmVhdG1lbnQgcGxhbiwgYSBjb21wbGV0ZSBzbWlsZSBtYWtlb3ZlciBjYW4gdGFrZSBhbnl3aGVyZSBmcm9tIG9uZSB2aXNpdCBmb3IgdGVldGggd2hpdGVuaW5nIHRvIHNldmVyYWwgbW9udGhzIGZvciBpbXBsYW50cyBvciBvcnRob2RvbnRpY3MuIFdlJ2xsIGdpdmUgeW91IGEgY2xlYXIgdGltZWxpbmUgZHVyaW5nIHlvdXIgY29uc3VsdGF0aW9uLlwiLFxuICB9LFxuICB7XG4gICAgcTogXCJBcmUgZGVudGFsIGltcGxhbnRzIHBhaW5mdWw/XCIsXG4gICAgYTogXCJNb2Rlcm4gZGVudGFsIGltcGxhbnQgcHJvY2VkdXJlcyBhcmUgcGVyZm9ybWVkIHVuZGVyIGxvY2FsIGFuZXN0aGVzaWEgYW5kIHNlZGF0aW9uIG9wdGlvbnMsIG1ha2luZyB0aGUgZXhwZXJpZW5jZSB2aXJ0dWFsbHkgcGFpbmxlc3MuIE1vc3QgcGF0aWVudHMgcmVwb3J0IGxlc3MgZGlzY29tZm9ydCB0aGFuIGEgdG9vdGggZXh0cmFjdGlvbi5cIixcbiAgfSxcbiAge1xuICAgIHE6IFwiRG8geW91IG9mZmVyIGVtZXJnZW5jeSBkZW50YWwgc2VydmljZXM/XCIsXG4gICAgYTogXCJZZXMsIHdlIGFjY2VwdCBkZW50YWwgZW1lcmdlbmNpZXMgYW5kIG9mZmVyIHNob3J0LW5vdGljZSBhcHBvaW50bWVudHMuIENhbGwgdXMgYXQgKDI4MSkgODc5LTE3ODYgYW5kIHdlJ2xsIGRvIG91ciBiZXN0IHRvIHNlZSB5b3UgdGhlIHNhbWUgZGF5LlwiLFxuICB9LFxuICB7XG4gICAgcTogXCJXaGF0IG1ha2VzIEJlbGxhaXJlIE1vZGVybiBEZW50YWwgZGlmZmVyZW50P1wiLFxuICAgIGE6IFwiV2UgY29tYmluZSBjZXJ0aWZpZWQgc3BlY2lhbGlzdHMgYXQgZ2VuZXJhbCBkZW50aXN0cnkgcHJpY2VzLCBhbiBpbi1ob3VzZSBkZW50YWwgbGFiIGZvciBzcGVlZCBhbmQgcXVhbGl0eSwgYW5kIGN1dHRpbmctZWRnZSB0ZWNobm9sb2d5IOKAlCBhbGwgaW4gb25lIGNvbnZlbmllbnQgbG9jYXRpb24uIFBsdXMsIHdlJ3ZlIGJlZW4gdm90ZWQgSG91c3RvbidzICMxIGNvc21ldGljIGFuZCByZXN0b3JhdGl2ZSBkZW50aXN0LlwiLFxuICB9LFxuXTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRkFRU2VjdGlvbigpIHtcbiAgY29uc3QgeyByZWYsIGlzVmlzaWJsZSB9ID0gdXNlU2Nyb2xsUmV2ZWFsKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJweS0yNCBsZzpweS0zMiBiZy1tdXRlZC8zMFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBweC02XCIgcmVmPXtyZWZ9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTN4bCBteC1hdXRvXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2B0ZXh0LWNlbnRlciBtYi0xNiB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi03MDAgJHtpc1Zpc2libGUgPyBcIm9wYWNpdHktMTAwIHRyYW5zbGF0ZS15LTBcIiA6IFwib3BhY2l0eS0wIHRyYW5zbGF0ZS15LThcIn1gfT5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1tZWRpdW0gdHJhY2tpbmctd2lkZXN0IHVwcGVyY2FzZSB0ZXh0LXByaW1hcnkgbWItNFwiPlxuICAgICAgICAgICAgICBDb21tb24gUXVlc3Rpb25zXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0zeGwgbGc6dGV4dC01eGwgZm9udC1oZWFkaW5nIGZvbnQtYm9sZCB0ZXh0LWZvcmVncm91bmRcIj5cbiAgICAgICAgICAgICAgRnJlcXVlbnRseSBBc2tlZCA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWdyYWRpZW50LWdvbGRcIj5RdWVzdGlvbnM8L3NwYW4+XG4gICAgICAgICAgICA8L2gyPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2B0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi03MDAgZGVsYXktMjAwICR7aXNWaXNpYmxlID8gXCJvcGFjaXR5LTEwMCB0cmFuc2xhdGUteS0wXCIgOiBcIm9wYWNpdHktMCB0cmFuc2xhdGUteS04XCJ9YH0+XG4gICAgICAgICAgICA8QWNjb3JkaW9uIHR5cGU9XCJzaW5nbGVcIiBjb2xsYXBzaWJsZSBjbGFzc05hbWU9XCJzcGFjZS15LTNcIj5cbiAgICAgICAgICAgICAge2ZhcXMubWFwKChmYXEsIGkpID0+IChcbiAgICAgICAgICAgICAgICA8QWNjb3JkaW9uSXRlbVxuICAgICAgICAgICAgICAgICAga2V5PXtpfVxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2BmYXEtJHtpfWB9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1jYXJkIGJvcmRlciBib3JkZXItYm9yZGVyIHJvdW5kZWQteGwgcHgtNiBkYXRhLVtzdGF0ZT1vcGVuXTpib3JkZXItcHJpbWFyeS8zMCBkYXRhLVtzdGF0ZT1vcGVuXTpzaGFkb3ctbGcgZGF0YS1bc3RhdGU9b3Blbl06c2hhZG93LXByaW1hcnkvNSB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDBcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxBY2NvcmRpb25UcmlnZ2VyIGNsYXNzTmFtZT1cInRleHQtbGVmdCBmb250LWhlYWRpbmcgZm9udC1zZW1pYm9sZCB0ZXh0LWZvcmVncm91bmQgaG92ZXI6dGV4dC1wcmltYXJ5IHRyYW5zaXRpb24tY29sb3JzIHB5LTUgdGV4dC1iYXNlXCI+XG4gICAgICAgICAgICAgICAgICAgIHtmYXEucX1cbiAgICAgICAgICAgICAgICAgIDwvQWNjb3JkaW9uVHJpZ2dlcj5cbiAgICAgICAgICAgICAgICAgIDxBY2NvcmRpb25Db250ZW50IGNsYXNzTmFtZT1cInRleHQtbXV0ZWQtZm9yZWdyb3VuZCBsZWFkaW5nLXJlbGF4ZWQgcGItNVwiPlxuICAgICAgICAgICAgICAgICAgICB7ZmFxLmF9XG4gICAgICAgICAgICAgICAgICA8L0FjY29yZGlvbkNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgPC9BY2NvcmRpb25JdGVtPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvQWNjb3JkaW9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTY3JvbGxSZXZlYWwiLCJBY2NvcmRpb24iLCJBY2NvcmRpb25Db250ZW50IiwiQWNjb3JkaW9uSXRlbSIsIkFjY29yZGlvblRyaWdnZXIiLCJmYXFzIiwicSIsImEiLCJGQVFTZWN0aW9uIiwicmVmIiwiaXNWaXNpYmxlIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImRpdiIsInAiLCJoMiIsInNwYW4iLCJ0eXBlIiwiY29sbGFwc2libGUiLCJtYXAiLCJmYXEiLCJpIiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLFNBQVNBLGVBQWUsUUFBUSwwQkFBMEI7QUFDMUQsU0FDRUMsU0FBUyxFQUNUQyxnQkFBZ0IsRUFDaEJDLGFBQWEsRUFDYkMsZ0JBQWdCLFFBQ1gsNEJBQTRCO0FBRW5DLE1BQU1DLE9BQU87SUFDWDtRQUNFQyxHQUFHO1FBQ0hDLEdBQUc7SUFDTDtJQUNBO1FBQ0VELEdBQUc7UUFDSEMsR0FBRztJQUNMO0lBQ0E7UUFDRUQsR0FBRztRQUNIQyxHQUFHO0lBQ0w7SUFDQTtRQUNFRCxHQUFHO1FBQ0hDLEdBQUc7SUFDTDtJQUNBO1FBQ0VELEdBQUc7UUFDSEMsR0FBRztJQUNMO0lBQ0E7UUFDRUQsR0FBRztRQUNIQyxHQUFHO0lBQ0w7Q0FDRDtBQUVELGVBQWUsU0FBU0M7O0lBQ3RCLE1BQU0sRUFBRUMsR0FBRyxFQUFFQyxTQUFTLEVBQUUsR0FBR1Y7SUFFM0IscUJBQ0UsUUFBQ1c7UUFBUUMsV0FBVTtrQkFDakIsY0FBQSxRQUFDQztZQUFJRCxXQUFVO1lBQXlCSCxLQUFLQTtzQkFDM0MsY0FBQSxRQUFDSTtnQkFBSUQsV0FBVTs7a0NBQ2IsUUFBQ0M7d0JBQUlELFdBQVcsQ0FBQyw4Q0FBOEMsRUFBRUYsWUFBWSw4QkFBOEIsMkJBQTJCOzswQ0FDcEksUUFBQ0k7Z0NBQUVGLFdBQVU7MENBQWtFOzs7Ozs7MENBRy9FLFFBQUNHO2dDQUFHSCxXQUFVOztvQ0FBOEQ7a0RBQ3pELFFBQUNJO3dDQUFLSixXQUFVO2tEQUFxQjs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUkxRCxRQUFDQzt3QkFBSUQsV0FBVyxDQUFDLHNDQUFzQyxFQUFFRixZQUFZLDhCQUE4QiwyQkFBMkI7a0NBQzVILGNBQUEsUUFBQ1Q7NEJBQVVnQixNQUFLOzRCQUFTQyxXQUFXOzRCQUFDTixXQUFVO3NDQUM1Q1AsS0FBS2MsR0FBRyxDQUFDLENBQUNDLEtBQUtDLGtCQUNkLFFBQUNsQjtvQ0FFQ21CLE9BQU8sQ0FBQyxJQUFJLEVBQUVELEdBQUc7b0NBQ2pCVCxXQUFVOztzREFFVixRQUFDUjs0Q0FBaUJRLFdBQVU7c0RBQ3pCUSxJQUFJZCxDQUFDOzs7Ozs7c0RBRVIsUUFBQ0o7NENBQWlCVSxXQUFVO3NEQUN6QlEsSUFBSWIsQ0FBQzs7Ozs7OzttQ0FSSGM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQnZCO0dBdEN3QmI7O1FBQ0tSOzs7S0FETFEifQ==