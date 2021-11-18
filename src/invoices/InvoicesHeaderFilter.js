import React from 'react';
import './Invoices.css';
import InvoiceContext from './InvoicesContext';

function InvoicesHeaderFilter() {
  const value = React.useContext(InvoiceContext);

  return (
    <div className="invoices__header-filter">
      <div className="invoices__header-title">
        <h1>Invoices</h1>
        <h5>There are {value} total invoices</h5>
      </div>
      <div className="invoices__filter">
        <h4>Filter by status</h4>
        <svg width="11" height="7" xmlns="http://www.w3.org/2000/svg"><path d="M1 1l4.228 4.228L9.456 1" stroke="#7C5DFA" strokeWidth="2" fill="none" fillRule="evenodd"/></svg>
      </div>
    </div>
  );
}

export default InvoicesHeaderFilter;
