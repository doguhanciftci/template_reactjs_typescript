import { TodoItemController } from '~/application/TodoItemController';
import { TodoItem } from '~/domain/entities';

export function CreateTodoItemForm({ todoItemController }: { todoItemController: TodoItemController }) {

    const handleOnSubmit = (id: string, title: string, description: string) => {
        const todoItem = new TodoItem(id, title, description);
        todoItemController.create(todoItem);
    }

    return (
        <>
            <h1>CreateTodoItemForm</h1>

            <form onSubmit={(event) => {
                event.preventDefault();
                const id = event.currentTarget.id.value;
                const title = event.currentTarget.title.value;
                const description = event.currentTarget.description.value;
                handleOnSubmit(id, title, description);
            }}>
                <input type="text" name="id" placeholder="Id" />
                <br />
                <input type="text" name="title" placeholder="Title" />
                <br />
                <input type="text" name="description" placeholder="Description" />
                <br />
                <button type="submit">Create</button>
            </form>
        </>
    )
}