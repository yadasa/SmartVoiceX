import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/TrustBadges.tsx");import * as RefreshRuntime from "/@react-refresh";
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/dev-server/src/components/TrustBadges.tsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}

import { jsxDEV as _jsxDEV } from "/@id/__x00__jsx-source/jsx-dev-runtime";
var _s = $RefreshSig$();
import { Shield, Award, Star, BadgeCheck } from "/node_modules/.vite/deps/lucide-react.js?v=eb25920b";
import { useScrollReveal } from "/src/hooks/useScrollReveal.tsx";
const badges = [
    {
        icon: Award,
        label: "Best of Houston 2024"
    },
    {
        icon: Star,
        label: "4.8★ on Google"
    },
    {
        icon: Shield,
        label: "ADA Certified"
    },
    {
        icon: BadgeCheck,
        label: "BBB Accredited"
    }
];
export default function TrustBadges() {
    _s();
    const { ref, isVisible } = useScrollReveal();
    return /*#__PURE__*/ _jsxDEV("section", {
        className: "py-12 border-y border-border/50",
        children: /*#__PURE__*/ _jsxDEV("div", {
            className: "container mx-auto px-6",
            ref: ref,
            children: /*#__PURE__*/ _jsxDEV("div", {
                className: "flex flex-wrap items-center justify-center gap-8 lg:gap-16",
                children: badges.map((badge, i)=>/*#__PURE__*/ _jsxDEV("div", {
                        className: `flex items-center gap-3 transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`,
                        style: {
                            transitionDelay: isVisible ? `${i * 100}ms` : "0ms"
                        },
                        children: [
                            /*#__PURE__*/ _jsxDEV("div", {
                                className: "w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center",
                                children: /*#__PURE__*/ _jsxDEV(badge.icon, {
                                    className: "h-5 w-5 text-primary"
                                }, void 0, false, {
                                    fileName: "/dev-server/src/components/TrustBadges.tsx",
                                    lineNumber: 25,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "/dev-server/src/components/TrustBadges.tsx",
                                lineNumber: 24,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ _jsxDEV("span", {
                                className: "text-sm font-medium text-muted-foreground",
                                children: badge.label
                            }, void 0, false, {
                                fileName: "/dev-server/src/components/TrustBadges.tsx",
                                lineNumber: 27,
                                columnNumber: 15
                            }, this)
                        ]
                    }, badge.label, true, {
                        fileName: "/dev-server/src/components/TrustBadges.tsx",
                        lineNumber: 19,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "/dev-server/src/components/TrustBadges.tsx",
                lineNumber: 17,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "/dev-server/src/components/TrustBadges.tsx",
            lineNumber: 16,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "/dev-server/src/components/TrustBadges.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
_s(TrustBadges, "aCOyLg7yh4JHGJYS1/e1njthfZ4=", false, function() {
    return [
        useScrollReveal
    ];
});
_c = TrustBadges;
var _c;
$RefreshReg$(_c, "TrustBadges");


if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}


if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/dev-server/src/components/TrustBadges.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/dev-server/src/components/TrustBadges.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlRydXN0QmFkZ2VzLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTaGllbGQsIEF3YXJkLCBTdGFyLCBCYWRnZUNoZWNrIH0gZnJvbSBcImx1Y2lkZS1yZWFjdFwiO1xuaW1wb3J0IHsgdXNlU2Nyb2xsUmV2ZWFsIH0gZnJvbSBcIkAvaG9va3MvdXNlU2Nyb2xsUmV2ZWFsXCI7XG5cbmNvbnN0IGJhZGdlcyA9IFtcbiAgeyBpY29uOiBBd2FyZCwgbGFiZWw6IFwiQmVzdCBvZiBIb3VzdG9uIDIwMjRcIiB9LFxuICB7IGljb246IFN0YXIsIGxhYmVsOiBcIjQuOOKYhSBvbiBHb29nbGVcIiB9LFxuICB7IGljb246IFNoaWVsZCwgbGFiZWw6IFwiQURBIENlcnRpZmllZFwiIH0sXG4gIHsgaWNvbjogQmFkZ2VDaGVjaywgbGFiZWw6IFwiQkJCIEFjY3JlZGl0ZWRcIiB9LFxuXTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVHJ1c3RCYWRnZXMoKSB7XG4gIGNvbnN0IHsgcmVmLCBpc1Zpc2libGUgfSA9IHVzZVNjcm9sbFJldmVhbCgpO1xuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicHktMTIgYm9yZGVyLXkgYm9yZGVyLWJvcmRlci81MFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBweC02XCIgcmVmPXtyZWZ9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBnYXAtOCBsZzpnYXAtMTZcIj5cbiAgICAgICAgICB7YmFkZ2VzLm1hcCgoYmFkZ2UsIGkpID0+IChcbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAga2V5PXtiYWRnZS5sYWJlbH1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTMgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tNTAwICR7aXNWaXNpYmxlID8gXCJvcGFjaXR5LTEwMCB0cmFuc2xhdGUteS0wXCIgOiBcIm9wYWNpdHktMCB0cmFuc2xhdGUteS00XCJ9YH1cbiAgICAgICAgICAgICAgc3R5bGU9e3sgdHJhbnNpdGlvbkRlbGF5OiBpc1Zpc2libGUgPyBgJHtpICogMTAwfW1zYCA6IFwiMG1zXCIgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEwIGgtMTAgcm91bmRlZC1mdWxsIGJnLXByaW1hcnkvMTAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8YmFkZ2UuaWNvbiBjbGFzc05hbWU9XCJoLTUgdy01IHRleHQtcHJpbWFyeVwiIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtbXV0ZWQtZm9yZWdyb3VuZFwiPntiYWRnZS5sYWJlbH08L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiU2hpZWxkIiwiQXdhcmQiLCJTdGFyIiwiQmFkZ2VDaGVjayIsInVzZVNjcm9sbFJldmVhbCIsImJhZGdlcyIsImljb24iLCJsYWJlbCIsIlRydXN0QmFkZ2VzIiwicmVmIiwiaXNWaXNpYmxlIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImRpdiIsIm1hcCIsImJhZGdlIiwiaSIsInN0eWxlIiwidHJhbnNpdGlvbkRlbGF5Iiwic3BhbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsU0FBU0EsTUFBTSxFQUFFQyxLQUFLLEVBQUVDLElBQUksRUFBRUMsVUFBVSxRQUFRLGVBQWU7QUFDL0QsU0FBU0MsZUFBZSxRQUFRLDBCQUEwQjtBQUUxRCxNQUFNQyxTQUFTO0lBQ2I7UUFBRUMsTUFBTUw7UUFBT00sT0FBTztJQUF1QjtJQUM3QztRQUFFRCxNQUFNSjtRQUFNSyxPQUFPO0lBQWlCO0lBQ3RDO1FBQUVELE1BQU1OO1FBQVFPLE9BQU87SUFBZ0I7SUFDdkM7UUFBRUQsTUFBTUg7UUFBWUksT0FBTztJQUFpQjtDQUM3QztBQUVELGVBQWUsU0FBU0M7O0lBQ3RCLE1BQU0sRUFBRUMsR0FBRyxFQUFFQyxTQUFTLEVBQUUsR0FBR047SUFFM0IscUJBQ0UsUUFBQ087UUFBUUMsV0FBVTtrQkFDakIsY0FBQSxRQUFDQztZQUFJRCxXQUFVO1lBQXlCSCxLQUFLQTtzQkFDM0MsY0FBQSxRQUFDSTtnQkFBSUQsV0FBVTswQkFDWlAsT0FBT1MsR0FBRyxDQUFDLENBQUNDLE9BQU9DLGtCQUNsQixRQUFDSDt3QkFFQ0QsV0FBVyxDQUFDLG9EQUFvRCxFQUFFRixZQUFZLDhCQUE4QiwyQkFBMkI7d0JBQ3ZJTyxPQUFPOzRCQUFFQyxpQkFBaUJSLFlBQVksR0FBR00sSUFBSSxJQUFJLEVBQUUsQ0FBQyxHQUFHO3dCQUFNOzswQ0FFN0QsUUFBQ0g7Z0NBQUlELFdBQVU7MENBQ2IsY0FBQSxRQUFDRyxNQUFNVCxJQUFJO29DQUFDTSxXQUFVOzs7Ozs7Ozs7OzswQ0FFeEIsUUFBQ087Z0NBQUtQLFdBQVU7MENBQTZDRyxNQUFNUixLQUFLOzs7Ozs7O3VCQVBuRVEsTUFBTVIsS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFjOUI7R0F2QndCQzs7UUFDS0o7OztLQURMSSJ9