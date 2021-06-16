export declare type ErrorReason = unknown;
export declare type Arguments = unknown[];
export declare type PromiseCallback<Args extends Arguments, Result> = (...args: Args) => PromiseLike<Result>;
export declare type PromiseFunc<T> = () => PromiseLike<T>;
export declare type IsPending = boolean;
