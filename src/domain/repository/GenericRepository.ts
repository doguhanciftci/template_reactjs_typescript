import { DataSource } from "~/domain/datasource";
import { Entity, EntityID } from "~/domain/entities/Entity";

export abstract class GenericRepository<T extends Entity> {

    protected name: string = "GenericRepository"
    protected dataSource: DataSource<T>;

    constructor(name: string, dataSource: DataSource<T>) {
        this.name = name;
        this.dataSource = dataSource;
    }

    async findOne(id: EntityID): Promise<T> {
        return await this.dataSource.findOne(id);
    }

    async findAll(): Promise<T[]> {
        return await this.dataSource.findAll();
    }

    async create(item: T): Promise<boolean> {
        return await this.dataSource.create(item);
    }

    async update(id: EntityID, item: T): Promise<boolean> {
        return await this.dataSource.update(id, item);
    }

    async delete(id: EntityID): Promise<boolean> {
        return await this.dataSource.delete(id);
    }
}