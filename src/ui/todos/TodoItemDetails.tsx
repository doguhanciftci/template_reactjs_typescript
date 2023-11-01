import { Clear, Edit } from '@mui/icons-material';
import { Card, CardContent, CardHeader, IconButton, Typography } from '@mui/material';
import { useState } from 'react';
import { TodoItem } from '~/domain/entities';
import { useTodoItemController } from '~/ui/context';
import { EditTodoItemForm } from './EditTodoItemForm';

export function TodoItemDetails({ todoItem }: { todoItem: TodoItem }) {
    const { todoItemController } = useTodoItemController();

    const handleDelete = () => {
        todoItemController.delete(todoItem);
    };

    const [openEdit, setOpenEdit] = useState<boolean>(false);

    return (
        <>
            <Card sx={{ mb: 5, width: '100%' }}>
                <CardHeader
                    title={todoItem.title}
                    action={
                        <>
                            <IconButton onClick={() => setOpenEdit(true)}>
                                <Edit />
                            </IconButton>
                            <IconButton onClick={handleDelete}>
                                <Clear />
                            </IconButton>
                        </>
                    }
                />
                <CardContent>
                    <Typography
                        variant="body1"
                        component="div"
                        gutterBottom
                    >
                        {todoItem.description}
                    </Typography>
                </CardContent>
            </Card>
            {openEdit && (
                <EditTodoItemForm
                    open={openEdit}
                    handleClose={() => setOpenEdit(false)}
                    todoItem={todoItem}
                />
            )}
        </>
    );
}
