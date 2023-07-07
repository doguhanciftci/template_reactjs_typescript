import { Button, Stack, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { TodoItem } from '~/domain/entities';
import { useTodoItemController } from '~/ui/context';

export function CreateTodoItemForm() {

    const [id, setId] = useState<string>('');
    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');

    const { todoItemController } = useTodoItemController();

    const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const todoItem = new TodoItem(id, title, description);
        todoItemController.create(todoItem)
            .then((success) => {
                if (success) {
                    setId('');
                    setTitle('');
                    setDescription('');
                }
            });
    }

    return (
        <form onSubmit={handleOnSubmit}>
            <Stack sx={{ paddingBottom: 2 }} spacing={2} alignItems='center'>
                <Typography variant="h2" component="div" gutterBottom>
                    Create To-Do Item
                </Typography>
                <TextField name="id" label="Id" variant="outlined" color='primary' value={id} onChange={(event) => setId(event.target.value)} />
                <TextField name="title" label="Title" variant="outlined" value={title} onChange={(event) => setTitle(event.target.value)} />
                <TextField name="description" label="Description" variant="outlined" value={description} onChange={(event) => setDescription(event.target.value)} />
                <Button type="submit" variant='contained'>Create</Button>
            </Stack>
        </form>
    )
}