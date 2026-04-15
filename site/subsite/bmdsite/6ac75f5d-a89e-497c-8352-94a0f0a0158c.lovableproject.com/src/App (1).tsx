import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/App.tsx");import * as RefreshRuntime from "/@react-refresh";
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/dev-server/src/App.tsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}

import { jsxDEV as _jsxDEV } from "/@id/__x00__jsx-source/jsx-dev-runtime";
import { QueryClient, QueryClientProvider } from "/node_modules/.vite/deps/@tanstack_react-query.js?v=9eb77825";
import { BrowserRouter, Route, Routes } from "/node_modules/.vite/deps/react-router-dom.js?v=da1c5f2d";
import { Toaster as Sonner } from "/src/components/ui/sonner.tsx";
import { Toaster } from "/src/components/ui/toaster.tsx";
import { TooltipProvider } from "/src/components/ui/tooltip.tsx";
import { ThemeProvider } from "/src/hooks/useTheme.tsx?t=1776269862329";
import Index from "/src/pages/Index.tsx?t=1776270003511";
import NotFound from "/src/pages/NotFound.tsx";
const queryClient = new QueryClient();
const App = ()=>/*#__PURE__*/ _jsxDEV(QueryClientProvider, {
        client: queryClient,
        children: /*#__PURE__*/ _jsxDEV(ThemeProvider, {
            children: /*#__PURE__*/ _jsxDEV(TooltipProvider, {
                children: [
                    /*#__PURE__*/ _jsxDEV(Toaster, {}, void 0, false, {
                        fileName: "/dev-server/src/App.tsx",
                        lineNumber: 16,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ _jsxDEV(Sonner, {}, void 0, false, {
                        fileName: "/dev-server/src/App.tsx",
                        lineNumber: 17,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ _jsxDEV(BrowserRouter, {
                        children: /*#__PURE__*/ _jsxDEV(Routes, {
                            children: [
                                /*#__PURE__*/ _jsxDEV(Route, {
                                    path: "/",
                                    element: /*#__PURE__*/ _jsxDEV(Index, {}, void 0, false, {
                                        fileName: "/dev-server/src/App.tsx",
                                        lineNumber: 20,
                                        columnNumber: 38
                                    }, void 0)
                                }, void 0, false, {
                                    fileName: "/dev-server/src/App.tsx",
                                    lineNumber: 20,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ _jsxDEV(Route, {
                                    path: "*",
                                    element: /*#__PURE__*/ _jsxDEV(NotFound, {}, void 0, false, {
                                        fileName: "/dev-server/src/App.tsx",
                                        lineNumber: 21,
                                        columnNumber: 38
                                    }, void 0)
                                }, void 0, false, {
                                    fileName: "/dev-server/src/App.tsx",
                                    lineNumber: 21,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "/dev-server/src/App.tsx",
                            lineNumber: 19,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "/dev-server/src/App.tsx",
                        lineNumber: 18,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/dev-server/src/App.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this)
        }, void 0, false, {
            fileName: "/dev-server/src/App.tsx",
            lineNumber: 14,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "/dev-server/src/App.tsx",
        lineNumber: 13,
        columnNumber: 3
    }, this);
_c = App;
export default App;
var _c;
$RefreshReg$(_c, "App");


if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}


if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/dev-server/src/App.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/dev-server/src/App.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkFwcC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUXVlcnlDbGllbnQsIFF1ZXJ5Q2xpZW50UHJvdmlkZXIgfSBmcm9tIFwiQHRhbnN0YWNrL3JlYWN0LXF1ZXJ5XCI7XG5pbXBvcnQgeyBCcm93c2VyUm91dGVyLCBSb3V0ZSwgUm91dGVzIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCB7IFRvYXN0ZXIgYXMgU29ubmVyIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9zb25uZXJcIjtcbmltcG9ydCB7IFRvYXN0ZXIgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL3RvYXN0ZXJcIjtcbmltcG9ydCB7IFRvb2x0aXBQcm92aWRlciB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvdG9vbHRpcFwiO1xuaW1wb3J0IHsgVGhlbWVQcm92aWRlciB9IGZyb20gXCJAL2hvb2tzL3VzZVRoZW1lXCI7XG5pbXBvcnQgSW5kZXggZnJvbSBcIi4vcGFnZXMvSW5kZXgudHN4XCI7XG5pbXBvcnQgTm90Rm91bmQgZnJvbSBcIi4vcGFnZXMvTm90Rm91bmQudHN4XCI7XG5cbmNvbnN0IHF1ZXJ5Q2xpZW50ID0gbmV3IFF1ZXJ5Q2xpZW50KCk7XG5cbmNvbnN0IEFwcCA9ICgpID0+IChcbiAgPFF1ZXJ5Q2xpZW50UHJvdmlkZXIgY2xpZW50PXtxdWVyeUNsaWVudH0+XG4gICAgPFRoZW1lUHJvdmlkZXI+XG4gICAgICA8VG9vbHRpcFByb3ZpZGVyPlxuICAgICAgICA8VG9hc3RlciAvPlxuICAgICAgICA8U29ubmVyIC8+XG4gICAgICAgIDxCcm93c2VyUm91dGVyPlxuICAgICAgICAgIDxSb3V0ZXM+XG4gICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9cIiBlbGVtZW50PXs8SW5kZXggLz59IC8+XG4gICAgICAgICAgICA8Um91dGUgcGF0aD1cIipcIiBlbGVtZW50PXs8Tm90Rm91bmQgLz59IC8+XG4gICAgICAgICAgPC9Sb3V0ZXM+XG4gICAgICAgIDwvQnJvd3NlclJvdXRlcj5cbiAgICAgIDwvVG9vbHRpcFByb3ZpZGVyPlxuICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgPC9RdWVyeUNsaWVudFByb3ZpZGVyPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIl0sIm5hbWVzIjpbIlF1ZXJ5Q2xpZW50IiwiUXVlcnlDbGllbnRQcm92aWRlciIsIkJyb3dzZXJSb3V0ZXIiLCJSb3V0ZSIsIlJvdXRlcyIsIlRvYXN0ZXIiLCJTb25uZXIiLCJUb29sdGlwUHJvdmlkZXIiLCJUaGVtZVByb3ZpZGVyIiwiSW5kZXgiLCJOb3RGb3VuZCIsInF1ZXJ5Q2xpZW50IiwiQXBwIiwiY2xpZW50IiwicGF0aCIsImVsZW1lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsU0FBU0EsV0FBVyxFQUFFQyxtQkFBbUIsUUFBUSx3QkFBd0I7QUFDekUsU0FBU0MsYUFBYSxFQUFFQyxLQUFLLEVBQUVDLE1BQU0sUUFBUSxtQkFBbUI7QUFDaEUsU0FBU0MsV0FBV0MsTUFBTSxRQUFRLHlCQUF5QjtBQUMzRCxTQUFTRCxPQUFPLFFBQVEsMEJBQTBCO0FBQ2xELFNBQVNFLGVBQWUsUUFBUSwwQkFBMEI7QUFDMUQsU0FBU0MsYUFBYSxRQUFRLG1CQUFtQjtBQUNqRCxPQUFPQyxXQUFXLG9CQUFvQjtBQUN0QyxPQUFPQyxjQUFjLHVCQUF1QjtBQUU1QyxNQUFNQyxjQUFjLElBQUlYO0FBRXhCLE1BQU1ZLE1BQU0sa0JBQ1YsUUFBQ1g7UUFBb0JZLFFBQVFGO2tCQUMzQixjQUFBLFFBQUNIO3NCQUNDLGNBQUEsUUFBQ0Q7O2tDQUNDLFFBQUNGOzs7OztrQ0FDRCxRQUFDQzs7Ozs7a0NBQ0QsUUFBQ0o7a0NBQ0MsY0FBQSxRQUFDRTs7OENBQ0MsUUFBQ0Q7b0NBQU1XLE1BQUs7b0NBQUlDLHVCQUFTLFFBQUNOOzs7Ozs7Ozs7OzhDQUMxQixRQUFDTjtvQ0FBTVcsTUFBSztvQ0FBSUMsdUJBQVMsUUFBQ0w7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FUaENFO0FBaUJOLGVBQWVBLElBQUkifQ==