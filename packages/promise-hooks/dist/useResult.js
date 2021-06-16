import { usePromise } from './usePromise';
export function useResult(promise, deps) {
    if (deps === void 0) { deps = []; }
    var _a = usePromise(promise, deps), result = _a[0], error = _a[1], isPending = _a[2], call = _a[3];
    if (error) {
        throw error;
    }
    return [result, isPending, call];
}
//# sourceMappingURL=useResult.js.map