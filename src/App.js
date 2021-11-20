import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Invoices from './invoices/Invoices';
import Invoice from './invoice/Invoice';
import { getInvoices } from './data';
import InvoiceContext from './InvoicesContext';
import SideBar from './components/SideBar';

function App() {
  const invoices = getInvoices();
  const [filteredInvoices, setFilteredInvoices] = React.useState([]);
  const value = {invoices, filteredInvoices, setFilteredInvoices}
  return (
    <BrowserRouter>
      <div className="container">
        <SideBar />
        <InvoiceContext.Provider value={value}>
        <Routes>
            <Route path="/" element={<Invoices invoices={filteredInvoices} />} />
            <Route path="/invoices" element={<Invoices invoices={filteredInvoices} />} />
            <Route path="/invoice" element={<Invoice />} >
              <Route path=":invoiceId" />
            </Route>
        </Routes>
        </InvoiceContext.Provider>
      </div>
    </BrowserRouter>
  );
}

export default App
