import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/TeamSection.tsx");import * as RefreshRuntime from "/@react-refresh";
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/dev-server/src/components/TeamSection.tsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}

import { jsxDEV as _jsxDEV } from "/@id/__x00__jsx-source/jsx-dev-runtime";
var _s = $RefreshSig$();
import { useScrollReveal } from "/src/hooks/useScrollReveal.tsx";
const team = [
    {
        image: "https://images.squarespace-cdn.com/content/v1/67522ea9ea4b3147aabef81c/a845eb1c-6d21-48a1-8f0e-5c642ced8f31/DrEscobar-2025.jpg",
        name: "Dr. Ernie Escobar",
        role: "General Dentist"
    },
    {
        image: "https://images.squarespace-cdn.com/content/v1/67522ea9ea4b3147aabef81c/312af180-8b02-46d7-a7af-f4cea5cfb22d/drjohnson500.jpg",
        name: "Dr. LT Johnson",
        role: "Oral & Maxillofacial Surgeon"
    },
    {
        image: "https://images.squarespace-cdn.com/content/v1/67522ea9ea4b3147aabef81c/cca928d0-55ae-47fb-afa9-2f29419bb296/DrMunu-2025.jpg",
        name: "Dr. Isatu Munu",
        role: "Prosthodontist"
    }
];
export default function TeamSection() {
    _s();
    const { ref, isVisible } = useScrollReveal();
    return /*#__PURE__*/ _jsxDEV("section", {
        id: "team",
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
                            children: "Our Experts"
                        }, void 0, false, {
                            fileName: "/dev-server/src/components/TeamSection.tsx",
                            lineNumber: 28,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ _jsxDEV("h2", {
                            className: "text-3xl lg:text-5xl font-heading font-bold text-foreground",
                            children: [
                                "Meet Our Team of",
                                " ",
                                /*#__PURE__*/ _jsxDEV("span", {
                                    className: "text-gradient-gold",
                                    children: "Dental Experts"
                                }, void 0, false, {
                                    fileName: "/dev-server/src/components/TeamSection.tsx",
                                    lineNumber: 33,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "/dev-server/src/components/TeamSection.tsx",
                            lineNumber: 31,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/dev-server/src/components/TeamSection.tsx",
                    lineNumber: 27,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ _jsxDEV("div", {
                    className: "grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto",
                    children: team.map((member, i)=>/*#__PURE__*/ _jsxDEV("div", {
                            className: `group text-center transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`,
                            style: {
                                transitionDelay: isVisible ? `${i * 150}ms` : "0ms"
                            },
                            children: [
                                /*#__PURE__*/ _jsxDEV("div", {
                                    className: "relative rounded-2xl overflow-hidden mb-6 aspect-square",
                                    children: [
                                        /*#__PURE__*/ _jsxDEV("img", {
                                            src: member.image,
                                            alt: member.name,
                                            loading: "lazy",
                                            className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                        }, void 0, false, {
                                            fileName: "/dev-server/src/components/TeamSection.tsx",
                                            lineNumber: 45,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ _jsxDEV("div", {
                                            className: "absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                        }, void 0, false, {
                                            fileName: "/dev-server/src/components/TeamSection.tsx",
                                            lineNumber: 51,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "/dev-server/src/components/TeamSection.tsx",
                                    lineNumber: 44,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ _jsxDEV("h3", {
                                    className: "text-lg font-heading font-semibold text-foreground",
                                    children: member.name
                                }, void 0, false, {
                                    fileName: "/dev-server/src/components/TeamSection.tsx",
                                    lineNumber: 53,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ _jsxDEV("p", {
                                    className: "text-sm text-primary italic mt-1",
                                    children: member.role
                                }, void 0, false, {
                                    fileName: "/dev-server/src/components/TeamSection.tsx",
                                    lineNumber: 56,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, member.name, true, {
                            fileName: "/dev-server/src/components/TeamSection.tsx",
                            lineNumber: 39,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "/dev-server/src/components/TeamSection.tsx",
                    lineNumber: 37,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "/dev-server/src/components/TeamSection.tsx",
            lineNumber: 26,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "/dev-server/src/components/TeamSection.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
_s(TeamSection, "aCOyLg7yh4JHGJYS1/e1njthfZ4=", false, function() {
    return [
        useScrollReveal
    ];
});
_c = TeamSection;
var _c;
$RefreshReg$(_c, "TeamSection");


if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}


if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/dev-server/src/components/TeamSection.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/dev-server/src/components/TeamSection.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlRlYW1TZWN0aW9uLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTY3JvbGxSZXZlYWwgfSBmcm9tIFwiQC9ob29rcy91c2VTY3JvbGxSZXZlYWxcIjtcblxuY29uc3QgdGVhbSA9IFtcbiAge1xuICAgIGltYWdlOiBcImh0dHBzOi8vaW1hZ2VzLnNxdWFyZXNwYWNlLWNkbi5jb20vY29udGVudC92MS82NzUyMmVhOWVhNGIzMTQ3YWFiZWY4MWMvYTg0NWViMWMtNmQyMS00OGExLThmMGUtNWM2NDJjZWQ4ZjMxL0RyRXNjb2Jhci0yMDI1LmpwZ1wiLFxuICAgIG5hbWU6IFwiRHIuIEVybmllIEVzY29iYXJcIixcbiAgICByb2xlOiBcIkdlbmVyYWwgRGVudGlzdFwiLFxuICB9LFxuICB7XG4gICAgaW1hZ2U6IFwiaHR0cHM6Ly9pbWFnZXMuc3F1YXJlc3BhY2UtY2RuLmNvbS9jb250ZW50L3YxLzY3NTIyZWE5ZWE0YjMxNDdhYWJlZjgxYy8zMTJhZjE4MC04YjAyLTQ2ZDctYTdhZi1mNGNlYTVjZmIyMmQvZHJqb2huc29uNTAwLmpwZ1wiLFxuICAgIG5hbWU6IFwiRHIuIExUIEpvaG5zb25cIixcbiAgICByb2xlOiBcIk9yYWwgJiBNYXhpbGxvZmFjaWFsIFN1cmdlb25cIixcbiAgfSxcbiAge1xuICAgIGltYWdlOiBcImh0dHBzOi8vaW1hZ2VzLnNxdWFyZXNwYWNlLWNkbi5jb20vY29udGVudC92MS82NzUyMmVhOWVhNGIzMTQ3YWFiZWY4MWMvY2NhOTI4ZDAtNTVhZS00N2ZiLWFmYTktMmYyOTQxOWJiMjk2L0RyTXVudS0yMDI1LmpwZ1wiLFxuICAgIG5hbWU6IFwiRHIuIElzYXR1IE11bnVcIixcbiAgICByb2xlOiBcIlByb3N0aG9kb250aXN0XCIsXG4gIH0sXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUZWFtU2VjdGlvbigpIHtcbiAgY29uc3QgeyByZWYsIGlzVmlzaWJsZSB9ID0gdXNlU2Nyb2xsUmV2ZWFsKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBpZD1cInRlYW1cIiBjbGFzc05hbWU9XCJweS0yNCBsZzpweS0zMlwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBweC02XCIgcmVmPXtyZWZ9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHRleHQtY2VudGVyIG1heC13LTJ4bCBteC1hdXRvIG1iLTE2IHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTcwMCAke2lzVmlzaWJsZSA/IFwib3BhY2l0eS0xMDAgdHJhbnNsYXRlLXktMFwiIDogXCJvcGFjaXR5LTAgdHJhbnNsYXRlLXktOFwifWB9PlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1tZWRpdW0gdHJhY2tpbmctd2lkZXN0IHVwcGVyY2FzZSB0ZXh0LXByaW1hcnkgbWItNFwiPlxuICAgICAgICAgICAgT3VyIEV4cGVydHNcbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtM3hsIGxnOnRleHQtNXhsIGZvbnQtaGVhZGluZyBmb250LWJvbGQgdGV4dC1mb3JlZ3JvdW5kXCI+XG4gICAgICAgICAgICBNZWV0IE91ciBUZWFtIG9me1wiIFwifVxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ncmFkaWVudC1nb2xkXCI+RGVudGFsIEV4cGVydHM8L3NwYW4+XG4gICAgICAgICAgPC9oMj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIHNtOmdyaWQtY29scy0zIGdhcC04IG1heC13LTR4bCBteC1hdXRvXCI+XG4gICAgICAgICAge3RlYW0ubWFwKChtZW1iZXIsIGkpID0+IChcbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAga2V5PXttZW1iZXIubmFtZX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZ3JvdXAgdGV4dC1jZW50ZXIgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tNTAwICR7aXNWaXNpYmxlID8gXCJvcGFjaXR5LTEwMCB0cmFuc2xhdGUteS0wXCIgOiBcIm9wYWNpdHktMCB0cmFuc2xhdGUteS04XCJ9YH1cbiAgICAgICAgICAgICAgc3R5bGU9e3sgdHJhbnNpdGlvbkRlbGF5OiBpc1Zpc2libGUgPyBgJHtpICogMTUwfW1zYCA6IFwiMG1zXCIgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSByb3VuZGVkLTJ4bCBvdmVyZmxvdy1oaWRkZW4gbWItNiBhc3BlY3Qtc3F1YXJlXCI+XG4gICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgc3JjPXttZW1iZXIuaW1hZ2V9XG4gICAgICAgICAgICAgICAgICBhbHQ9e21lbWJlci5uYW1lfVxuICAgICAgICAgICAgICAgICAgbG9hZGluZz1cImxhenlcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGgtZnVsbCBvYmplY3QtY292ZXIgZ3JvdXAtaG92ZXI6c2NhbGUtMTA1IHRyYW5zaXRpb24tdHJhbnNmb3JtIGR1cmF0aW9uLTcwMFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LTAgYmctZ3JhZGllbnQtdG8tdCBmcm9tLWNoYXJjb2FsLzQwIHRvLXRyYW5zcGFyZW50IG9wYWNpdHktMCBncm91cC1ob3ZlcjpvcGFjaXR5LTEwMCB0cmFuc2l0aW9uLW9wYWNpdHkgZHVyYXRpb24tMzAwXCIgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtaGVhZGluZyBmb250LXNlbWlib2xkIHRleHQtZm9yZWdyb3VuZFwiPlxuICAgICAgICAgICAgICAgIHttZW1iZXIubmFtZX1cbiAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXByaW1hcnkgaXRhbGljIG10LTFcIj57bWVtYmVyLnJvbGV9PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVNjcm9sbFJldmVhbCIsInRlYW0iLCJpbWFnZSIsIm5hbWUiLCJyb2xlIiwiVGVhbVNlY3Rpb24iLCJyZWYiLCJpc1Zpc2libGUiLCJzZWN0aW9uIiwiaWQiLCJjbGFzc05hbWUiLCJkaXYiLCJwIiwiaDIiLCJzcGFuIiwibWFwIiwibWVtYmVyIiwiaSIsInN0eWxlIiwidHJhbnNpdGlvbkRlbGF5IiwiaW1nIiwic3JjIiwiYWx0IiwibG9hZGluZyIsImgzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxTQUFTQSxlQUFlLFFBQVEsMEJBQTBCO0FBRTFELE1BQU1DLE9BQU87SUFDWDtRQUNFQyxPQUFPO1FBQ1BDLE1BQU07UUFDTkMsTUFBTTtJQUNSO0lBQ0E7UUFDRUYsT0FBTztRQUNQQyxNQUFNO1FBQ05DLE1BQU07SUFDUjtJQUNBO1FBQ0VGLE9BQU87UUFDUEMsTUFBTTtRQUNOQyxNQUFNO0lBQ1I7Q0FDRDtBQUVELGVBQWUsU0FBU0M7O0lBQ3RCLE1BQU0sRUFBRUMsR0FBRyxFQUFFQyxTQUFTLEVBQUUsR0FBR1A7SUFFM0IscUJBQ0UsUUFBQ1E7UUFBUUMsSUFBRztRQUFPQyxXQUFVO2tCQUMzQixjQUFBLFFBQUNDO1lBQUlELFdBQVU7WUFBeUJKLEtBQUtBOzs4QkFDM0MsUUFBQ0s7b0JBQUlELFdBQVcsQ0FBQyxnRUFBZ0UsRUFBRUgsWUFBWSw4QkFBOEIsMkJBQTJCOztzQ0FDdEosUUFBQ0s7NEJBQUVGLFdBQVU7c0NBQWtFOzs7Ozs7c0NBRy9FLFFBQUNHOzRCQUFHSCxXQUFVOztnQ0FBOEQ7Z0NBQ3pEOzhDQUNqQixRQUFDSTtvQ0FBS0osV0FBVTs4Q0FBcUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFJekMsUUFBQ0M7b0JBQUlELFdBQVU7OEJBQ1pULEtBQUtjLEdBQUcsQ0FBQyxDQUFDQyxRQUFRQyxrQkFDakIsUUFBQ047NEJBRUNELFdBQVcsQ0FBQyw4Q0FBOEMsRUFBRUgsWUFBWSw4QkFBOEIsMkJBQTJCOzRCQUNqSVcsT0FBTztnQ0FBRUMsaUJBQWlCWixZQUFZLEdBQUdVLElBQUksSUFBSSxFQUFFLENBQUMsR0FBRzs0QkFBTTs7OENBRTdELFFBQUNOO29DQUFJRCxXQUFVOztzREFDYixRQUFDVTs0Q0FDQ0MsS0FBS0wsT0FBT2QsS0FBSzs0Q0FDakJvQixLQUFLTixPQUFPYixJQUFJOzRDQUNoQm9CLFNBQVE7NENBQ1JiLFdBQVU7Ozs7OztzREFFWixRQUFDQzs0Q0FBSUQsV0FBVTs7Ozs7Ozs7Ozs7OzhDQUVqQixRQUFDYztvQ0FBR2QsV0FBVTs4Q0FDWE0sT0FBT2IsSUFBSTs7Ozs7OzhDQUVkLFFBQUNTO29DQUFFRixXQUFVOzhDQUFvQ00sT0FBT1osSUFBSTs7Ozs7OzsyQkFoQnZEWSxPQUFPYixJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1QjlCO0dBMUN3QkU7O1FBQ0tMOzs7S0FETEsifQ==