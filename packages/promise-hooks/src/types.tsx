// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ErrorReason = any;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Arguments = any[];

export type PromiseCallback<Args extends Arguments, Result> = (
  ...args: Args
) => PromiseLike<Result>;

export type PromiseFunc<T> = () => PromiseLike<T>;
