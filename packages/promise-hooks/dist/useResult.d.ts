import { DependencyList } from 'react';
import { IsPending, PromiseFunc } from './types';
export declare function useResult<T>(promise: PromiseLike<T> | PromiseFunc<T>, deps?: DependencyList): [T | undefined, IsPending, PromiseFunc<T>];
