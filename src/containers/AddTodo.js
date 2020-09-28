import React from 'react'
import { connect } from 'react-redux'

import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'

import { addTodoAction } from '../redux/actions'


let AddTodo = ({ dispatch }) => {

    let input;

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!input.value.trim())
            return

        dispatch(addTodoAction(input.value))
        input.value = ''
    }


    return <>

        <Form onSubmit={handleSubmit}>

            <Form.Group controlId="formBasicEmail">

                <InputGroup>

                    <Form.Control
                        type="text"
                        placeholder="Entrer une tache..."
                        ref={node => { input = node }}
                    />

                    <InputGroup.Append>
                        <Button type="submit">Ajouter</Button>
                    </InputGroup.Append>

                </InputGroup>

            </Form.Group>

        </Form>

    </>
}

AddTodo = connect()(AddTodo)

export default AddTodo