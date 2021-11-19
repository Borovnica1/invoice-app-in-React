import React, { useState } from 'react';
import './Invoice.css';
import ActionBtns from './ActionBtns';

function InvoiceHeader(props) {

  return (
    <div className="invoice__header">
      <div className="invoice__header-status">
        <h5>Status</h5>
        <button className={"invoice-row__btn invoice-row__btn--" + props.invoice.status}>&#9679; {props.invoice.status}</button>
      </div>
      <ActionBtns />
    </div>
  );
};

export default InvoiceHeader;
