import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/TestimonialsSection.tsx");import * as RefreshRuntime from "/@react-refresh";
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/dev-server/src/components/TestimonialsSection.tsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}

import { jsxDEV as _jsxDEV } from "/@id/__x00__jsx-source/jsx-dev-runtime";
var _s = $RefreshSig$();
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=d355e541"; const useState = __vite__cjsImport3_react["useState"]; const useEffect = __vite__cjsImport3_react["useEffect"]; const useCallback = __vite__cjsImport3_react["useCallback"];
import { Star, Quote } from "/node_modules/.vite/deps/lucide-react.js?v=eb25920b";
import { useScrollReveal } from "/src/hooks/useScrollReveal.tsx";
const testimonials = [
    {
        quote: "Wonderful experience. Dr. Escobar is the best. Everyone was very cordial and made me feel really comfortable. I would definitely recommend this place to anyone.",
        author: "Cynthia H.",
        avatar: "https://i.pravatar.cc/150?img=1"
    },
    {
        quote: "From the initial phone call throughout the entire process it was definitely 5-star treatment. I would DEFINITELY recommend this place to ANYONE.",
        author: "Ron S.",
        avatar: "https://i.pravatar.cc/150?img=3"
    },
    {
        quote: "Best dental experience I've ever had. The staff is incredibly professional and the office is beautiful. My smile has never looked better!",
        author: "Maria L.",
        avatar: "https://i.pravatar.cc/150?img=5"
    },
    {
        quote: "Dr. Johnson was so gentle and patient with me. I used to be terrified of the dentist, but not anymore. Truly life-changing care.",
        author: "James T.",
        avatar: "https://i.pravatar.cc/150?img=8"
    },
    {
        quote: "Got my implants done here and the results are phenomenal. It looks completely natural. Worth every penny!",
        author: "Sandra K.",
        avatar: "https://i.pravatar.cc/150?img=9"
    },
    {
        quote: "The whole team made my kids feel so comfortable. We drive 30 minutes to come here because no other office compares.",
        author: "David M.",
        avatar: "https://i.pravatar.cc/150?img=11"
    },
    {
        quote: "I had a dental emergency and they fit me in the same day. The care I received was exceptional. Can't thank them enough.",
        author: "Patricia W.",
        avatar: "https://i.pravatar.cc/150?img=16"
    },
    {
        quote: "My veneers look absolutely incredible. People keep asking me what I did differently. Thank you Bellaire Modern Dental!",
        author: "Kevin R.",
        avatar: "https://i.pravatar.cc/150?img=12"
    },
    {
        quote: "Clean, modern, friendly. Everything you want in a dental office. The technology they use is really impressive.",
        author: "Angela P.",
        avatar: "https://i.pravatar.cc/150?img=20"
    },
    {
        quote: "I've been coming here for 3 years and every visit is consistent — excellent care, warm staff, and a beautiful office.",
        author: "Robert J.",
        avatar: "https://i.pravatar.cc/150?img=14"
    },
    {
        quote: "The cosmetic work they did on my teeth completely changed my confidence. I smile all the time now!",
        author: "Lisa N.",
        avatar: "https://i.pravatar.cc/150?img=23"
    },
    {
        quote: "Professional, punctual, and painless. Dr. Munu explained everything clearly and I felt totally at ease throughout.",
        author: "Thomas G.",
        avatar: "https://i.pravatar.cc/150?img=15"
    }
];
export default function TestimonialsSection() {
    _s();
    const { ref, isVisible } = useScrollReveal();
    const [hoveredIdx, setHoveredIdx] = useState(null);
    const [cycleIdx, setCycleIdx] = useState(0);
    const activeIdx = hoveredIdx !== null ? hoveredIdx : cycleIdx;
    const active = testimonials[activeIdx];
    const nextCycle = useCallback(()=>{
        setCycleIdx((prev)=>{
            let next;
            do {
                next = Math.floor(Math.random() * testimonials.length);
            }while (next === prev && testimonials.length > 1)
            return next;
        });
    }, []);
    useEffect(()=>{
        if (hoveredIdx !== null) return;
        const interval = setInterval(nextCycle, 4000);
        return ()=>clearInterval(interval);
    }, [
        hoveredIdx,
        nextCycle
    ]);
    return /*#__PURE__*/ _jsxDEV("section", {
        id: "testimonials",
        className: "py-24 lg:py-32 bg-gradient-charcoal text-secondary-foreground",
        children: /*#__PURE__*/ _jsxDEV("div", {
            className: "container mx-auto px-6",
            ref: ref,
            children: [
                /*#__PURE__*/ _jsxDEV("div", {
                    className: `text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`,
                    children: [
                        /*#__PURE__*/ _jsxDEV("p", {
                            className: "text-sm font-medium tracking-widest uppercase text-primary mb-4",
                            children: "Patient Stories"
                        }, void 0, false, {
                            fileName: "/dev-server/src/components/TestimonialsSection.tsx",
                            lineNumber: 96,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ _jsxDEV("h2", {
                            className: "text-3xl lg:text-5xl font-heading font-bold",
                            children: [
                                "We've helped thousands of Texans achieve a",
                                " ",
                                /*#__PURE__*/ _jsxDEV("span", {
                                    className: "text-gradient-gold",
                                    children: "beautiful smile"
                                }, void 0, false, {
                                    fileName: "/dev-server/src/components/TestimonialsSection.tsx",
                                    lineNumber: 101,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "/dev-server/src/components/TestimonialsSection.tsx",
                            lineNumber: 99,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/dev-server/src/components/TestimonialsSection.tsx",
                    lineNumber: 95,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ _jsxDEV("div", {
                    className: `max-w-5xl mx-auto transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`,
                    children: [
                        /*#__PURE__*/ _jsxDEV("div", {
                            className: "relative bg-secondary/30 backdrop-blur rounded-3xl p-8 lg:p-12 border border-secondary-foreground/10 mb-12 min-h-[220px] flex flex-col justify-center",
                            children: [
                                /*#__PURE__*/ _jsxDEV(Quote, {
                                    className: "h-10 w-10 text-primary/30 mb-4"
                                }, void 0, false, {
                                    fileName: "/dev-server/src/components/TestimonialsSection.tsx",
                                    lineNumber: 108,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ _jsxDEV("div", {
                                    className: "flex gap-1 mb-4",
                                    children: [
                                        ...Array(5)
                                    ].map((_, j)=>/*#__PURE__*/ _jsxDEV(Star, {
                                            className: "h-4 w-4 fill-primary text-primary"
                                        }, j, false, {
                                            fileName: "/dev-server/src/components/TestimonialsSection.tsx",
                                            lineNumber: 111,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "/dev-server/src/components/TestimonialsSection.tsx",
                                    lineNumber: 109,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ _jsxDEV("p", {
                                    className: "text-lg lg:text-xl text-secondary-foreground/90 leading-relaxed italic animate-fade-in",
                                    children: [
                                        '"',
                                        active.quote,
                                        '"'
                                    ]
                                }, activeIdx, true, {
                                    fileName: "/dev-server/src/components/TestimonialsSection.tsx",
                                    lineNumber: 114,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ _jsxDEV("div", {
                                    className: "mt-6 flex items-center gap-3",
                                    children: [
                                        /*#__PURE__*/ _jsxDEV("img", {
                                            src: active.avatar,
                                            alt: active.author,
                                            className: "w-10 h-10 rounded-full object-cover ring-2 ring-primary/40"
                                        }, void 0, false, {
                                            fileName: "/dev-server/src/components/TestimonialsSection.tsx",
                                            lineNumber: 121,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ _jsxDEV("p", {
                                            className: "font-semibold text-secondary-foreground",
                                            children: active.author
                                        }, void 0, false, {
                                            fileName: "/dev-server/src/components/TestimonialsSection.tsx",
                                            lineNumber: 126,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "/dev-server/src/components/TestimonialsSection.tsx",
                                    lineNumber: 120,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "/dev-server/src/components/TestimonialsSection.tsx",
                            lineNumber: 107,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ _jsxDEV("div", {
                            className: "flex flex-wrap justify-center gap-3 lg:gap-4",
                            children: testimonials.map((t, i)=>/*#__PURE__*/ _jsxDEV("button", {
                                    onMouseEnter: ()=>setHoveredIdx(i),
                                    onMouseLeave: ()=>setHoveredIdx(null),
                                    onClick: ()=>setCycleIdx(i),
                                    className: `relative rounded-full transition-all duration-300 ${activeIdx === i ? "ring-2 ring-primary scale-110 shadow-lg shadow-primary/20" : "ring-1 ring-secondary-foreground/20 hover:ring-primary/50 hover:scale-105 opacity-60 hover:opacity-100"}`,
                                    children: [
                                        /*#__PURE__*/ _jsxDEV("img", {
                                            src: t.avatar,
                                            alt: t.author,
                                            className: "w-12 h-12 lg:w-14 lg:h-14 rounded-full object-cover"
                                        }, void 0, false, {
                                            fileName: "/dev-server/src/components/TestimonialsSection.tsx",
                                            lineNumber: 144,
                                            columnNumber: 17
                                        }, this),
                                        activeIdx === i && /*#__PURE__*/ _jsxDEV("span", {
                                            className: "absolute -bottom-1 -right-1 w-4 h-4 bg-primary rounded-full border-2 border-secondary animate-scale-in"
                                        }, void 0, false, {
                                            fileName: "/dev-server/src/components/TestimonialsSection.tsx",
                                            lineNumber: 150,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, i, true, {
                                    fileName: "/dev-server/src/components/TestimonialsSection.tsx",
                                    lineNumber: 133,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "/dev-server/src/components/TestimonialsSection.tsx",
                            lineNumber: 131,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/dev-server/src/components/TestimonialsSection.tsx",
                    lineNumber: 105,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "/dev-server/src/components/TestimonialsSection.tsx",
            lineNumber: 94,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "/dev-server/src/components/TestimonialsSection.tsx",
        lineNumber: 93,
        columnNumber: 5
    }, this);
}
_s(TestimonialsSection, "juEVITGp/02lPjSs6q8zhmkFjFI=", false, function() {
    return [
        useScrollReveal
    ];
});
_c = TestimonialsSection;
var _c;
$RefreshReg$(_c, "TestimonialsSection");


if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}


if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/dev-server/src/components/TestimonialsSection.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/dev-server/src/components/TestimonialsSection.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlRlc3RpbW9uaWFsc1NlY3Rpb24udHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBTdGFyLCBRdW90ZSB9IGZyb20gXCJsdWNpZGUtcmVhY3RcIjtcbmltcG9ydCB7IHVzZVNjcm9sbFJldmVhbCB9IGZyb20gXCJAL2hvb2tzL3VzZVNjcm9sbFJldmVhbFwiO1xuXG5jb25zdCB0ZXN0aW1vbmlhbHMgPSBbXG4gIHtcbiAgICBxdW90ZTogXCJXb25kZXJmdWwgZXhwZXJpZW5jZS4gRHIuIEVzY29iYXIgaXMgdGhlIGJlc3QuIEV2ZXJ5b25lIHdhcyB2ZXJ5IGNvcmRpYWwgYW5kIG1hZGUgbWUgZmVlbCByZWFsbHkgY29tZm9ydGFibGUuIEkgd291bGQgZGVmaW5pdGVseSByZWNvbW1lbmQgdGhpcyBwbGFjZSB0byBhbnlvbmUuXCIsXG4gICAgYXV0aG9yOiBcIkN5bnRoaWEgSC5cIixcbiAgICBhdmF0YXI6IFwiaHR0cHM6Ly9pLnByYXZhdGFyLmNjLzE1MD9pbWc9MVwiLFxuICB9LFxuICB7XG4gICAgcXVvdGU6IFwiRnJvbSB0aGUgaW5pdGlhbCBwaG9uZSBjYWxsIHRocm91Z2hvdXQgdGhlIGVudGlyZSBwcm9jZXNzIGl0IHdhcyBkZWZpbml0ZWx5IDUtc3RhciB0cmVhdG1lbnQuIEkgd291bGQgREVGSU5JVEVMWSByZWNvbW1lbmQgdGhpcyBwbGFjZSB0byBBTllPTkUuXCIsXG4gICAgYXV0aG9yOiBcIlJvbiBTLlwiLFxuICAgIGF2YXRhcjogXCJodHRwczovL2kucHJhdmF0YXIuY2MvMTUwP2ltZz0zXCIsXG4gIH0sXG4gIHtcbiAgICBxdW90ZTogXCJCZXN0IGRlbnRhbCBleHBlcmllbmNlIEkndmUgZXZlciBoYWQuIFRoZSBzdGFmZiBpcyBpbmNyZWRpYmx5IHByb2Zlc3Npb25hbCBhbmQgdGhlIG9mZmljZSBpcyBiZWF1dGlmdWwuIE15IHNtaWxlIGhhcyBuZXZlciBsb29rZWQgYmV0dGVyIVwiLFxuICAgIGF1dGhvcjogXCJNYXJpYSBMLlwiLFxuICAgIGF2YXRhcjogXCJodHRwczovL2kucHJhdmF0YXIuY2MvMTUwP2ltZz01XCIsXG4gIH0sXG4gIHtcbiAgICBxdW90ZTogXCJEci4gSm9obnNvbiB3YXMgc28gZ2VudGxlIGFuZCBwYXRpZW50IHdpdGggbWUuIEkgdXNlZCB0byBiZSB0ZXJyaWZpZWQgb2YgdGhlIGRlbnRpc3QsIGJ1dCBub3QgYW55bW9yZS4gVHJ1bHkgbGlmZS1jaGFuZ2luZyBjYXJlLlwiLFxuICAgIGF1dGhvcjogXCJKYW1lcyBULlwiLFxuICAgIGF2YXRhcjogXCJodHRwczovL2kucHJhdmF0YXIuY2MvMTUwP2ltZz04XCIsXG4gIH0sXG4gIHtcbiAgICBxdW90ZTogXCJHb3QgbXkgaW1wbGFudHMgZG9uZSBoZXJlIGFuZCB0aGUgcmVzdWx0cyBhcmUgcGhlbm9tZW5hbC4gSXQgbG9va3MgY29tcGxldGVseSBuYXR1cmFsLiBXb3J0aCBldmVyeSBwZW5ueSFcIixcbiAgICBhdXRob3I6IFwiU2FuZHJhIEsuXCIsXG4gICAgYXZhdGFyOiBcImh0dHBzOi8vaS5wcmF2YXRhci5jYy8xNTA/aW1nPTlcIixcbiAgfSxcbiAge1xuICAgIHF1b3RlOiBcIlRoZSB3aG9sZSB0ZWFtIG1hZGUgbXkga2lkcyBmZWVsIHNvIGNvbWZvcnRhYmxlLiBXZSBkcml2ZSAzMCBtaW51dGVzIHRvIGNvbWUgaGVyZSBiZWNhdXNlIG5vIG90aGVyIG9mZmljZSBjb21wYXJlcy5cIixcbiAgICBhdXRob3I6IFwiRGF2aWQgTS5cIixcbiAgICBhdmF0YXI6IFwiaHR0cHM6Ly9pLnByYXZhdGFyLmNjLzE1MD9pbWc9MTFcIixcbiAgfSxcbiAge1xuICAgIHF1b3RlOiBcIkkgaGFkIGEgZGVudGFsIGVtZXJnZW5jeSBhbmQgdGhleSBmaXQgbWUgaW4gdGhlIHNhbWUgZGF5LiBUaGUgY2FyZSBJIHJlY2VpdmVkIHdhcyBleGNlcHRpb25hbC4gQ2FuJ3QgdGhhbmsgdGhlbSBlbm91Z2guXCIsXG4gICAgYXV0aG9yOiBcIlBhdHJpY2lhIFcuXCIsXG4gICAgYXZhdGFyOiBcImh0dHBzOi8vaS5wcmF2YXRhci5jYy8xNTA/aW1nPTE2XCIsXG4gIH0sXG4gIHtcbiAgICBxdW90ZTogXCJNeSB2ZW5lZXJzIGxvb2sgYWJzb2x1dGVseSBpbmNyZWRpYmxlLiBQZW9wbGUga2VlcCBhc2tpbmcgbWUgd2hhdCBJIGRpZCBkaWZmZXJlbnRseS4gVGhhbmsgeW91IEJlbGxhaXJlIE1vZGVybiBEZW50YWwhXCIsXG4gICAgYXV0aG9yOiBcIktldmluIFIuXCIsXG4gICAgYXZhdGFyOiBcImh0dHBzOi8vaS5wcmF2YXRhci5jYy8xNTA/aW1nPTEyXCIsXG4gIH0sXG4gIHtcbiAgICBxdW90ZTogXCJDbGVhbiwgbW9kZXJuLCBmcmllbmRseS4gRXZlcnl0aGluZyB5b3Ugd2FudCBpbiBhIGRlbnRhbCBvZmZpY2UuIFRoZSB0ZWNobm9sb2d5IHRoZXkgdXNlIGlzIHJlYWxseSBpbXByZXNzaXZlLlwiLFxuICAgIGF1dGhvcjogXCJBbmdlbGEgUC5cIixcbiAgICBhdmF0YXI6IFwiaHR0cHM6Ly9pLnByYXZhdGFyLmNjLzE1MD9pbWc9MjBcIixcbiAgfSxcbiAge1xuICAgIHF1b3RlOiBcIkkndmUgYmVlbiBjb21pbmcgaGVyZSBmb3IgMyB5ZWFycyBhbmQgZXZlcnkgdmlzaXQgaXMgY29uc2lzdGVudCDigJQgZXhjZWxsZW50IGNhcmUsIHdhcm0gc3RhZmYsIGFuZCBhIGJlYXV0aWZ1bCBvZmZpY2UuXCIsXG4gICAgYXV0aG9yOiBcIlJvYmVydCBKLlwiLFxuICAgIGF2YXRhcjogXCJodHRwczovL2kucHJhdmF0YXIuY2MvMTUwP2ltZz0xNFwiLFxuICB9LFxuICB7XG4gICAgcXVvdGU6IFwiVGhlIGNvc21ldGljIHdvcmsgdGhleSBkaWQgb24gbXkgdGVldGggY29tcGxldGVseSBjaGFuZ2VkIG15IGNvbmZpZGVuY2UuIEkgc21pbGUgYWxsIHRoZSB0aW1lIG5vdyFcIixcbiAgICBhdXRob3I6IFwiTGlzYSBOLlwiLFxuICAgIGF2YXRhcjogXCJodHRwczovL2kucHJhdmF0YXIuY2MvMTUwP2ltZz0yM1wiLFxuICB9LFxuICB7XG4gICAgcXVvdGU6IFwiUHJvZmVzc2lvbmFsLCBwdW5jdHVhbCwgYW5kIHBhaW5sZXNzLiBEci4gTXVudSBleHBsYWluZWQgZXZlcnl0aGluZyBjbGVhcmx5IGFuZCBJIGZlbHQgdG90YWxseSBhdCBlYXNlIHRocm91Z2hvdXQuXCIsXG4gICAgYXV0aG9yOiBcIlRob21hcyBHLlwiLFxuICAgIGF2YXRhcjogXCJodHRwczovL2kucHJhdmF0YXIuY2MvMTUwP2ltZz0xNVwiLFxuICB9LFxuXTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGVzdGltb25pYWxzU2VjdGlvbigpIHtcbiAgY29uc3QgeyByZWYsIGlzVmlzaWJsZSB9ID0gdXNlU2Nyb2xsUmV2ZWFsKCk7XG4gIGNvbnN0IFtob3ZlcmVkSWR4LCBzZXRIb3ZlcmVkSWR4XSA9IHVzZVN0YXRlPG51bWJlciB8IG51bGw+KG51bGwpO1xuICBjb25zdCBbY3ljbGVJZHgsIHNldEN5Y2xlSWR4XSA9IHVzZVN0YXRlKDApO1xuXG4gIGNvbnN0IGFjdGl2ZUlkeCA9IGhvdmVyZWRJZHggIT09IG51bGwgPyBob3ZlcmVkSWR4IDogY3ljbGVJZHg7XG4gIGNvbnN0IGFjdGl2ZSA9IHRlc3RpbW9uaWFsc1thY3RpdmVJZHhdO1xuXG4gIGNvbnN0IG5leHRDeWNsZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzZXRDeWNsZUlkeCgocHJldikgPT4ge1xuICAgICAgbGV0IG5leHQ6IG51bWJlcjtcbiAgICAgIGRvIHtcbiAgICAgICAgbmV4dCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRlc3RpbW9uaWFscy5sZW5ndGgpO1xuICAgICAgfSB3aGlsZSAobmV4dCA9PT0gcHJldiAmJiB0ZXN0aW1vbmlhbHMubGVuZ3RoID4gMSk7XG4gICAgICByZXR1cm4gbmV4dDtcbiAgICB9KTtcbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGhvdmVyZWRJZHggIT09IG51bGwpIHJldHVybjtcbiAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKG5leHRDeWNsZSwgNDAwMCk7XG4gICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICB9LCBbaG92ZXJlZElkeCwgbmV4dEN5Y2xlXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBpZD1cInRlc3RpbW9uaWFsc1wiIGNsYXNzTmFtZT1cInB5LTI0IGxnOnB5LTMyIGJnLWdyYWRpZW50LWNoYXJjb2FsIHRleHQtc2Vjb25kYXJ5LWZvcmVncm91bmRcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcHgtNlwiIHJlZj17cmVmfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2B0ZXh0LWNlbnRlciBtYXgtdy0zeGwgbXgtYXV0byBtYi0xNiB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi03MDAgJHtpc1Zpc2libGUgPyBcIm9wYWNpdHktMTAwIHRyYW5zbGF0ZS15LTBcIiA6IFwib3BhY2l0eS0wIHRyYW5zbGF0ZS15LThcIn1gfT5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtbWVkaXVtIHRyYWNraW5nLXdpZGVzdCB1cHBlcmNhc2UgdGV4dC1wcmltYXJ5IG1iLTRcIj5cbiAgICAgICAgICAgIFBhdGllbnQgU3Rvcmllc1xuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0zeGwgbGc6dGV4dC01eGwgZm9udC1oZWFkaW5nIGZvbnQtYm9sZFwiPlxuICAgICAgICAgICAgV2UndmUgaGVscGVkIHRob3VzYW5kcyBvZiBUZXhhbnMgYWNoaWV2ZSBhe1wiIFwifVxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ncmFkaWVudC1nb2xkXCI+YmVhdXRpZnVsIHNtaWxlPC9zcGFuPlxuICAgICAgICAgIDwvaDI+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgbWF4LXctNXhsIG14LWF1dG8gdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tNzAwIGRlbGF5LTIwMCAke2lzVmlzaWJsZSA/IFwib3BhY2l0eS0xMDAgdHJhbnNsYXRlLXktMFwiIDogXCJvcGFjaXR5LTAgdHJhbnNsYXRlLXktOFwifWB9PlxuICAgICAgICAgIHsvKiBBY3RpdmUgdGVzdGltb25pYWwgZGlzcGxheSAqL31cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGJnLXNlY29uZGFyeS8zMCBiYWNrZHJvcC1ibHVyIHJvdW5kZWQtM3hsIHAtOCBsZzpwLTEyIGJvcmRlciBib3JkZXItc2Vjb25kYXJ5LWZvcmVncm91bmQvMTAgbWItMTIgbWluLWgtWzIyMHB4XSBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgICA8UXVvdGUgY2xhc3NOYW1lPVwiaC0xMCB3LTEwIHRleHQtcHJpbWFyeS8zMCBtYi00XCIgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtMSBtYi00XCI+XG4gICAgICAgICAgICAgIHtbLi4uQXJyYXkoNSldLm1hcCgoXywgaikgPT4gKFxuICAgICAgICAgICAgICAgIDxTdGFyIGtleT17an0gY2xhc3NOYW1lPVwiaC00IHctNCBmaWxsLXByaW1hcnkgdGV4dC1wcmltYXJ5XCIgLz5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxwXG4gICAgICAgICAgICAgIGtleT17YWN0aXZlSWR4fVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWxnIGxnOnRleHQteGwgdGV4dC1zZWNvbmRhcnktZm9yZWdyb3VuZC85MCBsZWFkaW5nLXJlbGF4ZWQgaXRhbGljIGFuaW1hdGUtZmFkZS1pblwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIFwie2FjdGl2ZS5xdW90ZX1cIlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC02IGZsZXggaXRlbXMtY2VudGVyIGdhcC0zXCI+XG4gICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICBzcmM9e2FjdGl2ZS5hdmF0YXJ9XG4gICAgICAgICAgICAgICAgYWx0PXthY3RpdmUuYXV0aG9yfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctMTAgaC0xMCByb3VuZGVkLWZ1bGwgb2JqZWN0LWNvdmVyIHJpbmctMiByaW5nLXByaW1hcnkvNDBcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIHRleHQtc2Vjb25kYXJ5LWZvcmVncm91bmRcIj57YWN0aXZlLmF1dGhvcn08L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIHsvKiBBdmF0YXIgZ3JpZCAqL31cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGp1c3RpZnktY2VudGVyIGdhcC0zIGxnOmdhcC00XCI+XG4gICAgICAgICAgICB7dGVzdGltb25pYWxzLm1hcCgodCwgaSkgPT4gKFxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAga2V5PXtpfVxuICAgICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17KCkgPT4gc2V0SG92ZXJlZElkeChpKX1cbiAgICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU9eygpID0+IHNldEhvdmVyZWRJZHgobnVsbCl9XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0Q3ljbGVJZHgoaSl9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcmVsYXRpdmUgcm91bmRlZC1mdWxsIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMCAke1xuICAgICAgICAgICAgICAgICAgYWN0aXZlSWR4ID09PSBpXG4gICAgICAgICAgICAgICAgICAgID8gXCJyaW5nLTIgcmluZy1wcmltYXJ5IHNjYWxlLTExMCBzaGFkb3ctbGcgc2hhZG93LXByaW1hcnkvMjBcIlxuICAgICAgICAgICAgICAgICAgICA6IFwicmluZy0xIHJpbmctc2Vjb25kYXJ5LWZvcmVncm91bmQvMjAgaG92ZXI6cmluZy1wcmltYXJ5LzUwIGhvdmVyOnNjYWxlLTEwNSBvcGFjaXR5LTYwIGhvdmVyOm9wYWNpdHktMTAwXCJcbiAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgIHNyYz17dC5hdmF0YXJ9XG4gICAgICAgICAgICAgICAgICBhbHQ9e3QuYXV0aG9yfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy0xMiBoLTEyIGxnOnctMTQgbGc6aC0xNCByb3VuZGVkLWZ1bGwgb2JqZWN0LWNvdmVyXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIHthY3RpdmVJZHggPT09IGkgJiYgKFxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYWJzb2x1dGUgLWJvdHRvbS0xIC1yaWdodC0xIHctNCBoLTQgYmctcHJpbWFyeSByb3VuZGVkLWZ1bGwgYm9yZGVyLTIgYm9yZGVyLXNlY29uZGFyeSBhbmltYXRlLXNjYWxlLWluXCIgLz5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZUNhbGxiYWNrIiwiU3RhciIsIlF1b3RlIiwidXNlU2Nyb2xsUmV2ZWFsIiwidGVzdGltb25pYWxzIiwicXVvdGUiLCJhdXRob3IiLCJhdmF0YXIiLCJUZXN0aW1vbmlhbHNTZWN0aW9uIiwicmVmIiwiaXNWaXNpYmxlIiwiaG92ZXJlZElkeCIsInNldEhvdmVyZWRJZHgiLCJjeWNsZUlkeCIsInNldEN5Y2xlSWR4IiwiYWN0aXZlSWR4IiwiYWN0aXZlIiwibmV4dEN5Y2xlIiwicHJldiIsIm5leHQiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJsZW5ndGgiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsInNlY3Rpb24iLCJpZCIsImNsYXNzTmFtZSIsImRpdiIsInAiLCJoMiIsInNwYW4iLCJBcnJheSIsIm1hcCIsIl8iLCJqIiwiaW1nIiwic3JjIiwiYWx0IiwidCIsImkiLCJidXR0b24iLCJvbk1vdXNlRW50ZXIiLCJvbk1vdXNlTGVhdmUiLCJvbkNsaWNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxTQUFTQSxRQUFRLEVBQUVDLFNBQVMsRUFBRUMsV0FBVyxRQUFRLFFBQVE7QUFDekQsU0FBU0MsSUFBSSxFQUFFQyxLQUFLLFFBQVEsZUFBZTtBQUMzQyxTQUFTQyxlQUFlLFFBQVEsMEJBQTBCO0FBRTFELE1BQU1DLGVBQWU7SUFDbkI7UUFDRUMsT0FBTztRQUNQQyxRQUFRO1FBQ1JDLFFBQVE7SUFDVjtJQUNBO1FBQ0VGLE9BQU87UUFDUEMsUUFBUTtRQUNSQyxRQUFRO0lBQ1Y7SUFDQTtRQUNFRixPQUFPO1FBQ1BDLFFBQVE7UUFDUkMsUUFBUTtJQUNWO0lBQ0E7UUFDRUYsT0FBTztRQUNQQyxRQUFRO1FBQ1JDLFFBQVE7SUFDVjtJQUNBO1FBQ0VGLE9BQU87UUFDUEMsUUFBUTtRQUNSQyxRQUFRO0lBQ1Y7SUFDQTtRQUNFRixPQUFPO1FBQ1BDLFFBQVE7UUFDUkMsUUFBUTtJQUNWO0lBQ0E7UUFDRUYsT0FBTztRQUNQQyxRQUFRO1FBQ1JDLFFBQVE7SUFDVjtJQUNBO1FBQ0VGLE9BQU87UUFDUEMsUUFBUTtRQUNSQyxRQUFRO0lBQ1Y7SUFDQTtRQUNFRixPQUFP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