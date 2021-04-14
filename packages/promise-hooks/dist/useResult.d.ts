import { DependencyList } from 'react';
import { PromiseFunc } from './types';
export declare function useResult<T>(promise: PromiseLike<T> | PromiseFunc<T>, deps?: DependencyList): [T, false] | [undefined, true];
