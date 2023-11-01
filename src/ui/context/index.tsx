import { PropsWithChildren } from 'react';
import { TodoItemControllerProvider, useTodoItemController } from './TodoItemControllerContext';

function ContextProvider({ children }: PropsWithChildren) {
    return (
        <>
            <TodoItemControllerProvider>{children}</TodoItemControllerProvider>
        </>
    );
}

export { ContextProvider, useTodoItemController };
