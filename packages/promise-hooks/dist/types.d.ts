export declare type ErrorReason = any;
export declare type Arguments = any[];
export declare type PromiseCallback<Args extends Arguments, Result> = (...args: Args) => PromiseLike<Result>;
export declare type PromiseFunc<T> = () => PromiseLike<T>;
