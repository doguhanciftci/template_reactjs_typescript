import { TodoItem } from "~/domain/entities";
import { GenericRepository } from "~/domain/repository";
import { CreateTodoItemUC, DeleteTodoItemUC, FindAllTodoItemsUC, UpdateTodoItemUC } from "~/domain/usecases";

export class TodoItemController {

    private repository: GenericRepository<TodoItem>;

    constructor(repository: GenericRepository<TodoItem>) {
        this.repository = repository;
    }

    async create(item: TodoItem): Promise<boolean> {
        const useCase = new CreateTodoItemUC(this.repository);
        return await useCase.execute(item);
    }

    async delete(item: TodoItem): Promise<boolean> {
        const useCase = new DeleteTodoItemUC(this.repository);
        return await useCase.execute(item);
    }

    async findAll(): Promise<TodoItem[]> {
        const useCase = new FindAllTodoItemsUC(this.repository);
        return await useCase.execute();
    }

    async update(item: TodoItem): Promise<boolean> {
        const useCase = new UpdateTodoItemUC(this.repository);
        return await useCase.execute(item);
    }

}
