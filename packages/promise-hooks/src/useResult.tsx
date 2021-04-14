import { DependencyList } from 'react';

import { usePromise } from './usePromise';
import { PromiseFunc } from './types';

export function useResult<T>(
  promise: PromiseLike<T> | PromiseFunc<T>,
  deps?: DependencyList,
): [T, false] | [undefined, true] {
  const [result, error, isPending] = usePromise(promise, deps);

  if (error) {
    throw error;
  }

  return isPending ? [undefined, true] : [result!, false];
}
