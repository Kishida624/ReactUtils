import { DependencyList } from 'react';
import { useCallbackPromise } from './useCallbackPromise';
import { Arguments, PromiseCallback } from './types';

export function useCallbackResult<Args extends Arguments, Result>(
  fn: PromiseCallback<Args, Result>,
  deps?: DependencyList,
):
  | [PromiseCallback<Args, Result>, Result, false]
  | [PromiseCallback<Args, Result>, undefined, true] {
  const [run, result, error, isCalling] = useCallbackPromise(fn, deps);

  if (error) {
    throw error;
  }

  return isCalling ? [run, undefined, true] : [run, result!, false];
}
