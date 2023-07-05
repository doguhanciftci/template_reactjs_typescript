import { TodoItem } from "~/domain/entities";
import { DataSource, GenericRepository } from "~/domain/repository";

export class TodoItemRepository extends GenericRepository<TodoItem> {

    constructor(dataSource: DataSource<TodoItem>) {
        super("TodoItemRepository", dataSource);
    }

}