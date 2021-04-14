import { DependencyList } from 'react';
import { ErrorReason, PromiseFunc } from './types';
declare type IsPending = boolean;
export declare function usePromise<Result>(promise: PromiseLike<Result> | PromiseFunc<Result>, deps?: DependencyList): [Result | undefined, ErrorReason | undefined, IsPending];
export {};
