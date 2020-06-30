import React from 'react';
import * as ReactBootstrap from 'react-bootstrap';
const NewTransBtn = () => {
    const {Container, Button} = ReactBootstrap;
    return(
        <Container>
            <Button variant="outline-primary">Add new Transaction</Button>
            <Button variant="outline-success">Cancel</Button>
        </Container>
    )
};

export default NewTransBtn;