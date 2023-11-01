import { TodoItem } from '~/domain/entities';
import { GenericRepository } from '~/domain/repository';
import { UseCase } from '~/domain/usecases/UseCase';

export class CreateTodoItemUC implements UseCase<TodoItem, boolean> {
    private repository: GenericRepository<TodoItem>;

    constructor(repository: GenericRepository<TodoItem>) {
        this.repository = repository;
    }

    async execute(item: TodoItem): Promise<boolean> {
        return await this.repository.create(item);
    }
}
