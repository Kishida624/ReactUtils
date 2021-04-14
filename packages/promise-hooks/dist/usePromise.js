import { useEffect, useRef } from 'react';
import { useCallbackPromise } from './useCallbackPromise';
export function usePromise(promise, deps) {
    var _a = useCallbackPromise(function () {
        if (typeof promise === 'function') {
            return promise();
        }
        return promise;
    }, deps), run = _a[0], result = _a[1], error = _a[2], isCalling = _a[3];
    var initRef = useRef(true);
    useEffect(function () {
        initRef.current = false;
        run();
    }, deps);
    var isPending = initRef.current || isCalling;
    return [result, error, isPending];
}
//# sourceMappingURL=usePromise.js.map