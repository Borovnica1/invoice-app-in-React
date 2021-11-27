import React from 'react';
import './Invoices.css';
import InvoicesHeaderFilter from './InvoicesHeaderFilter';
import NewInvoice from './NewInvoice';

function InvoicesHeader() {
  return (
    <div className="invoices__header">
      <InvoicesHeaderFilter />
      <NewInvoice />
    </div>
  );
}

export default InvoicesHeader;
