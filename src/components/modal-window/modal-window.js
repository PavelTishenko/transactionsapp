import React from 'react';
import Modal from 'react-bootstrap/Modal';

import { useDispatch } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { onCloseModal, onEditApproved } from '../../redux/actions';

const ModalWindow = ({onEditClicked, onChangeStatus}) => {
    const dispatch = useDispatch();
    
    const hideModal = () => {
      dispatch(onCloseModal());
    };

    const editApprove = () => {
        dispatch(onEditApproved());
        dispatch(onCloseModal());
        onChangeStatus();
    };
  
    return (
      <>
        <Modal show={onEditClicked} onHide={hideModal}>
          <Modal.Header>
            <Modal.Title>Hi</Modal.Title>
          </Modal.Header>
          <Modal.Body>Do you want to change status of transaction ?</Modal.Body>
          <Modal.Footer>
            <button onClick={hideModal}>Cancel</button>
            <button onClick={editApprove}>Yes</button>
          </Modal.Footer>
        </Modal>
      </>
    );
  };
export default ModalWindow;