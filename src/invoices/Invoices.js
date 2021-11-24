import React, { useState } from 'react';
import './Invoices.css';
import InvoicesHeader from './InvoicesHeader';
import InvoicesList from './InvoicesList';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Form from '../components/Form';


function Invoices(props) {
  console.log('INVOICESSS')

  return (
    <React.Fragment>
      <InvoicesHeader />
      <InvoicesList invoices={props.invoices} />
      <Routes>
        <Route path="/newInvoice" element={<Form type={'newInvoice'} />} />
      </Routes>
    </React.Fragment>
  );
};

export default Invoices;
