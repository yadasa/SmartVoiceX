import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/ui/sonner.tsx");import * as RefreshRuntime from "/@react-refresh";
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/dev-server/src/components/ui/sonner.tsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}

import { jsxDEV as _jsxDEV } from "/@id/__x00__jsx-source/jsx-dev-runtime";
var _s = $RefreshSig$();
import { useTheme } from "/node_modules/.vite/deps/next-themes.js?v=2b14efa7";
import { Toaster as Sonner, toast } from "/node_modules/.vite/deps/sonner.js?v=886a2cfc";
const Toaster = ({ ...props })=>{
    _s();
    const { theme = "system" } = useTheme();
    return /*#__PURE__*/ _jsxDEV(Sonner, {
        theme: theme,
        className: "toaster group",
        toastOptions: {
            classNames: {
                toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
                description: "group-[.toast]:text-muted-foreground",
                actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
                cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
            }
        },
        ...props
    }, void 0, false, {
        fileName: "/dev-server/src/components/ui/sonner.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
};
_s(Toaster, "EriOrahfenYKDCErPq+L6926Dw4=", false, function() {
    return [
        useTheme
    ];
});
_c = Toaster;
export { Toaster, toast };
var _c;
$RefreshReg$(_c, "Toaster");


if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}


if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/dev-server/src/components/ui/sonner.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/dev-server/src/components/ui/sonner.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvbm5lci50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlVGhlbWUgfSBmcm9tIFwibmV4dC10aGVtZXNcIjtcbmltcG9ydCB7IFRvYXN0ZXIgYXMgU29ubmVyLCB0b2FzdCB9IGZyb20gXCJzb25uZXJcIjtcblxudHlwZSBUb2FzdGVyUHJvcHMgPSBSZWFjdC5Db21wb25lbnRQcm9wczx0eXBlb2YgU29ubmVyPjtcblxuY29uc3QgVG9hc3RlciA9ICh7IC4uLnByb3BzIH06IFRvYXN0ZXJQcm9wcykgPT4ge1xuICBjb25zdCB7IHRoZW1lID0gXCJzeXN0ZW1cIiB9ID0gdXNlVGhlbWUoKTtcblxuICByZXR1cm4gKFxuICAgIDxTb25uZXJcbiAgICAgIHRoZW1lPXt0aGVtZSBhcyBUb2FzdGVyUHJvcHNbXCJ0aGVtZVwiXX1cbiAgICAgIGNsYXNzTmFtZT1cInRvYXN0ZXIgZ3JvdXBcIlxuICAgICAgdG9hc3RPcHRpb25zPXt7XG4gICAgICAgIGNsYXNzTmFtZXM6IHtcbiAgICAgICAgICB0b2FzdDpcbiAgICAgICAgICAgIFwiZ3JvdXAgdG9hc3QgZ3JvdXAtWy50b2FzdGVyXTpiZy1iYWNrZ3JvdW5kIGdyb3VwLVsudG9hc3Rlcl06dGV4dC1mb3JlZ3JvdW5kIGdyb3VwLVsudG9hc3Rlcl06Ym9yZGVyLWJvcmRlciBncm91cC1bLnRvYXN0ZXJdOnNoYWRvdy1sZ1wiLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiBcImdyb3VwLVsudG9hc3RdOnRleHQtbXV0ZWQtZm9yZWdyb3VuZFwiLFxuICAgICAgICAgIGFjdGlvbkJ1dHRvbjogXCJncm91cC1bLnRvYXN0XTpiZy1wcmltYXJ5IGdyb3VwLVsudG9hc3RdOnRleHQtcHJpbWFyeS1mb3JlZ3JvdW5kXCIsXG4gICAgICAgICAgY2FuY2VsQnV0dG9uOiBcImdyb3VwLVsudG9hc3RdOmJnLW11dGVkIGdyb3VwLVsudG9hc3RdOnRleHQtbXV0ZWQtZm9yZWdyb3VuZFwiLFxuICAgICAgICB9LFxuICAgICAgfX1cbiAgICAgIHsuLi5wcm9wc31cbiAgICAvPlxuICApO1xufTtcblxuZXhwb3J0IHsgVG9hc3RlciwgdG9hc3QgfTtcbiJdLCJuYW1lcyI6WyJ1c2VUaGVtZSIsIlRvYXN0ZXIiLCJTb25uZXIiLCJ0b2FzdCIsInByb3BzIiwidGhlbWUiLCJjbGFzc05hbWUiLCJ0b2FzdE9wdGlvbnMiLCJjbGFzc05hbWVzIiwiZGVzY3JpcHRpb24iLCJhY3Rpb25CdXR0b24iLCJjYW5jZWxCdXR0b24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLFNBQVNBLFFBQVEsUUFBUSxjQUFjO0FBQ3ZDLFNBQVNDLFdBQVdDLE1BQU0sRUFBRUMsS0FBSyxRQUFRLFNBQVM7QUFJbEQsTUFBTUYsVUFBVSxDQUFDLEVBQUUsR0FBR0csT0FBcUI7O0lBQ3pDLE1BQU0sRUFBRUMsUUFBUSxRQUFRLEVBQUUsR0FBR0w7SUFFN0IscUJBQ0UsUUFBQ0U7UUFDQ0csT0FBT0E7UUFDUEMsV0FBVTtRQUNWQyxjQUFjO1lBQ1pDLFlBQVk7Z0JBQ1ZMLE9BQ0U7Z0JBQ0ZNLGFBQWE7Z0JBQ2JDLGNBQWM7Z0JBQ2RDLGNBQWM7WUFDaEI7UUFDRjtRQUNDLEdBQUdQLEtBQUs7Ozs7OztBQUdmO0dBbkJNSDs7UUFDeUJEOzs7S0FEekJDO0FBcUJOLFNBQVNBLE9BQU8sRUFBRUUsS0FBSyxHQUFHIn0=