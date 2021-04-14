import { usePromise } from './usePromise';
export function useResult(promise, deps) {
    var _a = usePromise(promise, deps), result = _a[0], error = _a[1], isPending = _a[2];
    if (error) {
        throw error;
    }
    return isPending ? [undefined, true] : [result, false];
}
//# sourceMappingURL=useResult.js.map