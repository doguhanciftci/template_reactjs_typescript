import { TodoItem } from '../entities/TodoItem';
import { GenericRepository } from '../repository/GenericRepository';
import { UseCase } from './UseCase';

export class FindAllTodoItemsUC implements UseCase<void, TodoItem[]> {
    private repository: GenericRepository<TodoItem>;

    constructor(repository: GenericRepository<TodoItem>) {
        this.repository = repository;
    }

    async execute(): Promise<TodoItem[]> {
        return await this.repository.findAll();
    }
}
