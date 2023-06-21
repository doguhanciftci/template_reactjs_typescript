import { TodoItem } from "./TodoItem";

export type TodoList = {
    id: string;
    title: string;
    description: string;
    items: TodoItem[];
    createdAt: Date;
    updatedAt: Date;
};