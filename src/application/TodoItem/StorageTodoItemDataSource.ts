import { DataSource } from "~/domain/datasource";
import { TodoItem } from "~/domain/entities";

export class LocalStorageTodoItemDataSource implements DataSource<TodoItem> {

    //#region Private Properties
    private itemsKey: string;
    //#endregion

    //#region Constructor
    constructor(itemsKey: string) {
        this.itemsKey = itemsKey;
    }
    //#endregion

    //#region Private Methods
    private getItems(): TodoItem[] {
        const items = localStorage.getItem(this.itemsKey);
        if (!items) {
            return [];
        }
        return JSON.parse(items);
    }

    private setItems(items: TodoItem[]) {
        localStorage.setItem(this.itemsKey, JSON.stringify(items));
    }
    //#endregion

    //#region Public Methods
    async findOne(id: string): Promise<TodoItem> {
        const items = this.getItems();
        const item = items.find(item => item.id === id);
        if (!item)
            throw new Error(`Item with id ${id} not found`);
        return item;
    }

    async findAll(): Promise<TodoItem[]> {
        return this.getItems();
    }

    async create(item: TodoItem): Promise<boolean> {
        const items = this.getItems();
        items.push(item);
        this.setItems(items);
        return true;
    }

    async update(id: string, item: TodoItem): Promise<boolean> {
        const items = this.getItems();
        const index = items.findIndex(item => item.id === id);
        if (index < 0) {
            return false;
        }
        items[index] = item;
        this.setItems(items);
        return true;
    }

    async delete(id: string): Promise<boolean> {
        const items = this.getItems();
        const index = items.findIndex(item => item.id === id);
        if (index < 0) {
            return false;
        }
        items.splice(index, 1);
        this.setItems(items);
        return true;
    }
    //#endregion
}

