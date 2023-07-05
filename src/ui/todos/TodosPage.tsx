import { useCallback, useEffect, useState } from "react";
import { TodoItemController, TodoItemControllerEvents } from '~/application/TodoItemController';
import { TodoItem } from "~/domain/entities";
import { CreateTodoItemForm } from "./CreateTodoItemForm";
import { TodoItemDetails } from "./TodoItemDetails";

export function TodosPage({ todoItemController }: { todoItemController: TodoItemController }) {

    const [todoItems, setTodoItems] = useState<TodoItem[]>([]);

    const fetchTodoItems = useCallback(() => {
        todoItemController
            .findAll()
            .then((todoItems) => {
                setTodoItems(todoItems);
            });
    }, [todoItemController]);

    useEffect(() => {
        fetchTodoItems();

        todoItemController.eventEmitter.on(TodoItemControllerEvents.CREATED, fetchTodoItems);
        todoItemController.eventEmitter.on(TodoItemControllerEvents.DELETED, fetchTodoItems);
        todoItemController.eventEmitter.on(TodoItemControllerEvents.UPDATED, fetchTodoItems);

        return () => {
            todoItemController.eventEmitter.off(TodoItemControllerEvents.CREATED, fetchTodoItems);
            todoItemController.eventEmitter.off(TodoItemControllerEvents.DELETED, fetchTodoItems);
            todoItemController.eventEmitter.off(TodoItemControllerEvents.UPDATED, fetchTodoItems);
        }
    }, [todoItemController, fetchTodoItems]);

    return (
        <div>
            <h1>Todos</h1>
            <h2>TodoItems</h2>
            <hr />
            <ul>
                {
                    todoItems.map((todoItem) =>
                        <li key={todoItem.id}>
                            <TodoItemDetails todoItem={todoItem} />
                        </li>
                    )
                }
            </ul>

            <hr />
            <CreateTodoItemForm todoItemController={todoItemController} />
        </div>
    )
}