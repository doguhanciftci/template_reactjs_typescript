export abstract class BaseFactory<T> {
    abstract create(args: unknown): T;
}
