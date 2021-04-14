import { useCallback, useEffect, useRef, useState, DependencyList } from 'react';

import { ErrorReason, Arguments, PromiseCallback } from './types';

type IsCalling = boolean;

export function useCallbackPromise<Args extends Arguments, Result>(
  fn: PromiseCallback<Args, Result>,
  deps?: DependencyList,
): [PromiseCallback<Args, Result>, Result | undefined, ErrorReason | undefined, IsCalling] {
  const fnRef = useRef(fn);
  useEffect(() => {
    fnRef.current = fn;
  }, [fn]);

  const [state, setState] = useState<{
    result?: Result;
    error?: ErrorReason;
    isCalling: boolean;
  }>({ isCalling: false });

  const callbackRef = useRef<PromiseCallback<Args, Result>>();

  useEffect(() => {
    let isCanceled = false;

    callbackRef.current = (...args: Args) =>
      new Promise<Result>(async (resolve, reject) => {
        try {
          const promise = fnRef.current(...args);

          setState({ isCalling: true });

          const result = await promise;

          if (isCanceled) {
            return;
          }

          setState({ isCalling: false, result });

          resolve(result);
        } catch (error) {
          if (!isCanceled) {
            setState({ isCalling: false, error });
          }
          reject(error);
        }
      });

    return () => {
      isCanceled = true;
    };
  }, deps);

  const callback = useCallback<PromiseCallback<Args, Result>>((...args: Args) => {
    if (!callbackRef.current) {
      throw new Error('useCallbackPromise must call after mounted effect');
    }
    return callbackRef.current(...args);
  }, []);

  return [callback, state.result, state.error, state.isCalling];
}
