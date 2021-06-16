export type ErrorReason = unknown;

export type Arguments = unknown[];

export type PromiseCallback<Args extends Arguments, Result> = (
  ...args: Args
) => PromiseLike<Result>;

export type PromiseFunc<T> = () => PromiseLike<T>;

export type IsPending = boolean;