import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/Index.tsx");import * as RefreshRuntime from "/@react-refresh";
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/dev-server/src/pages/Index.tsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}

import { jsxDEV as _jsxDEV } from "/@id/__x00__jsx-source/jsx-dev-runtime";
import Navbar from "/src/components/Navbar.tsx?t=1776269862329";
import HeroSection from "/src/components/HeroSection.tsx";
import TrustBadges from "/src/components/TrustBadges.tsx";
import FeaturesSection from "/src/components/FeaturesSection.tsx";
import AnimatedCounter from "/src/components/AnimatedCounter.tsx";
import ServicesSection from "/src/components/ServicesSection.tsx";
import ProcessSection from "/src/components/ProcessSection.tsx";
import GallerySection from "/src/components/GallerySection.tsx?t=1776270003511";
import TeamSection from "/src/components/TeamSection.tsx";
import TestimonialsSection from "/src/components/TestimonialsSection.tsx?t=1776269862318";
import FAQSection from "/src/components/FAQSection.tsx";
import CTASection from "/src/components/CTASection.tsx";
import Footer from "/src/components/Footer.tsx";
export default function Index() {
    return /*#__PURE__*/ _jsxDEV("div", {
        className: "min-h-screen",
        children: [
            /*#__PURE__*/ _jsxDEV(Navbar, {}, void 0, false, {
                fileName: "/dev-server/src/pages/Index.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ _jsxDEV(HeroSection, {}, void 0, false, {
                fileName: "/dev-server/src/pages/Index.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ _jsxDEV(TrustBadges, {}, void 0, false, {
                fileName: "/dev-server/src/pages/Index.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ _jsxDEV(FeaturesSection, {}, void 0, false, {
                fileName: "/dev-server/src/pages/Index.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ _jsxDEV(AnimatedCounter, {}, void 0, false, {
                fileName: "/dev-server/src/pages/Index.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ _jsxDEV(ServicesSection, {}, void 0, false, {
                fileName: "/dev-server/src/pages/Index.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ _jsxDEV(ProcessSection, {}, void 0, false, {
                fileName: "/dev-server/src/pages/Index.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ _jsxDEV(GallerySection, {}, void 0, false, {
                fileName: "/dev-server/src/pages/Index.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ _jsxDEV(TeamSection, {}, void 0, false, {
                fileName: "/dev-server/src/pages/Index.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ _jsxDEV(TestimonialsSection, {}, void 0, false, {
                fileName: "/dev-server/src/pages/Index.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ _jsxDEV(FAQSection, {}, void 0, false, {
                fileName: "/dev-server/src/pages/Index.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ _jsxDEV(CTASection, {}, void 0, false, {
                fileName: "/dev-server/src/pages/Index.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ _jsxDEV(Footer, {}, void 0, false, {
                fileName: "/dev-server/src/pages/Index.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "/dev-server/src/pages/Index.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
_c = Index;
var _c;
$RefreshReg$(_c, "Index");


if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}


if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/dev-server/src/pages/Index.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/dev-server/src/pages/Index.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkluZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmF2YmFyIGZyb20gXCJAL2NvbXBvbmVudHMvTmF2YmFyXCI7XG5pbXBvcnQgSGVyb1NlY3Rpb24gZnJvbSBcIkAvY29tcG9uZW50cy9IZXJvU2VjdGlvblwiO1xuaW1wb3J0IFRydXN0QmFkZ2VzIGZyb20gXCJAL2NvbXBvbmVudHMvVHJ1c3RCYWRnZXNcIjtcbmltcG9ydCBGZWF0dXJlc1NlY3Rpb24gZnJvbSBcIkAvY29tcG9uZW50cy9GZWF0dXJlc1NlY3Rpb25cIjtcbmltcG9ydCBBbmltYXRlZENvdW50ZXIgZnJvbSBcIkAvY29tcG9uZW50cy9BbmltYXRlZENvdW50ZXJcIjtcbmltcG9ydCBTZXJ2aWNlc1NlY3Rpb24gZnJvbSBcIkAvY29tcG9uZW50cy9TZXJ2aWNlc1NlY3Rpb25cIjtcbmltcG9ydCBQcm9jZXNzU2VjdGlvbiBmcm9tIFwiQC9jb21wb25lbnRzL1Byb2Nlc3NTZWN0aW9uXCI7XG5pbXBvcnQgR2FsbGVyeVNlY3Rpb24gZnJvbSBcIkAvY29tcG9uZW50cy9HYWxsZXJ5U2VjdGlvblwiO1xuaW1wb3J0IFRlYW1TZWN0aW9uIGZyb20gXCJAL2NvbXBvbmVudHMvVGVhbVNlY3Rpb25cIjtcbmltcG9ydCBUZXN0aW1vbmlhbHNTZWN0aW9uIGZyb20gXCJAL2NvbXBvbmVudHMvVGVzdGltb25pYWxzU2VjdGlvblwiO1xuaW1wb3J0IEZBUVNlY3Rpb24gZnJvbSBcIkAvY29tcG9uZW50cy9GQVFTZWN0aW9uXCI7XG5pbXBvcnQgQ1RBU2VjdGlvbiBmcm9tIFwiQC9jb21wb25lbnRzL0NUQVNlY3Rpb25cIjtcbmltcG9ydCBGb290ZXIgZnJvbSBcIkAvY29tcG9uZW50cy9Gb290ZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtaW4taC1zY3JlZW5cIj5cbiAgICAgIDxOYXZiYXIgLz5cbiAgICAgIDxIZXJvU2VjdGlvbiAvPlxuICAgICAgPFRydXN0QmFkZ2VzIC8+XG4gICAgICA8RmVhdHVyZXNTZWN0aW9uIC8+XG4gICAgICA8QW5pbWF0ZWRDb3VudGVyIC8+XG4gICAgICA8U2VydmljZXNTZWN0aW9uIC8+XG4gICAgICA8UHJvY2Vzc1NlY3Rpb24gLz5cbiAgICAgIDxHYWxsZXJ5U2VjdGlvbiAvPlxuICAgICAgPFRlYW1TZWN0aW9uIC8+XG4gICAgICA8VGVzdGltb25pYWxzU2VjdGlvbiAvPlxuICAgICAgPEZBUVNlY3Rpb24gLz5cbiAgICAgIDxDVEFTZWN0aW9uIC8+XG4gICAgICA8Rm9vdGVyIC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiTmF2YmFyIiwiSGVyb1NlY3Rpb24iLCJUcnVzdEJhZGdlcyIsIkZlYXR1cmVzU2VjdGlvbiIsIkFuaW1hdGVkQ291bnRlciIsIlNlcnZpY2VzU2VjdGlvbiIsIlByb2Nlc3NTZWN0aW9uIiwiR2FsbGVyeVNlY3Rpb24iLCJUZWFtU2VjdGlvbiIsIlRlc3RpbW9uaWFsc1NlY3Rpb24iLCJGQVFTZWN0aW9uIiwiQ1RBU2VjdGlvbiIsIkZvb3RlciIsIkluZGV4IiwiZGl2IiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU9BLFlBQVksc0JBQXNCO0FBQ3pDLE9BQU9DLGlCQUFpQiwyQkFBMkI7QUFDbkQsT0FBT0MsaUJBQWlCLDJCQUEyQjtBQUNuRCxPQUFPQyxxQkFBcUIsK0JBQStCO0FBQzNELE9BQU9DLHFCQUFxQiwrQkFBK0I7QUFDM0QsT0FBT0MscUJBQXFCLCtCQUErQjtBQUMzRCxPQUFPQyxvQkFBb0IsOEJBQThCO0FBQ3pELE9BQU9DLG9CQUFvQiw4QkFBOEI7QUFDekQsT0FBT0MsaUJBQWlCLDJCQUEyQjtBQUNuRCxPQUFPQyx5QkFBeUIsbUNBQW1DO0FBQ25FLE9BQU9DLGdCQUFnQiwwQkFBMEI7QUFDakQsT0FBT0MsZ0JBQWdCLDBCQUEwQjtBQUNqRCxPQUFPQyxZQUFZLHNCQUFzQjtBQUV6QyxlQUFlLFNBQVNDO0lBQ3RCLHFCQUNFLFFBQUNDO1FBQUlDLFdBQVU7OzBCQUNiLFFBQUNmOzs7OzswQkFDRCxRQUFDQzs7Ozs7MEJBQ0QsUUFBQ0M7Ozs7OzBCQUNELFFBQUNDOzs7OzswQkFDRCxRQUFDQzs7Ozs7MEJBQ0QsUUFBQ0M7Ozs7OzBCQUNELFFBQUNDOzs7OzswQkFDRCxRQUFDQzs7Ozs7MEJBQ0QsUUFBQ0M7Ozs7OzBCQUNELFFBQUNDOzs7OzswQkFDRCxRQUFDQzs7Ozs7MEJBQ0QsUUFBQ0M7Ozs7OzBCQUNELFFBQUNDOzs7Ozs7Ozs7OztBQUdQO0tBbEJ3QkMifQ==