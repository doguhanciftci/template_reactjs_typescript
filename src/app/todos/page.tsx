'use client'

import { useEffect, useState } from "react";
import { TodoItem } from "~/domain/entities";
import { TodoItemControllerFactory, TodoItemDataSourceType } from "~/infrastructure/factory/TodoItemControllerFactory";
import { CreateTodoItemForm } from "./components/CreateTodoItemForm";
import { TodoItemDetails } from "./components/TodoItemDetails";

const todoItemControllerFactory = new TodoItemControllerFactory();
const todoItemController = todoItemControllerFactory.create(TodoItemDataSourceType.LocalStorage);

export default function TodosPage() {

    const [todoItems, setTodoItems] = useState<TodoItem[]>([]);

    useEffect(() => {
        todoItemController.findAll().then((todoItems) => {
            setTodoItems(todoItems);
        });
    }, []);

    return (
        <div>
            <h1>Todos</h1>
            <ul>
                {todoItems.map((todoItem) => {
                    return <li key={todoItem.id}>
                        <TodoItemDetails todoItem={todoItem} />
                    </li>
                }
                )}
            </ul>

            <hr />
            <CreateTodoItemForm todoItemController={todoItemController} />
        </div>
    )
}