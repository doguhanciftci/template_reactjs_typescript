export type UseCase<T, R> = {
    execute(item: T): Promise<R>;
};
