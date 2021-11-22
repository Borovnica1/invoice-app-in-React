import React, { useState } from 'react';
import './Invoice.css';
import { useNavigate } from "react-router-dom";
import InvoicesContext from '../InvoicesContext';

function DeleteBtn(props) {
  let navigate = useNavigate();
  const value = React.useContext(InvoicesContext);

  let eventHandler;
  const openWarningModal = function() {
    document.querySelector('.modal').classList.add('modal--active');
  }
  const deleteInvoice = function() {
    const invoiceIndex = value.invoices.findIndex((el) => el.id === value.invoiceSelectedId);

    value.invoices.splice(invoiceIndex, 1);
    value.setInvoices(value.invoices);

    document.querySelector('.modal').classList.remove('modal--active');
    navigate("../invoices", { replace: true });
  }
  if (props.step === 1) {
    eventHandler = openWarningModal;
  } else {
    eventHandler = deleteInvoice;
  }

  return (
    <button className="btn btn-5" onClick={() => eventHandler()}>
      Delete
    </button>
  );
};

export default DeleteBtn;
