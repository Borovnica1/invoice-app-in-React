import React, { useState } from 'react';
import './Invoice.css';
import GoBack from './GoBack';
import InvoiceHeader from './InvoiceHeader';
import InvoiceContext from '../InvoicesContext';
import InvoiceContent from './InvoiceContent';
import { useParams } from "react-router-dom";


function getInvoice(id, invoices) {
  return invoices.find(
    invoice => invoice.id === id
  );
}

function Invoice() {
  const params = useParams();
  const value = React.useContext(InvoiceContext);
  const invoice = getInvoice(params.invoiceId, value);
  console.log('imali sto?', value, invoice)

  return (
    <React.Fragment>
      <GoBack />
      <InvoiceHeader invoice={invoice} />
      <InvoiceContent invoice={invoice} />
    </React.Fragment>
  );
};

export default Invoice;
