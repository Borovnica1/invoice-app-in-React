import React from 'react';
import './Invoices.css';
import illustration from '../assets/illustration-empty.svg';

function InvoiceEmpty() {
  return (
    <div className="invoice-empty">
      <img src={illustration} />
      <h3>There is nothing here</h3>
      
      <h5>Create an invoice by clicking the <br/> <span className="bold-text">New Invoice</span> button and get started</h5>
    </div>
  );
}

export default InvoiceEmpty;
