export const getTodo = () => {
    return fetch(`https://jsonplaceholder.typicode.com/todos?userId=1`);

};

export const getTodoFalse = () => {
    return fetch(`https://jsonplaceholder.typicode.com/todos?userId=1&completed=false`);

};

export const postTodos = (title: string) => {
    return fetch(`https://jsonplaceholder.typicode.com/todos`, {
        method: 'post',
        headers:{'Content-Type': 'application/json'},
        body: JSON.stringify({
            title: title,
        })
    });

};