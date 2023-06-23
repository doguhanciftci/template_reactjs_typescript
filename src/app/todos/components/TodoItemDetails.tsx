import React from 'react';
import { TodoItem } from '~/domain/entities';

export function TodoItemDetails({ todoItem }: { todoItem: TodoItem }) {

    return (
        <div>
            <h1>TodoItemDetails</h1>
            <p>{todoItem.title}</p>
            <p>{todoItem.description}</p>
        </div>
    )
}