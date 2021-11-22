import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Invoices from './invoices/Invoices';
import Invoice from './invoice/Invoice';
import { getInvoices } from './data';
import InvoicesContext from './InvoicesContext';
import SideBar from './components/SideBar';
import Modal from './components/Modal';

function App() {
  const [invoices, setInvoices] = React.useState(getInvoices());;
  const [filteredInvoices, setFilteredInvoices] = React.useState([]);
  const [invoiceSelectedId, setinvoiceSelectedId] = React.useState('undefined');
  const value = {invoices, setInvoices, filteredInvoices, setFilteredInvoices, invoiceSelectedId, setinvoiceSelectedId}

  return (
    <BrowserRouter>
      <div className="container">
      <InvoicesContext.Provider value={value}>
        <SideBar />
        <Modal />
        <Routes>
            <Route path="/" element={<Invoices invoices={filteredInvoices} />} />
            <Route path="/invoices" element={<Invoices invoices={filteredInvoices} />} />
            <Route path="/invoice" element={<Invoice />} >
              <Route path=":invoiceId" />
            </Route>
        </Routes>
        </InvoicesContext.Provider>
      </div>
    </BrowserRouter>
  );
}

export default App
