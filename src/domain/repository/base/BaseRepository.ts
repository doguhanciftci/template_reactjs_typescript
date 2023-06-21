import { IWrite } from "./IWrite";
import { IRead } from "./IRead";

export abstract class BaseRepository<T> implements IWrite<T>, IRead<T> {

    protected name: string = "BaseRepository"

    constructor(name: string) {
        this.name = name;
    }

    create(item: T): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    update(id: string, item: T): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    delete(id: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    find(item: T): Promise<T[]> {
        throw new Error("Method not implemented.");
    }
    findOne(id: string): Promise<T> {
        throw new Error("Method not implemented.");
    }

}