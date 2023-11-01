import { createContext, useContext } from 'react';
import { TodoItemController } from '~/application/TodoItemController';
import { TodoItemControllerFactory, TodoItemDataSourceType } from '~/infrastructure/factory/TodoItemControllerFactory';

export interface TodoItemControllerContextInterface {
    todoItemController: TodoItemController;
}

const TodoItemControllerContext = createContext<TodoItemControllerContextInterface>({} as TodoItemControllerContextInterface);

const todoItemControllerFactory = new TodoItemControllerFactory();
const todoItemController = todoItemControllerFactory.create(TodoItemDataSourceType.LocalStorage);

export const TodoItemControllerProvider = ({ children }: { children: any }) => {
    const value = {
        todoItemController,
    };

    return <TodoItemControllerContext.Provider value={value}>{children}</TodoItemControllerContext.Provider>;
};

export const useTodoItemController = () => useContext(TodoItemControllerContext);
