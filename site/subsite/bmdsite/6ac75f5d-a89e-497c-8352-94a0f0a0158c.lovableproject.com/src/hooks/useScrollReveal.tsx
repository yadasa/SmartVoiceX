var _s = $RefreshSig$();
import __vite__cjsImport0_react from "/node_modules/.vite/deps/react.js?v=d355e541"; const useEffect = __vite__cjsImport0_react["useEffect"]; const useRef = __vite__cjsImport0_react["useRef"]; const useState = __vite__cjsImport0_react["useState"];
export function useScrollReveal(threshold = 0.15) {
    _s();
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    useEffect(()=>{
        const el = ref.current;
        if (!el) return;
        const observer = new IntersectionObserver(([entry])=>{
            if (entry.isIntersecting) {
                setIsVisible(true);
                observer.unobserve(el);
            }
        }, {
            threshold
        });
        observer.observe(el);
        return ()=>observer.disconnect();
    }, [
        threshold
    ]);
    return {
        ref,
        isVisible
    };
}
_s(useScrollReveal, "Wk8baY7uc+CWSrD2kMBp+I8qtIg=");

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZVNjcm9sbFJldmVhbC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VTY3JvbGxSZXZlYWw8VCBleHRlbmRzIEhUTUxFbGVtZW50ID0gSFRNTERpdkVsZW1lbnQ+KFxuICB0aHJlc2hvbGQgPSAwLjE1XG4pIHtcbiAgY29uc3QgcmVmID0gdXNlUmVmPFQ+KG51bGwpO1xuICBjb25zdCBbaXNWaXNpYmxlLCBzZXRJc1Zpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZWwgPSByZWYuY3VycmVudDtcbiAgICBpZiAoIWVsKSByZXR1cm47XG5cbiAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihcbiAgICAgIChbZW50cnldKSA9PiB7XG4gICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykge1xuICAgICAgICAgIHNldElzVmlzaWJsZSh0cnVlKTtcbiAgICAgICAgICBvYnNlcnZlci51bm9ic2VydmUoZWwpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgeyB0aHJlc2hvbGQgfVxuICAgICk7XG5cbiAgICBvYnNlcnZlci5vYnNlcnZlKGVsKTtcbiAgICByZXR1cm4gKCkgPT4gb2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICB9LCBbdGhyZXNob2xkXSk7XG5cbiAgcmV0dXJuIHsgcmVmLCBpc1Zpc2libGUgfTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsInVzZVNjcm9sbFJldmVhbCIsInRocmVzaG9sZCIsInJlZiIsImlzVmlzaWJsZSIsInNldElzVmlzaWJsZSIsImVsIiwiY3VycmVudCIsIm9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJlbnRyeSIsImlzSW50ZXJzZWN0aW5nIiwidW5vYnNlcnZlIiwib2JzZXJ2ZSIsImRpc2Nvbm5lY3QiXSwibWFwcGluZ3MiOiI7QUFBQSxTQUFTQSxTQUFTLEVBQUVDLE1BQU0sRUFBRUMsUUFBUSxRQUFRLFFBQVE7QUFFcEQsT0FBTyxTQUFTQyxnQkFDZEMsWUFBWSxJQUFJOztJQUVoQixNQUFNQyxNQUFNSixPQUFVO0lBQ3RCLE1BQU0sQ0FBQ0ssV0FBV0MsYUFBYSxHQUFHTCxTQUFTO0lBRTNDRixVQUFVO1FBQ1IsTUFBTVEsS0FBS0gsSUFBSUksT0FBTztRQUN0QixJQUFJLENBQUNELElBQUk7UUFFVCxNQUFNRSxXQUFXLElBQUlDLHFCQUNuQixDQUFDLENBQUNDLE1BQU07WUFDTixJQUFJQSxNQUFNQyxjQUFjLEVBQUU7Z0JBQ3hCTixhQUFhO2dCQUNiRyxTQUFTSSxTQUFTLENBQUNOO1lBQ3JCO1FBQ0YsR0FDQTtZQUFFSjtRQUFVO1FBR2RNLFNBQVNLLE9BQU8sQ0FBQ1A7UUFDakIsT0FBTyxJQUFNRSxTQUFTTSxVQUFVO0lBQ2xDLEdBQUc7UUFBQ1o7S0FBVTtJQUVkLE9BQU87UUFBRUM7UUFBS0M7SUFBVTtBQUMxQjtHQXpCZ0JIIn0=