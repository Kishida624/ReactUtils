import { DependencyList, useEffect, useRef } from 'react';

import { ErrorReason, PromiseFunc } from './types';
import { useCallbackPromise } from './useCallbackPromise';

type IsPending = boolean;

export function usePromise<Result>(
  promise: PromiseLike<Result> | PromiseFunc<Result>,
  deps?: DependencyList,
): [Result | undefined, ErrorReason | undefined, IsPending] {
  const [run, result, error, isCalling] = useCallbackPromise(() => {
    if (typeof promise === 'function') {
      return promise();
    }
    return promise;
  }, deps);

  const initRef = useRef(true);

  useEffect(() => {
    initRef.current = false;
    run();
  }, deps);

  const isPending = initRef.current || isCalling;

  return [result, error, isPending];
}
