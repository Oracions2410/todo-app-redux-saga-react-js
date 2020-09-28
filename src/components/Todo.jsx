import React from 'react'
import PropTypes from 'prop-types'
import ListCroup from 'react-bootstrap/ListGroup'

const Todo = ({ todo }) => <ListCroup.Item>{todo.title}</ListCroup.Item>

Todo.propTypes = {
    todo: PropTypes.shape({
        _id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired
    })
}

export default Todo