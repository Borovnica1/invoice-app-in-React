import React from 'react';
import './Modal.css';
import { Link } from 'react-router-dom';
import EditBtn from '../invoice/EditBtn';
import DeleteBtn from '../invoice/DeleteBtn';
import InvoicesContext from '../InvoicesContext';

function Modal() {
  const value = React.useContext(InvoicesContext);

  const closeModal = (e) => {
    if (e.target.classList.contains('modal')) document.querySelector('.modal').classList.remove('modal--active');
  }

  return (
    <div className="modal" onClick={(e) => closeModal(e)}>
      <div className="box">
        <h2>Confirm Deletion</h2>
        <h5>Are you sure you want to delete invoice #{value.invoiceSelectedId}? This action cannot be undone.</h5>
        <div className="modal__btns">
          <EditBtn action={'closeModal'}>Cancel</EditBtn>
          <DeleteBtn step={2}/>
        </div>
      </div>
    </div>
  );
}

export default Modal;
