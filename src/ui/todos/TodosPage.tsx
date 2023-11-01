import { Container, Typography } from '@mui/material';
import { useCallback, useEffect, useState } from 'react';
import { TodoItemControllerEvents } from '~/application/TodoItemController';
import { TodoItem } from '~/domain/entities';
import { useTodoItemController } from '~/ui/context';
import { CreateTodoItemForm } from './CreateTodoItemForm';
import { TodoItemList } from './TodoItemList';

export function TodosPage() {
    const { todoItemController } = useTodoItemController();

    const [todoItems, setTodoItems] = useState<TodoItem[]>([]);

    const fetchTodoItems = useCallback(() => {
        todoItemController.findAll().then((todoItems) => {
            setTodoItems(todoItems);
        });
    }, [todoItemController, setTodoItems]);

    useEffect(() => {
        fetchTodoItems();

        todoItemController.eventEmitter.on(TodoItemControllerEvents.CREATED, fetchTodoItems);
        todoItemController.eventEmitter.on(TodoItemControllerEvents.DELETED, fetchTodoItems);
        todoItemController.eventEmitter.on(TodoItemControllerEvents.UPDATED, fetchTodoItems);

        return () => {
            todoItemController.eventEmitter.off(TodoItemControllerEvents.CREATED, fetchTodoItems);
            todoItemController.eventEmitter.off(TodoItemControllerEvents.DELETED, fetchTodoItems);
            todoItemController.eventEmitter.off(TodoItemControllerEvents.UPDATED, fetchTodoItems);
        };
    }, [todoItemController, fetchTodoItems]);

    return (
        <Container sx={{ mb: 10 }}>
            <Typography
                variant="h1"
                component="div"
                gutterBottom
            >
                Todos
            </Typography>
            <hr />
            <CreateTodoItemForm />
            <hr />
            <TodoItemList todoItems={todoItems} />
        </Container>
    );
}
