import { TodoItem } from "~/domain/entities";
import { DataSource } from "~/domain/repository";

export class MemoryTodoItemDataSource implements DataSource<TodoItem> {

    private items: TodoItem[] = [];

    async findOne(id: string): Promise<TodoItem> {
        const item = this.items.find(item => item.id === id);
        if (!item)
            throw new Error(`Item with id ${id} not found`);
        return item;
    }

    async findAll(): Promise<TodoItem[]> {
        return this.items;
    }

    async create(item: TodoItem): Promise<boolean> {
        this.items.push(item);
        return true;
    }

    async update(id: string, item: TodoItem): Promise<boolean> {
        const index = this.items.findIndex(item => item.id === id);
        if (index < 0) {
            return false;
        }
        this.items[index] = item;
        return true;
    }

    async delete(id: string): Promise<boolean> {
        const index = this.items.findIndex(item => item.id === id);
        if (index < 0) {
            return false;
        }
        this.items.splice(index, 1);
        return true;
    }
}