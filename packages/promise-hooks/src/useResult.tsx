import { DependencyList } from 'react';

import { usePromise } from './usePromise';
import { IsPending, PromiseFunc } from './types';

export function useResult<T>(
  promise: PromiseLike<T> | PromiseFunc<T>,
  deps: DependencyList = [],
): [T | undefined, IsPending, PromiseFunc<T>] {
  const [result, error, isPending, call] = usePromise(promise, deps);

  if (error) {
    throw error;
  }

  return [result, isPending, call];
}
