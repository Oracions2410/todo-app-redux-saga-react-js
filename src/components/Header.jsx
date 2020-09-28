import React from 'react'
import PropTypes from 'prop-types'

const Header = ({ description }) => {
    return <>
        <h2>Todo App</h2>
        <span>{description}</span>
    </>
}

Header.propTypes = {
    description: PropTypes.string.isRequired
}

export default Header



