import { Entity } from "./Entity";

export class TodoItem extends Entity {
    title: string;
    description: string;

    constructor(id: string, title: string, description: string) {
        super(id);
        this.title = title;
        this.description = description;
    }
}