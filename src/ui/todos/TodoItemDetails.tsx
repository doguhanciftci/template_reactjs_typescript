import { Clear, Edit } from '@mui/icons-material';
import { Card, CardContent, CardHeader, IconButton, Typography } from '@mui/material';
import { TodoItem } from '~/domain/entities';
import { useTodoItemController } from '~/ui/context';

export function TodoItemDetails({ todoItem }: { todoItem: TodoItem }) {

    const { todoItemController } = useTodoItemController();

    const handleDelete = () => {
        todoItemController.delete(todoItem);
    }

    const handleUpdate = () => {
        todoItemController.update(todoItem);
    }

    return (
        <Card sx={{ mb: 5 }}>
            <CardHeader
                title={todoItem.title}
                action={
                    <>
                        <IconButton onClick={handleUpdate}>
                            <Edit />
                        </IconButton>
                        <IconButton onClick={handleDelete}>
                            <Clear />
                        </IconButton>
                    </>
                }
            />
            <CardContent>
                <Typography variant="body1" component="div" gutterBottom>
                    {todoItem.description}
                </Typography>
            </CardContent>
        </Card>
    )
}