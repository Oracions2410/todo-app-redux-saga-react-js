import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import AddTodo from './containers/AddTodo'
import Header from './components/Header'
import TodoListContainer from './containers/TodoListContainer'

class App extends Component {

  state = {

  }

  render() {
    return <>
      <Header description="Planifiez et gérer vos tache pour la journée" />
      <Container>

        <Row className="row">
          <Col xs={12}>
            <h1>BIENVENUE</h1>
            <AddTodo />
            <TodoListContainer />
          </Col>
        </Row>

      </Container>
    </>
  }

}

export default App;
