import { DependencyList, useEffect, useRef } from 'react';

import { ErrorReason, IsPending, PromiseFunc } from './types';
import { useCallbackPromise } from './useCallbackPromise';

export function usePromise<Result>(
  promise: PromiseLike<Result> | PromiseFunc<Result>,
  deps: DependencyList = [],
): [Result | undefined, ErrorReason | undefined, IsPending, PromiseFunc<Result>] {
  const [call, result, error, isCalling] = useCallbackPromise(() => {
    if (typeof promise === 'function') {
      return promise();
    }
    return promise;
  }, deps);

  const initRef = useRef(true);

  useEffect(() => {
    initRef.current = false;
    call();
  }, deps);

  const isPending = initRef.current || isCalling;

  return [result, error, isPending, call];
}
