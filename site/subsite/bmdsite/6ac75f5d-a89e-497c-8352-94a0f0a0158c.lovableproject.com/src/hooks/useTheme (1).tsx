import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/hooks/useTheme.tsx");import * as RefreshRuntime from "/@react-refresh";
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/dev-server/src/hooks/useTheme.tsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}

import { jsxDEV as _jsxDEV } from "/@id/__x00__jsx-source/jsx-dev-runtime";
var _s = $RefreshSig$(), _s1 = $RefreshSig$();
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=d355e541"; const useState = __vite__cjsImport3_react["useState"]; const useEffect = __vite__cjsImport3_react["useEffect"]; const createContext = __vite__cjsImport3_react["createContext"]; const useContext = __vite__cjsImport3_react["useContext"];
const ThemeContext = /*#__PURE__*/ createContext(undefined);
export function ThemeProvider({ children }) {
    _s();
    const [theme, setTheme] = useState(()=>{
        if (typeof window !== "undefined") {
            const stored = localStorage.getItem("theme");
            if (stored) return stored;
            return "dark";
        }
        return "light";
    });
    useEffect(()=>{
        const root = document.documentElement;
        root.classList.remove("light", "dark");
        root.classList.add(theme);
        localStorage.setItem("theme", theme);
    }, [
        theme
    ]);
    const toggleTheme = ()=>setTheme((t)=>t === "light" ? "dark" : "light");
    return /*#__PURE__*/ _jsxDEV(ThemeContext.Provider, {
        value: {
            theme,
            toggleTheme
        },
        children: children
    }, void 0, false, {
        fileName: "/dev-server/src/hooks/useTheme.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
_s(ThemeProvider, "DuasoZNdyme6jDSZ8fClMBVYmks=");
_c = ThemeProvider;
export function useTheme() {
    _s1();
    const ctx = useContext(ThemeContext);
    if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
    return ctx;
}
_s1(useTheme, "/dMy7t63NXD4eYACoT93CePwGrg=");
var _c;
$RefreshReg$(_c, "ThemeProvider");


if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}


if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/dev-server/src/hooks/useTheme.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/dev-server/src/hooks/useTheme.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZVRoZW1lLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0LCBSZWFjdE5vZGUgfSBmcm9tIFwicmVhY3RcIjtcblxudHlwZSBUaGVtZSA9IFwibGlnaHRcIiB8IFwiZGFya1wiO1xuXG5pbnRlcmZhY2UgVGhlbWVDb250ZXh0VHlwZSB7XG4gIHRoZW1lOiBUaGVtZTtcbiAgdG9nZ2xlVGhlbWU6ICgpID0+IHZvaWQ7XG59XG5cbmNvbnN0IFRoZW1lQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8VGhlbWVDb250ZXh0VHlwZSB8IHVuZGVmaW5lZD4odW5kZWZpbmVkKTtcblxuZXhwb3J0IGZ1bmN0aW9uIFRoZW1lUHJvdmlkZXIoeyBjaGlsZHJlbiB9OiB7IGNoaWxkcmVuOiBSZWFjdE5vZGUgfSkge1xuICBjb25zdCBbdGhlbWUsIHNldFRoZW1lXSA9IHVzZVN0YXRlPFRoZW1lPigoKSA9PiB7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgIGNvbnN0IHN0b3JlZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGhlbWVcIikgYXMgVGhlbWU7XG4gICAgICBpZiAoc3RvcmVkKSByZXR1cm4gc3RvcmVkO1xuICAgICAgcmV0dXJuIFwiZGFya1wiO1xuICAgIH1cbiAgICByZXR1cm4gXCJsaWdodFwiO1xuICB9KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHJvb3QgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gICAgcm9vdC5jbGFzc0xpc3QucmVtb3ZlKFwibGlnaHRcIiwgXCJkYXJrXCIpO1xuICAgIHJvb3QuY2xhc3NMaXN0LmFkZCh0aGVtZSk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0aGVtZVwiLCB0aGVtZSk7XG4gIH0sIFt0aGVtZV0pO1xuXG4gIGNvbnN0IHRvZ2dsZVRoZW1lID0gKCkgPT4gc2V0VGhlbWUoKHQpID0+ICh0ID09PSBcImxpZ2h0XCIgPyBcImRhcmtcIiA6IFwibGlnaHRcIikpO1xuXG4gIHJldHVybiAoXG4gICAgPFRoZW1lQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyB0aGVtZSwgdG9nZ2xlVGhlbWUgfX0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9UaGVtZUNvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VUaGVtZSgpIHtcbiAgY29uc3QgY3R4ID0gdXNlQ29udGV4dChUaGVtZUNvbnRleHQpO1xuICBpZiAoIWN0eCkgdGhyb3cgbmV3IEVycm9yKFwidXNlVGhlbWUgbXVzdCBiZSB1c2VkIHdpdGhpbiBUaGVtZVByb3ZpZGVyXCIpO1xuICByZXR1cm4gY3R4O1xufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJUaGVtZUNvbnRleHQiLCJ1bmRlZmluZWQiLCJUaGVtZVByb3ZpZGVyIiwiY2hpbGRyZW4iLCJ0aGVtZSIsInNldFRoZW1lIiwid2luZG93Iiwic3RvcmVkIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInJvb3QiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZCIsInNldEl0ZW0iLCJ0b2dnbGVUaGVtZSIsInQiLCJQcm92aWRlciIsInZhbHVlIiwidXNlVGhlbWUiLCJjdHgiLCJFcnJvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsU0FBU0EsUUFBUSxFQUFFQyxTQUFTLEVBQUVDLGFBQWEsRUFBRUMsVUFBVSxRQUFtQixRQUFRO0FBU2xGLE1BQU1DLDZCQUFlRixjQUE0Q0c7QUFFakUsT0FBTyxTQUFTQyxjQUFjLEVBQUVDLFFBQVEsRUFBMkI7O0lBQ2pFLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHVCxTQUFnQjtRQUN4QyxJQUFJLE9BQU9VLFdBQVcsYUFBYTtZQUNqQyxNQUFNQyxTQUFTQyxhQUFhQyxPQUFPLENBQUM7WUFDcEMsSUFBSUYsUUFBUSxPQUFPQTtZQUNuQixPQUFPO1FBQ1Q7UUFDQSxPQUFPO0lBQ1Q7SUFFQVYsVUFBVTtRQUNSLE1BQU1hLE9BQU9DLFNBQVNDLGVBQWU7UUFDckNGLEtBQUtHLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLFNBQVM7UUFDL0JKLEtBQUtHLFNBQVMsQ0FBQ0UsR0FBRyxDQUFDWDtRQUNuQkksYUFBYVEsT0FBTyxDQUFDLFNBQVNaO0lBQ2hDLEdBQUc7UUFBQ0E7S0FBTTtJQUVWLE1BQU1hLGNBQWMsSUFBTVosU0FBUyxDQUFDYSxJQUFPQSxNQUFNLFVBQVUsU0FBUztJQUVwRSxxQkFDRSxRQUFDbEIsYUFBYW1CLFFBQVE7UUFBQ0MsT0FBTztZQUFFaEI7WUFBT2E7UUFBWTtrQkFDaERkOzs7Ozs7QUFHUDtHQXhCZ0JEO0tBQUFBO0FBMEJoQixPQUFPLFNBQVNtQjs7SUFDZCxNQUFNQyxNQUFNdkIsV0FBV0M7SUFDdkIsSUFBSSxDQUFDc0IsS0FBSyxNQUFNLElBQUlDLE1BQU07SUFDMUIsT0FBT0Q7QUFDVDtJQUpnQkQifQ==