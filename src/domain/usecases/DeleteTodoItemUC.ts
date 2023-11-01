import { TodoItem } from '../entities/TodoItem';
import { GenericRepository } from '../repository/GenericRepository';
import { UseCase } from './UseCase';

export class DeleteTodoItemUC implements UseCase<TodoItem, boolean> {
    private repository: GenericRepository<TodoItem>;

    constructor(repository: GenericRepository<TodoItem>) {
        this.repository = repository;
    }

    async execute(item: TodoItem): Promise<boolean> {
        return await this.repository.delete(item.id);
    }
}
