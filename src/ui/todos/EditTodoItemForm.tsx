import { Button, Dialog, DialogContent, DialogTitle, Stack, TextField } from '@mui/material';
import { useState } from 'react';
import { TodoItem } from '~/domain/entities';
import { useTodoItemController } from '~/ui/context';

export function EditTodoItemForm({ open, handleClose, todoItem }: { open: boolean, handleClose: () => void, todoItem: TodoItem }) {

    const [title, setTitle] = useState<string>(todoItem.title);
    const [description, setDescription] = useState<string>(todoItem.description);

    const { todoItemController } = useTodoItemController();

    const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        event.stopPropagation();
        todoItem.title = title;
        todoItem.description = description;
        todoItemController.update(todoItem)
            .then((success) => {
                success && handleClose();
            });
        handleClose();
    }

    return (
        <Dialog open={open}>
            <DialogTitle>Edit To-Do Item</DialogTitle>
            <DialogContent>
                <form onSubmit={handleOnSubmit}>
                    <Stack sx={{ paddingBottom: 2 }} spacing={2} alignItems='center'>
                        <TextField name="title" label="Title" variant="outlined" value={title} onChange={(event) => setTitle(event.target.value)} />
                        <TextField name="description" label="Description" variant="outlined" value={description} onChange={(event) => setDescription(event.target.value)} />
                        <Button type="submit" variant='contained'>Update</Button>
                    </Stack>
                </form>
            </DialogContent>
        </Dialog>
    )
}