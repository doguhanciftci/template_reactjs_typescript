import { TodoItemControllerProvider, useTodoItemController } from './TodoItemControllerContext';

function ContextProvider({ children }: { children: any }) {
    return (
        <>
            <TodoItemControllerProvider>{children}</TodoItemControllerProvider>
        </>
    );
}

export { ContextProvider, useTodoItemController };
