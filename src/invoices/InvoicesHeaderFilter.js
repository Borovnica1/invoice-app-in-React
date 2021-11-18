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
      <div className="invoices__filter invoices__filter--active">
        <h4>Filter by status</h4>
        <svg width="11" height="7" xmlns="http://www.w3.org/2000/svg"><path d="M1 1l4.228 4.228L9.456 1" stroke="#7C5DFA" strokeWidth="2" fill="none" fillRule="evenodd"/></svg>
        <div className="invoices__filter-menu">
          <li className="invoices__filter-option">
            <div className="invoices__filter-box">
              
                <svg className="invoices__filter-check" width="10" height="8" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 4.5l2.124 2.124L8.97 1.28" stroke="#FFF" stroke-width="2" fill="none" fill-rule="evenodd"/></svg> 
              
            </div>
            <h4>Draft</h4>
          </li>
          <li className="invoices__filter-option">
            <div className="invoices__filter-box">
              
                <svg className="invoices__filter-check" width="10" height="8" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 4.5l2.124 2.124L8.97 1.28" stroke="#FFF" stroke-width="2" fill="none" fill-rule="evenodd"/></svg> 
              
            </div>
            <h4>Pending</h4>
          </li>
          <li className="invoices__filter-option invoices__filter-option--active">
            <div className="invoices__filter-box">
              
                <svg className="invoices__filter-check" width="10" height="8" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 4.5l2.124 2.124L8.97 1.28" stroke="#FFF" stroke-width="2" fill="none" fill-rule="evenodd"/></svg> 
              
            </div>
            <h4>Paid</h4>
          </li>
        </div>
      </div>
    </div>
  );
}

export default InvoicesHeaderFilter;
