import React from 'react'
import PropTypes from 'prop-types'

import ListGroup from 'react-bootstrap/ListGroup'
import Jumbotron from 'react-bootstrap/Jumbotron'

import Todo from './Todo'

const TodoList = ({ todosList }) => {

    return <Jumbotron>

        {
            todosList.length > 0
                ? (
                    <ListGroup>
                        {todosList.map((todo, index) => <Todo key={index} todo={todo} />)}
                    </ListGroup>

                )
                : (
                    <h1>Aucune tâche.</h1>
                )
        }
    </Jumbotron>
}

TodoList.propTypes = {
    todosList: PropTypes.arrayOf(
        PropTypes.shape({
            _id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
        }).isRequired
    ).isRequired
}

export default TodoList