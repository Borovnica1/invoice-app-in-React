import React, { useState } from 'react';
import './Invoices.css';
import { getInvoices } from '../data';
import InvoicesHeader from './InvoicesHeader';
import InvoicesList from './InvoicesList';

import InvoiceContext from './InvoicesContext';

function Invoices() {
  const [invoices, setInvoices] = useState(getInvoices());

  return (
    <React.Fragment>
      <InvoiceContext.Provider value={invoices.length}>
        <InvoicesHeader />
      </InvoiceContext.Provider>
      <InvoicesList invoices={invoices} />
    </React.Fragment>
  );
};

export default Invoices;
