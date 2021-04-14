import { DependencyList } from 'react';
import { ErrorReason, Arguments, PromiseCallback } from './types';
declare type IsCalling = boolean;
export declare function useCallbackPromise<Args extends Arguments, Result>(fn: PromiseCallback<Args, Result>, deps?: DependencyList): [PromiseCallback<Args, Result>, Result | undefined, ErrorReason | undefined, IsCalling];
export {};
