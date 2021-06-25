import { Todos } from "../types/todo";

export const getTodo = () => {
    return fetch(`https://jsonplaceholder.typicode.com/todos?userId=1`);

};

export const getTodoFalse = () => {
    return fetch(`https://jsonplaceholder.typicode.com/todos?userId=1&completed=false`);

};