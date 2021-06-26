import React from 'react';
import { getTodo } from '../../api/todo';
import { Todos } from '../../types/todo';
import { Button, Card } from 'react-bootstrap';
import './list-todo.scss';
import AddTodoModal from './components/add-todo-modal/add-todo-modal'



const ListTodo: React.FC = () => {
    const [todos, setTodos] = React.useState<Todos[]>([]);
    const [openModal, setOpenModal] = React.useState(false);


    React.useEffect(() => {
        getTodo().then(response => response.json())
            .then((results: Todos[]) => setTodos(results.sort(todo => todo.completed ? -1 : 1)))
    }, [])

    const markTodo = (index: number) => {
        const newTodos = [...todos];
        newTodos[index].completed = !newTodos[index].completed;
        setTodos(newTodos);
    };

    const removeTodo = (index: number) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };

    const handleShow = (): void => {
        setOpenModal(true);
    };
    const handleClose = (): void => {
        setOpenModal(false);
    };

    const saveTodo = (todo: string): void => {
        console.log(todo);
        setOpenModal(false);
    }

    return (<div style={{ width: "80%" }}>
        <AddTodoModal isActive={openModal} closeModal={handleClose} addTask={saveTodo} ></AddTodoModal>
        <div className="container-button">
            <Button className="button-modal" variant="primary" onClick={handleShow}>Agregar tarea</Button>
        </div>
        {todos.map((todo, index) => {
            return <Card key={index}>
                <Card.Body>
                    <div className="todo">
                        <span style={{ textDecoration: !todo.completed ? "line-through" : "" }}>{todo.title}</span>
                        <div>
                            <Button variant="outline-success" onClick={() => markTodo(index)}>✓</Button>{' '}
                        </div>
                    </div>
                </Card.Body>
            </Card>
        })}
    </div>);
}

export default ListTodo;