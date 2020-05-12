import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import { useDispatch } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { onCloseModal } from '../../redux/actions';

const ModalWindow = ({onEditClicked}) => {
    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useDispatch();
    const showModal = () => {
      return onEditClicked;
    };
  
    const hideModal = () => {
      dispatch(onCloseModal())
    };
  
    return (
      <>
        <Modal show={onEditClicked} onHide={hideModal}>
          <Modal.Header>
            <Modal.Title>Hi</Modal.Title>
          </Modal.Header>
          <Modal.Body>The body</Modal.Body>
          <Modal.Footer>
            <button onClick={hideModal}>Cancel</button>
            <button>Save</button>
          </Modal.Footer>
        </Modal>
      </>
    );
  };
export default ModalWindow;