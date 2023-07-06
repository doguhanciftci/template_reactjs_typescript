import { Button, Stack, TextField, Typography } from '@mui/material';
import { TodoItemController } from '~/application/TodoItemController';
import { TodoItem } from '~/domain/entities';
import { useTodoItemController } from '~/ui/context';

export function CreateTodoItemForm() {

    const { todoItemController } = useTodoItemController();

    const handleOnSubmit = (id: string, title: string, description: string) => {
        const todoItem = new TodoItem(id, title, description);
        todoItemController.create(todoItem);
    }

    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            const id = event.currentTarget.id.value;
            const title = event.currentTarget.title.value;
            const description = event.currentTarget.description.value;
            handleOnSubmit(id, title, description);
        }}>
            <Stack sx={{ backgroundColor: 'white', color: 'black', paddingBottom: 2 }} spacing={2} alignItems='center'>
                <Typography variant="h2" component="div" gutterBottom>
                    Create To-Do Item
                </Typography>
                <TextField name="id" label="Id" variant="outlined" color='primary' />
                <TextField name="title" label="Title" variant="outlined" />
                <TextField name="description" label="Description" variant="outlined" />
                <Button type="submit" variant='contained'>Create</Button>
            </Stack>
        </form>
    )
}