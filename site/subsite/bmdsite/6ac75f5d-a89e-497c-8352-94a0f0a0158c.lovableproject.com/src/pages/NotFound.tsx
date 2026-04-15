import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/NotFound.tsx");import * as RefreshRuntime from "/@react-refresh";
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/dev-server/src/pages/NotFound.tsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}

import { jsxDEV as _jsxDEV } from "/@id/__x00__jsx-source/jsx-dev-runtime";
var _s = $RefreshSig$();
import { useLocation } from "/node_modules/.vite/deps/react-router-dom.js?v=da1c5f2d";
import __vite__cjsImport4_react from "/node_modules/.vite/deps/react.js?v=d355e541"; const useEffect = __vite__cjsImport4_react["useEffect"];
const NotFound = ()=>{
    _s();
    const location = useLocation();
    useEffect(()=>{
        console.error("404 Error: User attempted to access non-existent route:", location.pathname);
    }, [
        location.pathname
    ]);
    return /*#__PURE__*/ _jsxDEV("div", {
        className: "flex min-h-screen items-center justify-center bg-muted",
        children: /*#__PURE__*/ _jsxDEV("div", {
            className: "text-center",
            children: [
                /*#__PURE__*/ _jsxDEV("h1", {
                    className: "mb-4 text-4xl font-bold",
                    children: "404"
                }, void 0, false, {
                    fileName: "/dev-server/src/pages/NotFound.tsx",
                    lineNumber: 14,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ _jsxDEV("p", {
                    className: "mb-4 text-xl text-muted-foreground",
                    children: "Oops! Page not found"
                }, void 0, false, {
                    fileName: "/dev-server/src/pages/NotFound.tsx",
                    lineNumber: 15,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ _jsxDEV("a", {
                    href: "/",
                    className: "text-primary underline hover:text-primary/90",
                    children: "Return to Home"
                }, void 0, false, {
                    fileName: "/dev-server/src/pages/NotFound.tsx",
                    lineNumber: 16,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "/dev-server/src/pages/NotFound.tsx",
            lineNumber: 13,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "/dev-server/src/pages/NotFound.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
};
_s(NotFound, "BXcZrDMM76mmm4zA8/QV5UbMNXE=", false, function() {
    return [
        useLocation
    ];
});
_c = NotFound;
export default NotFound;
var _c;
$RefreshReg$(_c, "NotFound");


if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}


if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/dev-server/src/pages/NotFound.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/dev-server/src/pages/NotFound.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk5vdEZvdW5kLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VMb2NhdGlvbiB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgTm90Rm91bmQgPSAoKSA9PiB7XG4gIGNvbnN0IGxvY2F0aW9uID0gdXNlTG9jYXRpb24oKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnNvbGUuZXJyb3IoXCI0MDQgRXJyb3I6IFVzZXIgYXR0ZW1wdGVkIHRvIGFjY2VzcyBub24tZXhpc3RlbnQgcm91dGU6XCIsIGxvY2F0aW9uLnBhdGhuYW1lKTtcbiAgfSwgW2xvY2F0aW9uLnBhdGhuYW1lXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggbWluLWgtc2NyZWVuIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBiZy1tdXRlZFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwibWItNCB0ZXh0LTR4bCBmb250LWJvbGRcIj40MDQ8L2gxPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJtYi00IHRleHQteGwgdGV4dC1tdXRlZC1mb3JlZ3JvdW5kXCI+T29wcyEgUGFnZSBub3QgZm91bmQ8L3A+XG4gICAgICAgIDxhIGhyZWY9XCIvXCIgY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5IHVuZGVybGluZSBob3Zlcjp0ZXh0LXByaW1hcnkvOTBcIj5cbiAgICAgICAgICBSZXR1cm4gdG8gSG9tZVxuICAgICAgICA8L2E+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5vdEZvdW5kO1xuIl0sIm5hbWVzIjpbInVzZUxvY2F0aW9uIiwidXNlRWZmZWN0IiwiTm90Rm91bmQiLCJsb2NhdGlvbiIsImNvbnNvbGUiLCJlcnJvciIsInBhdGhuYW1lIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJwIiwiYSIsImhyZWYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLFNBQVNBLFdBQVcsUUFBUSxtQkFBbUI7QUFDL0MsU0FBU0MsU0FBUyxRQUFRLFFBQVE7QUFFbEMsTUFBTUMsV0FBVzs7SUFDZixNQUFNQyxXQUFXSDtJQUVqQkMsVUFBVTtRQUNSRyxRQUFRQyxLQUFLLENBQUMsMkRBQTJERixTQUFTRyxRQUFRO0lBQzVGLEdBQUc7UUFBQ0gsU0FBU0csUUFBUTtLQUFDO0lBRXRCLHFCQUNFLFFBQUNDO1FBQUlDLFdBQVU7a0JBQ2IsY0FBQSxRQUFDRDtZQUFJQyxXQUFVOzs4QkFDYixRQUFDQztvQkFBR0QsV0FBVTs4QkFBMEI7Ozs7Ozs4QkFDeEMsUUFBQ0U7b0JBQUVGLFdBQVU7OEJBQXFDOzs7Ozs7OEJBQ2xELFFBQUNHO29CQUFFQyxNQUFLO29CQUFJSixXQUFVOzhCQUErQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNN0U7R0FsQk1OOztRQUNhRjs7O0tBRGJFO0FBb0JOLGVBQWVBLFNBQVMifQ==