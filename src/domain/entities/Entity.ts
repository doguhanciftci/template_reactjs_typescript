export type EntityID = string | number;

export class Entity {
    id: EntityID;
    createdAt: Date;
    updatedAt: Date;

    constructor(id: EntityID) {
        this.id = id;
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }
}
