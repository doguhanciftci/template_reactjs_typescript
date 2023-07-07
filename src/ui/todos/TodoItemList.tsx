import { List, ListItem, Typography } from "@mui/material";
import { TodoItem } from "~/domain/entities";
import { TodoItemDetails } from "./TodoItemDetails";

export function TodoItemList({ todoItems }: { todoItems: TodoItem[] }) {

    if (todoItems.length === 0)
        return <div>No todo items</div>

    return (
        <>
            <Typography variant="h2" component="div" gutterBottom>
                To-Do Items
            </Typography>

            <List>
                {
                    todoItems.map((todoItem) =>
                        <ListItem key={todoItem.id}>
                            <TodoItemDetails todoItem={todoItem} />
                        </ListItem>
                    )
                }
            </List>
        </>
    )
}