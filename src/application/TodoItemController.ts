import { TodoItem } from "~/domain/entities";
import { GenericRepository } from "~/domain/repository";
import { CreateTodoItemUC, DeleteTodoItemUC, FindAllTodoItemsUC, UpdateTodoItemUC } from "~/domain/usecases";
import { EventEmitter } from "events";

export enum TodoItemControllerEvents {
    CREATED = 'created',
    DELETED = 'deleted',
    UPDATED = 'updated',
}


export class TodoItemController {

    private repository: GenericRepository<TodoItem>;
    eventEmitter: EventEmitter;

    constructor(repository: GenericRepository<TodoItem>) {
        this.repository = repository;
        this.eventEmitter = new EventEmitter();
    }

    async create(item: TodoItem): Promise<boolean> {
        const useCase = new CreateTodoItemUC(this.repository);
        const result = await useCase.execute(item);
        if (result) {
            this.eventEmitter.emit(TodoItemControllerEvents.CREATED, item);
        }
        return result;
    }

    async delete(item: TodoItem): Promise<boolean> {
        const useCase = new DeleteTodoItemUC(this.repository);
        const result = await useCase.execute(item);
        if (result) {
            this.eventEmitter.emit(TodoItemControllerEvents.DELETED, item);
        }
        return result;
    }

    async findAll(): Promise<TodoItem[]> {
        const useCase = new FindAllTodoItemsUC(this.repository);
        return await useCase.execute();
    }

    async update(item: TodoItem): Promise<boolean> {
        const useCase = new UpdateTodoItemUC(this.repository);
        const result = await useCase.execute(item);
        if (result) {
            this.eventEmitter.emit(TodoItemControllerEvents.UPDATED, item);
        }
        return result;
    }

}
