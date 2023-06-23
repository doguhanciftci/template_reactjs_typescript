import { TodoItemController } from '~/application/TodoItemController';
import { TodoItem } from '~/domain/entities';

export function CreateTodoItemForm({ todoItemController }: { todoItemController: TodoItemController }) {

    const createTodoItem = (id: string, title: string, description: string) => {
        const todoItem = new TodoItem(id, title, description);
        todoItemController.create(todoItem).then((success) => {
            if (success) {
                alert("Todo item created")
            } else {
                alert("Failed to create todo item");
            }
        });
    }

    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            const id = event.target.id.value;
            const title = event.target.title.value;
            const description = event.target.description.value;
            createTodoItem(id, title, description);
        }}>
            <input type="text" name="id" placeholder="Id" />
            <br />
            <input type="text" name="title" placeholder="Title" />
            <br />
            <input type="text" name="description" placeholder="Description" />
            <br />
            <button type="submit">Create</button>
        </form>
    )
}