import React from 'react';
import { getTodoFalse } from '../../api/todo';
import { Todos } from '../../types/todo';
import { Button, Spinner } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const Home: React.FC = () => {

    const [todos, setTodos] = React.useState<Todos[]>([]);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        getTodoFalse().then(response => response.json())
            .then((results: Todos[]) => setTodos(results))
            setLoading(false);
    }, [])


    return (<div>
        {loading ? <Spinner animation="border" variant="primary" /> :
            <div> <h1>Bienvenido tienes {todos.length} tareas pendientes</h1>
                <Link to={`/list-todo/`}>
                    <Button variant="light">Ver mas</Button>
                </Link>
            </div>}
    </div>);
}

export default Home;