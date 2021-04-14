import { useCallbackPromise } from './useCallbackPromise';
export function useCallbackResult(fn, deps) {
    var _a = useCallbackPromise(fn, deps), run = _a[0], result = _a[1], error = _a[2], isCalling = _a[3];
    if (error) {
        throw error;
    }
    return isCalling ? [run, undefined, true] : [run, result, false];
}
//# sourceMappingURL=useCallbackResult.js.map