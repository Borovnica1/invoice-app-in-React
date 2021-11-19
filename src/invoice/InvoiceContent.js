import React, { useState } from 'react';
import './Invoice.css';
import ActionBtns from './ActionBtns';
import InvoiceItemRow from './InvoiceItemRow';

function InvoiceContent(props) {
  const invoiceDate = props.invoice.createdAt.split('-');
  const invoiceDueDate = props.invoice.paymentDue.split('-');
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];


  console.log('INVOICE CONTENT INV', props.invoice)

  let invoiceItemsTotal = 0;
  const invoiceItemRows = props.invoice.items.map(el => {
    invoiceItemsTotal += el.total;
    return <InvoiceItemRow item={el} key={el.id} />
  });

  const moneyTotal = String(invoiceItemsTotal).split('.');
  if (moneyTotal.length == 1) {
    moneyTotal.push('0')
  }
  moneyTotal[0] = Number(moneyTotal[0]).toLocaleString();
  moneyTotal[1] = moneyTotal[1].padStart(2, 0);

  return (
    <div className="invoice__content">
      <div className="invoice__content-header">
        <div>
          <h4><span className="grayish-text">#</span>{props.invoice.id}</h4>
          <h5>{props.invoice.description}</h5>
        </div>
        <div>
          <h5>{props.invoice.senderAddress.street}</h5>
          <h5>{props.invoice.senderAddress.city}</h5>
          <h5>{props.invoice.senderAddress.postCode}</h5>
          <h5>{props.invoice.senderAddress.country}</h5>
        </div>
      </div>
      <div className="invoice__content-main">
        <div>
          <div>
            <h5>Invoice Date</h5>
            <h4>{invoiceDate[2].padStart(2, 0)} {months[Number(invoiceDate[1])-1]} {invoiceDate[0]}</h4>
          </div>
          <div>
            <h5>Payment Due</h5>
            <h4>{invoiceDueDate[2].padStart(2, 0)} {months[Number(invoiceDueDate[1])-1]} {invoiceDueDate[0]}</h4>
          </div>
        </div>
        <div>
          <h5>Bill To</h5>
          <h4>{props.invoice.clientName}</h4>
          <h5>{props.invoice.clientAddress.street}</h5>
          <h5>{props.invoice.clientAddress.city}</h5>
          <h5>{props.invoice.clientAddress.postCode}</h5>
          <h5>{props.invoice.clientAddress.country}</h5>
        </div>
        <div>
          <h5>Sent to</h5>
          <h4>{props.invoice.clientEmail || 'undefined'}</h4>
        </div>
      </div>
    
      <div className="invoice__table">
        <div className="invoice__table-first-row">
          <h5>Item Name</h5>
          <h5>QTY.</h5>
          <h5>Price</h5>
          <h5>Total</h5>
        </div>

        {invoiceItemRows}

        <div className="invoice__table-last-row">
          <h5>Amount Due</h5> 
          <h1>$ {moneyTotal.join('.')}</h1>
        </div>
      </div>
    </div>
  );
};

export default InvoiceContent;
