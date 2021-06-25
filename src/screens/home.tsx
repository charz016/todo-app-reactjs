import React from 'react';
import { getTodoFalse } from '../api/todo';
import { Todos } from '../types/todo';
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const Home: React.FC = () => {

    const [todos, setTodos] = React.useState<Todos[]>([]);

    React.useEffect(() => {
        getTodoFalse().then(response => response.json())
            .then((results: Todos[]) => setTodos(results))
    }, [])


    return (<div>
        <h1>Bienvenido tienes {todos.length} tareas pendientes</h1>
        <Link to={`/list-todo/`}>
            <Button variant="light">Ver mas</Button>
        </Link>
    </div>);
}

export default Home;