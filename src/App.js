import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Invoices from './invoices/Invoices';
import Invoice from './invoice/Invoice';
import { getInvoices } from './data';
import InvoiceContext from './InvoicesContext';

function App() {
  console.log('APP RENDERUJE?');
  const [invoices, setInvoices] = React.useState(getInvoices());

  return (
    <div className="container">
      <BrowserRouter>
      <InvoiceContext.Provider value={invoices}>
      <Routes>
          <Route path="/" element={<Invoices />} />
          <Route path="/invoices" element={<Invoices invoices={invoices}/>} />
          <Route path="/invoice" element={<Invoice />} >
            <Route path=":invoiceId" />
          </Route>
      </Routes>
      </InvoiceContext.Provider>
    </BrowserRouter>
  </div>
  );
}

export default App
