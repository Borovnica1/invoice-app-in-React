import React from 'react';
import './Invoices.css';
import InvoiceContext from '../InvoicesContext';

function InvoicesHeaderFilter() {
  const value = React.useContext(InvoiceContext);

  const [filters, setFilters] = React.useState({draft: true, pending: true, paid: true})

  React.useEffect(() => {
    const filteredInvoices = []
    for (let [prop, val] of Object.entries(filters)) {
      const option = document.querySelector(`.invoices__filter-option--${prop}`);
      if (val) option.classList.add('invoices__filter-option--active');
      else option.classList.remove('invoices__filter-option--active');
    }

    for (let invoice of value.invoices) {
      for (let [prop, val] of Object.entries(filters)) {
        if (val) {
          if (invoice.status === prop) filteredInvoices.push(invoice);
        }
      }
    }
    value.setFilteredInvoices(filteredInvoices);

  }, [filters]);

  function handleHoverFilter(hovering) {
    const filterEl = document.querySelector('.invoices__filter');
    if (hovering) filterEl.classList.add('invoices__filter--active');
    else filterEl.classList.remove('invoices__filter--active');
  };

  return (
    <div className="invoices__header-filter">
      <div className="invoices__header-title">
        <h1>Invoices</h1>
        <h5>There are {value.filteredInvoices.length} total invoices</h5>
      </div>
      <div className="invoices__filter" onMouseEnter={() => handleHoverFilter(true)} onMouseLeave={() => handleHoverFilter(false)}>
        <h4>Filter by status</h4>
        <svg width="11" height="7" xmlns="http://www.w3.org/2000/svg"><path d="M1 1l4.228 4.228L9.456 1" stroke="#7C5DFA" strokeWidth="2" fill="none" fillRule="evenodd"/></svg>
        <div className="invoices__filter-menu" >
          <li className="invoices__filter-option invoices__filter-option--draft" onClick={() => setFilters(prevState => ({...prevState,
            draft: !prevState.draft
          }))}>
            <div className="invoices__filter-box">
              
                <svg className="invoices__filter-check" width="10" height="8" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 4.5l2.124 2.124L8.97 1.28" stroke="#FFF" strokeWidth="2" fill="none" fillRule="evenodd"/></svg> 
              
            </div>
            <h4>Draft</h4>
          </li>
          <li className="invoices__filter-option invoices__filter-option--pending" onClick={() => setFilters(prevState => ({...prevState,
            pending: !prevState.pending
          }))}>
            <div className="invoices__filter-box">
              
                <svg className="invoices__filter-check" width="10" height="8" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 4.5l2.124 2.124L8.97 1.28" stroke="#FFF" strokeWidth="2" fill="none" fillRule="evenodd"/></svg> 
              
            </div>
            <h4>Pending</h4>
          </li>
          <li className="invoices__filter-option invoices__filter-option--paid invoices__filter-option--active" onClick={() => setFilters(prevState => ({...prevState,
            paid: !prevState.paid
          }))}>
            <div className="invoices__filter-box">
              
                <svg className="invoices__filter-check" width="10" height="8" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 4.5l2.124 2.124L8.97 1.28" stroke="#FFF" strokeWidth="2" fill="none" fillRule="evenodd"/></svg> 
              
            </div>
            <h4>Paid</h4>
          </li>
        </div>
      </div>
    </div>
  );
}

export default InvoicesHeaderFilter;
