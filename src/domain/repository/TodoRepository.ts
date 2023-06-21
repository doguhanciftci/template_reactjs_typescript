import { TodoItem } from "~/domain/entities";
import { BaseRepository } from "./base/BaseRepository";

export class TodoItemRepository extends BaseRepository<TodoItem> {
    constructor() {
        super("TodoItemRepository");
    }

    find(item: TodoItem): Promise<TodoItem[]> {
        throw new Error("Method not implemented. (TodoItemRepository.find)");
    }
}
