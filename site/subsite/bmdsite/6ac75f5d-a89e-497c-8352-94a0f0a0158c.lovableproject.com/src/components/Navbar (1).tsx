import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/Navbar.tsx");import * as RefreshRuntime from "/@react-refresh";
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/dev-server/src/components/Navbar.tsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}

import { jsxDEV as _jsxDEV } from "/@id/__x00__jsx-source/jsx-dev-runtime";
var _s = $RefreshSig$();
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=d355e541"; const useState = __vite__cjsImport3_react["useState"];
import { Menu, X, Phone, Sun, Moon } from "/node_modules/.vite/deps/lucide-react.js?v=eb25920b";
import { Button } from "/src/components/ui/button.tsx";
import { useTheme } from "/src/hooks/useTheme.tsx?t=1776269862329";
const navLinks = [
    {
        label: "About",
        href: "#about"
    },
    {
        label: "Services",
        href: "#services"
    },
    {
        label: "Team",
        href: "#team"
    },
    {
        label: "Testimonials",
        href: "#testimonials"
    },
    {
        label: "Contact",
        href: "#contact"
    }
];
export default function Navbar() {
    _s();
    const [open, setOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();
    return /*#__PURE__*/ _jsxDEV("nav", {
        className: "fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50",
        children: [
            /*#__PURE__*/ _jsxDEV("div", {
                className: "container mx-auto flex items-center justify-between h-20 px-6",
                children: [
                    /*#__PURE__*/ _jsxDEV("a", {
                        href: "#",
                        className: "flex flex-col",
                        children: [
                            /*#__PURE__*/ _jsxDEV("span", {
                                className: "font-heading text-2xl font-bold tracking-tight text-foreground",
                                children: "Bellaire"
                            }, void 0, false, {
                                fileName: "/dev-server/src/components/Navbar.tsx",
                                lineNumber: 22,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ _jsxDEV("span", {
                                className: "text-[10px] font-body font-medium tracking-[0.3em] uppercase text-muted-foreground -mt-1",
                                children: "Modern Dental"
                            }, void 0, false, {
                                fileName: "/dev-server/src/components/Navbar.tsx",
                                lineNumber: 25,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "/dev-server/src/components/Navbar.tsx",
                        lineNumber: 21,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ _jsxDEV("div", {
                        className: "hidden lg:flex items-center gap-8",
                        children: navLinks.map((link)=>/*#__PURE__*/ _jsxDEV("a", {
                                href: link.href,
                                className: "text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full",
                                children: link.label
                            }, link.href, false, {
                                fileName: "/dev-server/src/components/Navbar.tsx",
                                lineNumber: 32,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "/dev-server/src/components/Navbar.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ _jsxDEV("div", {
                        className: "hidden lg:flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ _jsxDEV("button", {
                                onClick: toggleTheme,
                                className: "p-2 rounded-full hover:bg-accent transition-colors text-muted-foreground hover:text-foreground",
                                "aria-label": "Toggle theme",
                                children: theme === "light" ? /*#__PURE__*/ _jsxDEV(Moon, {
                                    className: "h-5 w-5"
                                }, void 0, false, {
                                    fileName: "/dev-server/src/components/Navbar.tsx",
                                    lineNumber: 48,
                                    columnNumber: 34
                                }, this) : /*#__PURE__*/ _jsxDEV(Sun, {
                                    className: "h-5 w-5"
                                }, void 0, false, {
                                    fileName: "/dev-server/src/components/Navbar.tsx",
                                    lineNumber: 48,
                                    columnNumber: 65
                                }, this)
                            }, void 0, false, {
                                fileName: "/dev-server/src/components/Navbar.tsx",
                                lineNumber: 43,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ _jsxDEV("a", {
                                href: "tel:2818791786",
                                className: "flex items-center gap-2 text-sm font-medium text-foreground",
                                children: [
                                    /*#__PURE__*/ _jsxDEV(Phone, {
                                        className: "h-4 w-4 text-primary"
                                    }, void 0, false, {
                                        fileName: "/dev-server/src/components/Navbar.tsx",
                                        lineNumber: 54,
                                        columnNumber: 13
                                    }, this),
                                    "(281) 879-1786"
                                ]
                            }, void 0, true, {
                                fileName: "/dev-server/src/components/Navbar.tsx",
                                lineNumber: 50,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ _jsxDEV(Button, {
                                className: "bg-gradient-gold text-primary-foreground hover:opacity-90 transition-opacity rounded-full px-6",
                                children: "Book Consultation"
                            }, void 0, false, {
                                fileName: "/dev-server/src/components/Navbar.tsx",
                                lineNumber: 57,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "/dev-server/src/components/Navbar.tsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ _jsxDEV("div", {
                        className: "flex lg:hidden items-center gap-2",
                        children: [
                            /*#__PURE__*/ _jsxDEV("button", {
                                onClick: toggleTheme,
                                className: "p-2 rounded-full hover:bg-accent transition-colors text-muted-foreground",
                                "aria-label": "Toggle theme",
                                children: theme === "light" ? /*#__PURE__*/ _jsxDEV(Moon, {
                                    className: "h-5 w-5"
                                }, void 0, false, {
                                    fileName: "/dev-server/src/components/Navbar.tsx",
                                    lineNumber: 68,
                                    columnNumber: 34
                                }, this) : /*#__PURE__*/ _jsxDEV(Sun, {
                                    className: "h-5 w-5"
                                }, void 0, false, {
                                    fileName: "/dev-server/src/components/Navbar.tsx",
                                    lineNumber: 68,
                                    columnNumber: 65
                                }, this)
                            }, void 0, false, {
                                fileName: "/dev-server/src/components/Navbar.tsx",
                                lineNumber: 63,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ _jsxDEV("button", {
                                className: "text-foreground",
                                onClick: ()=>setOpen(!open),
                                children: open ? /*#__PURE__*/ _jsxDEV(X, {
                                    className: "h-6 w-6"
                                }, void 0, false, {
                                    fileName: "/dev-server/src/components/Navbar.tsx",
                                    lineNumber: 74,
                                    columnNumber: 21
                                }, this) : /*#__PURE__*/ _jsxDEV(Menu, {
                                    className: "h-6 w-6"
                                }, void 0, false, {
                                    fileName: "/dev-server/src/components/Navbar.tsx",
                                    lineNumber: 74,
                                    columnNumber: 49
                                }, this)
                            }, void 0, false, {
                                fileName: "/dev-server/src/components/Navbar.tsx",
                                lineNumber: 70,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "/dev-server/src/components/Navbar.tsx",
                        lineNumber: 62,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/dev-server/src/components/Navbar.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            open && /*#__PURE__*/ _jsxDEV("div", {
                className: "lg:hidden bg-background border-t border-border px-6 py-4 space-y-4 animate-fade-in",
                children: [
                    navLinks.map((link)=>/*#__PURE__*/ _jsxDEV("a", {
                            href: link.href,
                            className: "block text-sm font-medium text-muted-foreground hover:text-foreground",
                            onClick: ()=>setOpen(false),
                            children: link.label
                        }, link.href, false, {
                            fileName: "/dev-server/src/components/Navbar.tsx",
                            lineNumber: 82,
                            columnNumber: 13
                        }, this)),
                    /*#__PURE__*/ _jsxDEV(Button, {
                        className: "w-full bg-gradient-gold text-primary-foreground rounded-full",
                        children: "Book Consultation"
                    }, void 0, false, {
                        fileName: "/dev-server/src/components/Navbar.tsx",
                        lineNumber: 91,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/dev-server/src/components/Navbar.tsx",
                lineNumber: 80,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "/dev-server/src/components/Navbar.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
_s(Navbar, "sEW8HjXY3CCzYe2p6JNogFcPff8=", false, function() {
    return [
        useTheme
    ];
});
_c = Navbar;
var _c;
$RefreshReg$(_c, "Navbar");


if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}


if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/dev-server/src/components/Navbar.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/dev-server/src/components/Navbar.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk5hdmJhci50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IE1lbnUsIFgsIFBob25lLCBTdW4sIE1vb24gfSBmcm9tIFwibHVjaWRlLXJlYWN0XCI7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2J1dHRvblwiO1xuaW1wb3J0IHsgdXNlVGhlbWUgfSBmcm9tIFwiQC9ob29rcy91c2VUaGVtZVwiO1xuXG5jb25zdCBuYXZMaW5rcyA9IFtcbiAgeyBsYWJlbDogXCJBYm91dFwiLCBocmVmOiBcIiNhYm91dFwiIH0sXG4gIHsgbGFiZWw6IFwiU2VydmljZXNcIiwgaHJlZjogXCIjc2VydmljZXNcIiB9LFxuICB7IGxhYmVsOiBcIlRlYW1cIiwgaHJlZjogXCIjdGVhbVwiIH0sXG4gIHsgbGFiZWw6IFwiVGVzdGltb25pYWxzXCIsIGhyZWY6IFwiI3Rlc3RpbW9uaWFsc1wiIH0sXG4gIHsgbGFiZWw6IFwiQ29udGFjdFwiLCBocmVmOiBcIiNjb250YWN0XCIgfSxcbl07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdmJhcigpIHtcbiAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCB7IHRoZW1lLCB0b2dnbGVUaGVtZSB9ID0gdXNlVGhlbWUoKTtcblxuICByZXR1cm4gKFxuICAgIDxuYXYgY2xhc3NOYW1lPVwiZml4ZWQgdG9wLTAgbGVmdC0wIHJpZ2h0LTAgei01MCBiZy1iYWNrZ3JvdW5kLzgwIGJhY2tkcm9wLWJsdXItbGcgYm9yZGVyLWIgYm9yZGVyLWJvcmRlci81MFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gaC0yMCBweC02XCI+XG4gICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbFwiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtaGVhZGluZyB0ZXh0LTJ4bCBmb250LWJvbGQgdHJhY2tpbmctdGlnaHQgdGV4dC1mb3JlZ3JvdW5kXCI+XG4gICAgICAgICAgICBCZWxsYWlyZVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LVsxMHB4XSBmb250LWJvZHkgZm9udC1tZWRpdW0gdHJhY2tpbmctWzAuM2VtXSB1cHBlcmNhc2UgdGV4dC1tdXRlZC1mb3JlZ3JvdW5kIC1tdC0xXCI+XG4gICAgICAgICAgICBNb2Rlcm4gRGVudGFsXG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2E+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaWRkZW4gbGc6ZmxleCBpdGVtcy1jZW50ZXIgZ2FwLThcIj5cbiAgICAgICAgICB7bmF2TGlua3MubWFwKChsaW5rKSA9PiAoXG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICBrZXk9e2xpbmsuaHJlZn1cbiAgICAgICAgICAgICAgaHJlZj17bGluay5ocmVmfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtbXV0ZWQtZm9yZWdyb3VuZCBob3Zlcjp0ZXh0LWZvcmVncm91bmQgdHJhbnNpdGlvbi1jb2xvcnMgcmVsYXRpdmUgYWZ0ZXI6YWJzb2x1dGUgYWZ0ZXI6Ym90dG9tLTAgYWZ0ZXI6bGVmdC0wIGFmdGVyOnctMCBhZnRlcjpoLVsycHhdIGFmdGVyOmJnLXByaW1hcnkgYWZ0ZXI6dHJhbnNpdGlvbi1hbGwgYWZ0ZXI6ZHVyYXRpb24tMzAwIGhvdmVyOmFmdGVyOnctZnVsbFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtsaW5rLmxhYmVsfVxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhpZGRlbiBsZzpmbGV4IGl0ZW1zLWNlbnRlciBnYXAtM1wiPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZVRoZW1lfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicC0yIHJvdW5kZWQtZnVsbCBob3ZlcjpiZy1hY2NlbnQgdHJhbnNpdGlvbi1jb2xvcnMgdGV4dC1tdXRlZC1mb3JlZ3JvdW5kIGhvdmVyOnRleHQtZm9yZWdyb3VuZFwiXG4gICAgICAgICAgICBhcmlhLWxhYmVsPVwiVG9nZ2xlIHRoZW1lXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7dGhlbWUgPT09IFwibGlnaHRcIiA/IDxNb29uIGNsYXNzTmFtZT1cImgtNSB3LTVcIiAvPiA6IDxTdW4gY2xhc3NOYW1lPVwiaC01IHctNVwiIC8+fVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBocmVmPVwidGVsOjI4MTg3OTE3ODZcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWZvcmVncm91bmRcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxQaG9uZSBjbGFzc05hbWU9XCJoLTQgdy00IHRleHQtcHJpbWFyeVwiIC8+XG4gICAgICAgICAgICAoMjgxKSA4NzktMTc4NlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cImJnLWdyYWRpZW50LWdvbGQgdGV4dC1wcmltYXJ5LWZvcmVncm91bmQgaG92ZXI6b3BhY2l0eS05MCB0cmFuc2l0aW9uLW9wYWNpdHkgcm91bmRlZC1mdWxsIHB4LTZcIj5cbiAgICAgICAgICAgIEJvb2sgQ29uc3VsdGF0aW9uXG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBsZzpoaWRkZW4gaXRlbXMtY2VudGVyIGdhcC0yXCI+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17dG9nZ2xlVGhlbWV9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJwLTIgcm91bmRlZC1mdWxsIGhvdmVyOmJnLWFjY2VudCB0cmFuc2l0aW9uLWNvbG9ycyB0ZXh0LW11dGVkLWZvcmVncm91bmRcIlxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cIlRvZ2dsZSB0aGVtZVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAge3RoZW1lID09PSBcImxpZ2h0XCIgPyA8TW9vbiBjbGFzc05hbWU9XCJoLTUgdy01XCIgLz4gOiA8U3VuIGNsYXNzTmFtZT1cImgtNSB3LTVcIiAvPn1cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWZvcmVncm91bmRcIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0T3Blbighb3Blbil9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge29wZW4gPyA8WCBjbGFzc05hbWU9XCJoLTYgdy02XCIgLz4gOiA8TWVudSBjbGFzc05hbWU9XCJoLTYgdy02XCIgLz59XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIHtvcGVuICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZzpoaWRkZW4gYmctYmFja2dyb3VuZCBib3JkZXItdCBib3JkZXItYm9yZGVyIHB4LTYgcHktNCBzcGFjZS15LTQgYW5pbWF0ZS1mYWRlLWluXCI+XG4gICAgICAgICAge25hdkxpbmtzLm1hcCgobGluaykgPT4gKFxuICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAga2V5PXtsaW5rLmhyZWZ9XG4gICAgICAgICAgICAgIGhyZWY9e2xpbmsuaHJlZn1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LW11dGVkLWZvcmVncm91bmQgaG92ZXI6dGV4dC1mb3JlZ3JvdW5kXCJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0T3BlbihmYWxzZSl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtsaW5rLmxhYmVsfVxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICkpfVxuICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwidy1mdWxsIGJnLWdyYWRpZW50LWdvbGQgdGV4dC1wcmltYXJ5LWZvcmVncm91bmQgcm91bmRlZC1mdWxsXCI+XG4gICAgICAgICAgICBCb29rIENvbnN1bHRhdGlvblxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC9uYXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJNZW51IiwiWCIsIlBob25lIiwiU3VuIiwiTW9vbiIsIkJ1dHRvbiIsInVzZVRoZW1lIiwibmF2TGlua3MiLCJsYWJlbCIsImhyZWYiLCJOYXZiYXIiLCJvcGVuIiwic2V0T3BlbiIsInRoZW1lIiwidG9nZ2xlVGhlbWUiLCJuYXYiLCJjbGFzc05hbWUiLCJkaXYiLCJhIiwic3BhbiIsIm1hcCIsImxpbmsiLCJidXR0b24iLCJvbkNsaWNrIiwiYXJpYS1sYWJlbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsU0FBU0EsUUFBUSxRQUFRLFFBQVE7QUFDakMsU0FBU0MsSUFBSSxFQUFFQyxDQUFDLEVBQUVDLEtBQUssRUFBRUMsR0FBRyxFQUFFQyxJQUFJLFFBQVEsZUFBZTtBQUN6RCxTQUFTQyxNQUFNLFFBQVEseUJBQXlCO0FBQ2hELFNBQVNDLFFBQVEsUUFBUSxtQkFBbUI7QUFFNUMsTUFBTUMsV0FBVztJQUNmO1FBQUVDLE9BQU87UUFBU0MsTUFBTTtJQUFTO0lBQ2pDO1FBQUVELE9BQU87UUFBWUMsTUFBTTtJQUFZO0lBQ3ZDO1FBQUVELE9BQU87UUFBUUMsTUFBTTtJQUFRO0lBQy9CO1FBQUVELE9BQU87UUFBZ0JDLE1BQU07SUFBZ0I7SUFDL0M7UUFBRUQsT0FBTztRQUFXQyxNQUFNO0lBQVc7Q0FDdEM7QUFFRCxlQUFlLFNBQVNDOztJQUN0QixNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR2IsU0FBUztJQUNqQyxNQUFNLEVBQUVjLEtBQUssRUFBRUMsV0FBVyxFQUFFLEdBQUdSO0lBRS9CLHFCQUNFLFFBQUNTO1FBQUlDLFdBQVU7OzBCQUNiLFFBQUNDO2dCQUFJRCxXQUFVOztrQ0FDYixRQUFDRTt3QkFBRVQsTUFBSzt3QkFBSU8sV0FBVTs7MENBQ3BCLFFBQUNHO2dDQUFLSCxXQUFVOzBDQUFpRTs7Ozs7OzBDQUdqRixRQUFDRztnQ0FBS0gsV0FBVTswQ0FBMkY7Ozs7Ozs7Ozs7OztrQ0FLN0csUUFBQ0M7d0JBQUlELFdBQVU7a0NBQ1pULFNBQVNhLEdBQUcsQ0FBQyxDQUFDQyxxQkFDYixRQUFDSDtnQ0FFQ1QsTUFBTVksS0FBS1osSUFBSTtnQ0FDZk8sV0FBVTswQ0FFVEssS0FBS2IsS0FBSzsrQkFKTmEsS0FBS1osSUFBSTs7Ozs7Ozs7OztrQ0FTcEIsUUFBQ1E7d0JBQUlELFdBQVU7OzBDQUNiLFFBQUNNO2dDQUNDQyxTQUFTVDtnQ0FDVEUsV0FBVTtnQ0FDVlEsY0FBVzswQ0FFVlgsVUFBVSx3QkFBVSxRQUFDVDtvQ0FBS1ksV0FBVTs7Ozs7eURBQWUsUUFBQ2I7b0NBQUlhLFdBQVU7Ozs7Ozs7Ozs7OzBDQUVyRSxRQUFDRTtnQ0FDQ1QsTUFBSztnQ0FDTE8sV0FBVTs7a0RBRVYsUUFBQ2Q7d0NBQU1jLFdBQVU7Ozs7OztvQ0FBeUI7Ozs7Ozs7MENBRzVDLFFBQUNYO2dDQUFPVyxXQUFVOzBDQUFpRzs7Ozs7Ozs7Ozs7O2tDQUtySCxRQUFDQzt3QkFBSUQsV0FBVTs7MENBQ2IsUUFBQ007Z0NBQ0NDLFNBQVNUO2dDQUNURSxXQUFVO2dDQUNWUSxjQUFXOzBDQUVWWCxVQUFVLHdCQUFVLFFBQUNUO29DQUFLWSxXQUFVOzs7Ozt5REFBZSxRQUFDYjtvQ0FBSWEsV0FBVTs7Ozs7Ozs7Ozs7MENBRXJFLFFBQUNNO2dDQUNDTixXQUFVO2dDQUNWTyxTQUFTLElBQU1YLFFBQVEsQ0FBQ0Q7MENBRXZCQSxxQkFBTyxRQUFDVjtvQ0FBRWUsV0FBVTs7Ozs7eURBQWUsUUFBQ2hCO29DQUFLZ0IsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFLekRMLHNCQUNDLFFBQUNNO2dCQUFJRCxXQUFVOztvQkFDWlQsU0FBU2EsR0FBRyxDQUFDLENBQUNDLHFCQUNiLFFBQUNIOzRCQUVDVCxNQUFNWSxLQUFLWixJQUFJOzRCQUNmTyxXQUFVOzRCQUNWTyxTQUFTLElBQU1YLFFBQVE7c0NBRXRCUyxLQUFLYixLQUFLOzJCQUxOYSxLQUFLWixJQUFJOzs7OztrQ0FRbEIsUUFBQ0o7d0JBQU9XLFdBQVU7a0NBQStEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPM0Y7R0FwRndCTjs7UUFFU0o7OztLQUZUSSJ9