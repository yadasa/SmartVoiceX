import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/AnimatedCounter.tsx");import * as RefreshRuntime from "/@react-refresh";
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/dev-server/src/components/AnimatedCounter.tsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}

import { jsxDEV as _jsxDEV } from "/@id/__x00__jsx-source/jsx-dev-runtime";
var _s = $RefreshSig$(), _s1 = $RefreshSig$();
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=d355e541"; const useEffect = __vite__cjsImport3_react["useEffect"]; const useState = __vite__cjsImport3_react["useState"];
import { useScrollReveal } from "/src/hooks/useScrollReveal.tsx";
function Counter({ end, suffix = "", duration = 2000 }) {
    _s();
    const [count, setCount] = useState(0);
    const { ref, isVisible } = useScrollReveal(0.3);
    useEffect(()=>{
        if (!isVisible) return;
        let start = 0;
        const step = end / (duration / 16);
        const timer = setInterval(()=>{
            start += step;
            if (start >= end) {
                setCount(end);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, 16);
        return ()=>clearInterval(timer);
    }, [
        isVisible,
        end,
        duration
    ]);
    return /*#__PURE__*/ _jsxDEV("span", {
        ref: ref,
        children: [
            count.toLocaleString(),
            suffix
        ]
    }, void 0, true, {
        fileName: "/dev-server/src/components/AnimatedCounter.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
_s(Counter, "kxFx7x70oUeDbMD68ffeqMhBIDs=", false, function() {
    return [
        useScrollReveal
    ];
});
_c = Counter;
const stats = [
    {
        value: 550,
        suffix: "+",
        label: "5-Star Reviews"
    },
    {
        value: 15,
        suffix: "+",
        label: "Years of Experience"
    },
    {
        value: 10000,
        suffix: "+",
        label: "Smiles Transformed"
    },
    {
        value: 98,
        suffix: "%",
        label: "Patient Satisfaction"
    }
];
export default function StatsSection() {
    _s1();
    const { ref, isVisible } = useScrollReveal();
    return /*#__PURE__*/ _jsxDEV("section", {
        className: "relative py-20 overflow-hidden",
        children: [
            /*#__PURE__*/ _jsxDEV("div", {
                className: "absolute inset-0 bg-gradient-gold opacity-95"
            }, void 0, false, {
                fileName: "/dev-server/src/components/AnimatedCounter.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ _jsxDEV("div", {
                className: "absolute inset-0",
                children: /*#__PURE__*/ _jsxDEV("svg", {
                    className: "absolute top-0 left-0 w-full h-full opacity-10",
                    viewBox: "0 0 800 200",
                    preserveAspectRatio: "none",
                    children: [
                        /*#__PURE__*/ _jsxDEV("path", {
                            d: "M0,100 C200,150 400,50 600,100 C700,130 800,80 800,100 L800,200 L0,200 Z",
                            fill: "currentColor",
                            className: "text-primary-foreground animate-[wave_8s_ease-in-out_infinite]"
                        }, void 0, false, {
                            fileName: "/dev-server/src/components/AnimatedCounter.tsx",
                            lineNumber: 47,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ _jsxDEV("path", {
                            d: "M0,120 C150,80 350,160 500,100 C650,40 750,120 800,100 L800,200 L0,200 Z",
                            fill: "currentColor",
                            className: "text-primary-foreground opacity-50 animate-[wave_12s_ease-in-out_infinite_reverse]"
                        }, void 0, false, {
                            fileName: "/dev-server/src/components/AnimatedCounter.tsx",
                            lineNumber: 48,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/dev-server/src/components/AnimatedCounter.tsx",
                    lineNumber: 46,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "/dev-server/src/components/AnimatedCounter.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ _jsxDEV("div", {
                className: "absolute inset-0 overflow-hidden pointer-events-none",
                children: [
                    ...Array(6)
                ].map((_, i)=>/*#__PURE__*/ _jsxDEV("svg", {
                        className: "absolute text-primary-foreground/10 animate-[float_6s_ease-in-out_infinite]",
                        style: {
                            width: 24 + i * 8,
                            height: 24 + i * 8,
                            left: `${10 + i * 16}%`,
                            top: `${20 + i % 3 * 25}%`,
                            animationDelay: `${i * 0.8}s`
                        },
                        viewBox: "0 0 24 24",
                        fill: "currentColor",
                        children: /*#__PURE__*/ _jsxDEV("path", {
                            d: "M12 2C9.5 2 7 3.5 7 6.5C7 9 6 11 5.5 13C5 15 5 17 6 18.5C7 20 8 20 9 18C10 16 11 15 12 15C13 15 14 16 15 18C16 20 17 20 18 18.5C19 17 19 15 18.5 13C18 11 17 9 17 6.5C17 3.5 14.5 2 12 2Z"
                        }, void 0, false, {
                            fileName: "/dev-server/src/components/AnimatedCounter.tsx",
                            lineNumber: 68,
                            columnNumber: 13
                        }, this)
                    }, i, false, {
                        fileName: "/dev-server/src/components/AnimatedCounter.tsx",
                        lineNumber: 55,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "/dev-server/src/components/AnimatedCounter.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ _jsxDEV("div", {
                className: "relative z-10 container mx-auto px-6",
                ref: ref,
                children: /*#__PURE__*/ _jsxDEV("div", {
                    className: "grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12",
                    children: stats.map((stat, i)=>/*#__PURE__*/ _jsxDEV("div", {
                            className: `text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`,
                            style: {
                                transitionDelay: isVisible ? `${i * 150}ms` : "0ms"
                            },
                            children: [
                                /*#__PURE__*/ _jsxDEV("div", {
                                    className: "text-4xl lg:text-6xl font-heading font-bold text-primary-foreground mb-2",
                                    children: /*#__PURE__*/ _jsxDEV(Counter, {
                                        end: stat.value,
                                        suffix: stat.suffix
                                    }, void 0, false, {
                                        fileName: "/dev-server/src/components/AnimatedCounter.tsx",
                                        lineNumber: 82,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "/dev-server/src/components/AnimatedCounter.tsx",
                                    lineNumber: 81,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ _jsxDEV("p", {
                                    className: "text-primary-foreground/80 text-sm font-medium tracking-wide uppercase",
                                    children: stat.label
                                }, void 0, false, {
                                    fileName: "/dev-server/src/components/AnimatedCounter.tsx",
                                    lineNumber: 84,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, stat.label, true, {
                            fileName: "/dev-server/src/components/AnimatedCounter.tsx",
                            lineNumber: 76,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "/dev-server/src/components/AnimatedCounter.tsx",
                    lineNumber: 74,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "/dev-server/src/components/AnimatedCounter.tsx",
                lineNumber: 73,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "/dev-server/src/components/AnimatedCounter.tsx",
        lineNumber: 42,
        columnNumber: 5
    }, this);
}
_s1(StatsSection, "aCOyLg7yh4JHGJYS1/e1njthfZ4=", false, function() {
    return [
        useScrollReveal
    ];
});
_c1 = StatsSection;
var _c, _c1;
$RefreshReg$(_c, "Counter");
$RefreshReg$(_c1, "StatsSection");


if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}


if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/dev-server/src/components/AnimatedCounter.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/dev-server/src/components/AnimatedCounter.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkFuaW1hdGVkQ291bnRlci50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlU2Nyb2xsUmV2ZWFsIH0gZnJvbSBcIkAvaG9va3MvdXNlU2Nyb2xsUmV2ZWFsXCI7XG5cbmZ1bmN0aW9uIENvdW50ZXIoeyBlbmQsIHN1ZmZpeCA9IFwiXCIsIGR1cmF0aW9uID0gMjAwMCB9OiB7IGVuZDogbnVtYmVyOyBzdWZmaXg/OiBzdHJpbmc7IGR1cmF0aW9uPzogbnVtYmVyIH0pIHtcbiAgY29uc3QgW2NvdW50LCBzZXRDb3VudF0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgeyByZWYsIGlzVmlzaWJsZSB9ID0gdXNlU2Nyb2xsUmV2ZWFsKDAuMyk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWlzVmlzaWJsZSkgcmV0dXJuO1xuICAgIGxldCBzdGFydCA9IDA7XG4gICAgY29uc3Qgc3RlcCA9IGVuZCAvIChkdXJhdGlvbiAvIDE2KTtcbiAgICBjb25zdCB0aW1lciA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIHN0YXJ0ICs9IHN0ZXA7XG4gICAgICBpZiAoc3RhcnQgPj0gZW5kKSB7XG4gICAgICAgIHNldENvdW50KGVuZCk7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGltZXIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0Q291bnQoTWF0aC5mbG9vcihzdGFydCkpO1xuICAgICAgfVxuICAgIH0sIDE2KTtcbiAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbCh0aW1lcik7XG4gIH0sIFtpc1Zpc2libGUsIGVuZCwgZHVyYXRpb25dKTtcblxuICByZXR1cm4gKFxuICAgIDxzcGFuIHJlZj17cmVmfT5cbiAgICAgIHtjb3VudC50b0xvY2FsZVN0cmluZygpfXtzdWZmaXh9XG4gICAgPC9zcGFuPlxuICApO1xufVxuXG5jb25zdCBzdGF0cyA9IFtcbiAgeyB2YWx1ZTogNTUwLCBzdWZmaXg6IFwiK1wiLCBsYWJlbDogXCI1LVN0YXIgUmV2aWV3c1wiIH0sXG4gIHsgdmFsdWU6IDE1LCBzdWZmaXg6IFwiK1wiLCBsYWJlbDogXCJZZWFycyBvZiBFeHBlcmllbmNlXCIgfSxcbiAgeyB2YWx1ZTogMTAwMDAsIHN1ZmZpeDogXCIrXCIsIGxhYmVsOiBcIlNtaWxlcyBUcmFuc2Zvcm1lZFwiIH0sXG4gIHsgdmFsdWU6IDk4LCBzdWZmaXg6IFwiJVwiLCBsYWJlbDogXCJQYXRpZW50IFNhdGlzZmFjdGlvblwiIH0sXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTdGF0c1NlY3Rpb24oKSB7XG4gIGNvbnN0IHsgcmVmLCBpc1Zpc2libGUgfSA9IHVzZVNjcm9sbFJldmVhbCgpO1xuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicmVsYXRpdmUgcHktMjAgb3ZlcmZsb3ctaGlkZGVuXCI+XG4gICAgICB7LyogQW5pbWF0ZWQgYmFja2dyb3VuZCBwYXR0ZXJuICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0wIGJnLWdyYWRpZW50LWdvbGQgb3BhY2l0eS05NVwiIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LTBcIj5cbiAgICAgICAgPHN2ZyBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMCBsZWZ0LTAgdy1mdWxsIGgtZnVsbCBvcGFjaXR5LTEwXCIgdmlld0JveD1cIjAgMCA4MDAgMjAwXCIgcHJlc2VydmVBc3BlY3RSYXRpbz1cIm5vbmVcIj5cbiAgICAgICAgICA8cGF0aCBkPVwiTTAsMTAwIEMyMDAsMTUwIDQwMCw1MCA2MDAsMTAwIEM3MDAsMTMwIDgwMCw4MCA4MDAsMTAwIEw4MDAsMjAwIEwwLDIwMCBaXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIGNsYXNzTmFtZT1cInRleHQtcHJpbWFyeS1mb3JlZ3JvdW5kIGFuaW1hdGUtW3dhdmVfOHNfZWFzZS1pbi1vdXRfaW5maW5pdGVdXCIgLz5cbiAgICAgICAgICA8cGF0aCBkPVwiTTAsMTIwIEMxNTAsODAgMzUwLDE2MCA1MDAsMTAwIEM2NTAsNDAgNzUwLDEyMCA4MDAsMTAwIEw4MDAsMjAwIEwwLDIwMCBaXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIGNsYXNzTmFtZT1cInRleHQtcHJpbWFyeS1mb3JlZ3JvdW5kIG9wYWNpdHktNTAgYW5pbWF0ZS1bd2F2ZV8xMnNfZWFzZS1pbi1vdXRfaW5maW5pdGVfcmV2ZXJzZV1cIiAvPlxuICAgICAgICA8L3N2Zz5cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7LyogRmxvYXRpbmcgdG9vdGggaWNvbnMgKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LTAgb3ZlcmZsb3ctaGlkZGVuIHBvaW50ZXItZXZlbnRzLW5vbmVcIj5cbiAgICAgICAge1suLi5BcnJheSg2KV0ubWFwKChfLCBpKSA9PiAoXG4gICAgICAgICAgPHN2Z1xuICAgICAgICAgICAga2V5PXtpfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdGV4dC1wcmltYXJ5LWZvcmVncm91bmQvMTAgYW5pbWF0ZS1bZmxvYXRfNnNfZWFzZS1pbi1vdXRfaW5maW5pdGVdXCJcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIHdpZHRoOiAyNCArIGkgKiA4LFxuICAgICAgICAgICAgICBoZWlnaHQ6IDI0ICsgaSAqIDgsXG4gICAgICAgICAgICAgIGxlZnQ6IGAkezEwICsgaSAqIDE2fSVgLFxuICAgICAgICAgICAgICB0b3A6IGAkezIwICsgKGkgJSAzKSAqIDI1fSVgLFxuICAgICAgICAgICAgICBhbmltYXRpb25EZWxheTogYCR7aSAqIDAuOH1zYCxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTIgMkM5LjUgMiA3IDMuNSA3IDYuNUM3IDkgNiAxMSA1LjUgMTNDNSAxNSA1IDE3IDYgMTguNUM3IDIwIDggMjAgOSAxOEMxMCAxNiAxMSAxNSAxMiAxNUMxMyAxNSAxNCAxNiAxNSAxOEMxNiAyMCAxNyAyMCAxOCAxOC41QzE5IDE3IDE5IDE1IDE4LjUgMTNDMTggMTEgMTcgOSAxNyA2LjVDMTcgMy41IDE0LjUgMiAxMiAyWlwiIC8+XG4gICAgICAgICAgPC9zdmc+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgei0xMCBjb250YWluZXIgbXgtYXV0byBweC02XCIgcmVmPXtyZWZ9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgbGc6Z3JpZC1jb2xzLTQgZ2FwLTggbGc6Z2FwLTEyXCI+XG4gICAgICAgICAge3N0YXRzLm1hcCgoc3RhdCwgaSkgPT4gKFxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBrZXk9e3N0YXQubGFiZWx9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YHRleHQtY2VudGVyIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTcwMCAke2lzVmlzaWJsZSA/IFwib3BhY2l0eS0xMDAgdHJhbnNsYXRlLXktMFwiIDogXCJvcGFjaXR5LTAgdHJhbnNsYXRlLXktOFwifWB9XG4gICAgICAgICAgICAgIHN0eWxlPXt7IHRyYW5zaXRpb25EZWxheTogaXNWaXNpYmxlID8gYCR7aSAqIDE1MH1tc2AgOiBcIjBtc1wiIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC00eGwgbGc6dGV4dC02eGwgZm9udC1oZWFkaW5nIGZvbnQtYm9sZCB0ZXh0LXByaW1hcnktZm9yZWdyb3VuZCBtYi0yXCI+XG4gICAgICAgICAgICAgICAgPENvdW50ZXIgZW5kPXtzdGF0LnZhbHVlfSBzdWZmaXg9e3N0YXQuc3VmZml4fSAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5LWZvcmVncm91bmQvODAgdGV4dC1zbSBmb250LW1lZGl1bSB0cmFja2luZy13aWRlIHVwcGVyY2FzZVwiPlxuICAgICAgICAgICAgICAgIHtzdGF0LmxhYmVsfVxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VTY3JvbGxSZXZlYWwiLCJDb3VudGVyIiwiZW5kIiwic3VmZml4IiwiZHVyYXRpb24iLCJjb3VudCIsInNldENvdW50IiwicmVmIiwiaXNWaXNpYmxlIiwic3RhcnQiLCJzdGVwIiwidGltZXIiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJNYXRoIiwiZmxvb3IiLCJzcGFuIiwidG9Mb2NhbGVTdHJpbmciLCJzdGF0cyIsInZhbHVlIiwibGFiZWwiLCJTdGF0c1NlY3Rpb24iLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiZGl2Iiwic3ZnIiwidmlld0JveCIsInByZXNlcnZlQXNwZWN0UmF0aW8iLCJwYXRoIiwiZCIsImZpbGwiLCJBcnJheSIsIm1hcCIsIl8iLCJpIiwic3R5bGUiLCJ3aWR0aCIsImhlaWdodCIsImxlZnQiLCJ0b3AiLCJhbmltYXRpb25EZWxheSIsInN0YXQiLCJ0cmFuc2l0aW9uRGVsYXkiLCJwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxTQUFTQSxTQUFTLEVBQUVDLFFBQVEsUUFBUSxRQUFRO0FBQzVDLFNBQVNDLGVBQWUsUUFBUSwwQkFBMEI7QUFFMUQsU0FBU0MsUUFBUSxFQUFFQyxHQUFHLEVBQUVDLFNBQVMsRUFBRSxFQUFFQyxXQUFXLElBQUksRUFBdUQ7O0lBQ3pHLE1BQU0s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