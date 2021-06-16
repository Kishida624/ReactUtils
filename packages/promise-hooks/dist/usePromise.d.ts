import { DependencyList } from 'react';
import { ErrorReason, IsPending, PromiseFunc } from './types';
export declare function usePromise<Result>(promise: PromiseLike<Result> | PromiseFunc<Result>, deps?: DependencyList): [Result | undefined, ErrorReason | undefined, IsPending, PromiseFunc<Result>];
