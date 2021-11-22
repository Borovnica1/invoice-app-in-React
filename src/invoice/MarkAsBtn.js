import React, { useState } from 'react';
import './Invoice.css';
import InvoicesContext from '../InvoicesContext';

function MarkAsBtn(props) {
  const value = React.useContext(InvoicesContext);

  const changeStatus = function() {
    const invoiceIndex = value.invoices.findIndex((el) => el.id === value.invoiceSelected.id);

    value.setInvoices(prevState => {
      let newState;
      newState = prevState.map(el => {
        if (el.id === value.invoiceSelected.id) {
          el.status = el.status !== 'paid' ? 'paid' : 'pending';
        }
        return el;
      });
      return newState;
    })
  };

  return (
    <button className="btn btn-2" onClick={() => changeStatus()}>
      Mark as {value.invoiceSelected.status !== 'paid' ? 'Paid' : 'Pending'}
    </button>
  );
};

export default MarkAsBtn;
