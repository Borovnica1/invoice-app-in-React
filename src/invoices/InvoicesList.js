import React from 'react';
import './Invoices.css';
import InvoiceRow from './InvoiceRow';
import InvoiceEmpty from './InvoiceEmpty';
import { Link, Outlet } from 'react-router-dom';

function InvoicesList(props) {
  const invoicesList = props.invoices.map((el) => <Link to={`/invoice/${el.id}`} key={el.id}><InvoiceRow invoice={el} key={el.id} /></Link>);

  return (
    <ul className="invoice-list">
      {props.invoices.length > 0 ? invoicesList : <InvoiceEmpty />}
    </ul>
  );
}

export default InvoicesList;
