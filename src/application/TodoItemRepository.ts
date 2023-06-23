import { TodoItem } from "~/domain/entities";
import { GenericRepository } from "~/domain/repository";
import { DataSource } from "~/domain/datasource";

export class TodoItemRepository extends GenericRepository<TodoItem> {

    constructor(dataSource: DataSource<TodoItem>) {
        super("TodoItemRepository", dataSource);
    }

}