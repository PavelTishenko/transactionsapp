import React from 'react';

import './App.css';

import * as ReactBootstrap from 'react-bootstrap';
import Input from './components/input-component';
import NewTransaction from './components/newTransaction-component';
const App = () => {
  const { Container, Row, Col } = ReactBootstrap;
  return (
    <Container className="App">
      <Row>
        <Col sm={4}>
          <NewTransaction/>
        </Col>
        <Col md={8}>
          <Input  />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
