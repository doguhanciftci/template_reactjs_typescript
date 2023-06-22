import { Entity } from "./Entity";
import { TodoItem } from "./TodoItem";

export class TodoList extends Entity {
    title: string;
    description: string;
    items: TodoItem[];

    constructor(id: string, title: string, description: string) {
        super(id);
        this.title = title;
        this.description = description;
        this.items = [];
    }

    addItem(item: TodoItem) {
        this.items.push(item);
    }

    removeItem(item: TodoItem) {
        this.items = this.items.filter(i => i.id !== item.id);
    }

    updateItem(item: TodoItem) {
        this.items = this.items.map(i => i.id === item.id ? item : i);
    }

}