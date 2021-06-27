import React from 'react';
import { getTodo } from '../../api/todo';
import { Todos } from '../../types/todo';
import { Button, Card, Spinner } from 'react-bootstrap';
import './list-todo.scss';
import AddTodoModal from './components/add-todo-modal/add-todo-modal'



const ListTodo: React.FC = () => {
    const [todos, setTodos] = React.useState<Todos[]>([]);
    const [openModal, setOpenModal] = React.useState(false);
    const [loading, setLoading] = React.useState(true);


    React.useEffect(() => {
        getTodo().then(response => response.json())
            .then((results: Todos[]) => setTodos(results.sort(todo => todo.completed ? 1 : -1)))
            setLoading(false);
    }, [])

    const markTodo = (index: number) => {
        const newTodos = [...todos];
        newTodos[index].completed = !newTodos[index].completed;
        setTodos(newTodos);
    };

    // const removeTodo = (index: number) => {
    //     const newTodos = [...todos];
    //     newTodos.splice(index, 1);
    //     setTodos(newTodos);
    // };

    const handleShow = (): void => {
        setOpenModal(true);
    };
    const handleClose = (): void => {
        setOpenModal(false);
    };

    const saveTodo = (title: string): void => {
        const todo: Todos = {
            completed: false,
            id: 201,
            title: title,
            userId: 1,
        }
        todos.unshift(todo)
        setOpenModal(false);
    }

    return (<div style={{ width: "80%" }}>
        <AddTodoModal isActive={openModal} closeModal={handleClose} addTask={saveTodo} ></AddTodoModal>
        {loading ? <Spinner animation="border" variant="primary" /> :
            <div>
                <div className="container-button">
                    <Button className="button-modal" variant="primary" onClick={handleShow}>Agregar tarea</Button>
                </div>
                {todos.map((todo, index) => {
                    return <Card key={index}>
                        <Card.Body>
                            <div className="todo">
                                <span style={{ textDecoration: todo.completed ? "line-through" : "" }}>{todo.title}</span>
                                <div>
                                    {!todo.completed ? <Button variant="outline-success" onClick={() => markTodo(index)}>✓</Button> :
                                        <Button variant="outline-danger" onClick={() => markTodo(index)}>X</Button>}

                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                })}
            </div>
        }
    </div>);
}

export default ListTodo;