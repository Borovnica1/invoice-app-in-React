import React, { useState } from 'react';
import './Invoices.css';
import InvoicesHeader from './InvoicesHeader';
import InvoicesList from './InvoicesList';



function Invoices(props) {
  console.log('INVOICESSS')

  return (
    <React.Fragment>
      <InvoicesHeader />
      <InvoicesList invoices={props.invoices} />
    </React.Fragment>
  );
};

export default Invoices;
