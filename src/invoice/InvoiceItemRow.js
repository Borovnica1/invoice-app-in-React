import React, { useState } from 'react';
import './Invoice.css';
import GoBack from './GoBack';
import { formatNumber } from '../invoices/InvoiceRow';

function InvoiceItemRow(props) {

  return (
    <div className="invoice__table-row">
      <h4>{props.item.name}</h4>
      <h5>{props.item.quantity}</h5>
      <h5>${formatNumber(props.item.price)}</h5>
      <h4>${formatNumber(props.item.total)}</h4>
  </div>
  );
};

export default InvoiceItemRow;
