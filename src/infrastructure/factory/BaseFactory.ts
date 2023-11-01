export abstract class BaseFactory<T> {
    abstract create(args: any): T;
}
