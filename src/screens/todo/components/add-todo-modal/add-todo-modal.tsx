import React from 'react';
import { Modal, Button, InputGroup, FormControl, Form } from 'react-bootstrap'
import { Todos } from '../../../../types/todo';


interface Props {
    closeModal: () => void;
    isActive: boolean;
    addTask: (todo: string) => void;
}

const AddTodoModal: React.FC<Props> = (props) => {
    const { closeModal, isActive, addTask} = props;

    const [task, setTask] = React.useState('')


    const handleInputChange = (event: any): any => {
        setTask(event.target.value);
    }

    const saveTask = (event: any) => {
        event.preventDefault()
        addTask(task);
    }

    return (<div>
        <Modal
            show={isActive}
            onHide={closeModal}>
            <Modal.Header closeButton>
                <Modal.Title>Agregar nueva tarea</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form onSubmit={saveTask}>
                    <InputGroup className="mb-3">
                        <FormControl
                            placeholder="Escribe la tarea"
                            aria-describedby="basic-addon2"
                            onChange={handleInputChange}
                            required
                        />
                        <InputGroup.Append>
                            <Button variant="outline-secondary" type="submit" >agregar</Button>
                        </InputGroup.Append>
                    </InputGroup>
                </Form>
            </Modal.Body>
        </Modal>

    </div>)
}

export default AddTodoModal;