import { DependencyList } from 'react';
import { Arguments, PromiseCallback } from './types';
export declare function useCallbackResult<Args extends Arguments, Result>(fn: PromiseCallback<Args, Result>, deps?: DependencyList): [PromiseCallback<Args, Result>, Result, false] | [PromiseCallback<Args, Result>, undefined, true];
