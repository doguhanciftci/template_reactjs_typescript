'use client'

import { TodoItemControllerFactory, TodoItemDataSourceType } from "~/infrastructure/factory/TodoItemControllerFactory";
import { TodosPage } from "~/ui/todos";

const todoItemControllerFactory = new TodoItemControllerFactory();
const todoItemController = todoItemControllerFactory.create(TodoItemDataSourceType.LocalStorage);

export default function Todos() {

    return (
        <TodosPage todoItemController={todoItemController} />
    )
}