import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import { useDispatch } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { onCloseModal } from '../../redux/actions';

const ModalWindow = ({onEditClicked, hideModalWindow}) => {
    const dispatch = useDispatch();
    
    return (
        <>
            <Modal show={onEditClicked} onHide={hideModalWindow}>
                <Modal.Header>
                    <Modal.Title>Hi</Modal.Title>
                </Modal.Header>
                <Modal.Body>The body</Modal.Body>
                <Modal.Footer>
                    <button onClick={hideModalWindow}>Cancel</button>
                    <button>Save</button>
                </Modal.Footer>
            </Modal>
        </>
    )
};

export default ModalWindow;