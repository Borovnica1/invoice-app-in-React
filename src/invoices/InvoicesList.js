import React from 'react';
import './Invoices.css';
import InvoiceRow from './InvoiceRow';
import InvoiceEmpty from './InvoiceEmpty';

function InvoicesList(props) {
  const invoicesList = props.invoices.map((el) => <InvoiceRow invoice={el} key={el.id} />);

  return (
    <ul className="invoice-list">
      {props.invoices.length > 0 ? invoicesList : <InvoiceEmpty />}
    </ul>
  );
}

export default InvoicesList;
