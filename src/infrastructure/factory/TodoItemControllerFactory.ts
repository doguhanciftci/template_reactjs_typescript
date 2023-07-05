import { TodoItemController } from "~/application/TodoItemController";
import { TodoItem } from "~/domain/entities";
import { DataSource } from "~/domain/repository";
import { MemoryTodoItemDataSource, StorageTodoItemDataSource } from "~/infrastructure/repository";
import { TodoItemRepository } from "~/infrastructure/repository/TodoItemRepository";
import { BaseFactory } from "./BaseFactory";

export enum TodoItemDataSourceType {
    Memory,
    LocalStorage
}

export class TodoItemControllerFactory extends BaseFactory<TodoItemController> {

    create(todoItemDataSourceType: TodoItemDataSourceType): TodoItemController {

        let dataSource: DataSource<TodoItem>;
        switch (todoItemDataSourceType) {
            case TodoItemDataSourceType.Memory:
                dataSource = new MemoryTodoItemDataSource();
                break;
            case TodoItemDataSourceType.LocalStorage:
                dataSource = new StorageTodoItemDataSource();
                break;
            default:
                throw new Error("Invalid type");
        }
        const repository = new TodoItemRepository(dataSource);
        return new TodoItemController(repository);
    }
}
