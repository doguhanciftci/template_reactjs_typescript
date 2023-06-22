import { Entity, EntityID } from "~/domain/entities/Entity";

export interface DataSource<T extends Entity> {

    find(item: T): Promise<T[]>;

    findOne(id: EntityID): Promise<T>;

    create(item: T): Promise<boolean>;

    update(id: EntityID, item: T): Promise<boolean>;

    delete(id: EntityID): Promise<boolean>;

}