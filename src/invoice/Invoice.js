import React, { useState } from 'react';
import './Invoice.css';
import GoBack from './GoBack';
import InvoiceHeader from './InvoiceHeader';
import InvoiceContext from '../InvoicesContext';
import InvoiceContent from './InvoiceContent';
import { useParams } from "react-router-dom";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Form from '../components/Form';


function getInvoice(id, invoices) {
  return invoices.find(
    invoice => invoice.id === id
  );
}

function Invoice() {
  const params = useParams();
  const value = React.useContext(InvoiceContext);
  const invoice = getInvoice(params.invoiceId, value.invoices);

  React.useEffect(() => {
    value.setInvoiceSelected(invoice);
  }, [])

  return (
    <React.Fragment>
      <GoBack />
      <InvoiceHeader invoice={invoice} />
      <InvoiceContent invoice={invoice} />
      <Routes>
        <Route path="/editInvoice" element={<Form type={'editInvoice'} invoice={invoice} />} />
      </Routes>
    </React.Fragment>
  );
};

export default Invoice;
