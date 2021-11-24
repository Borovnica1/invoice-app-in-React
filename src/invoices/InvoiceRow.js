import React from 'react';
import './Invoices.css';

export function formatNumber(num) {
  const moneyTotal = String(num).split('.');
  if (moneyTotal.length == 1) {
    moneyTotal.push('0')
  }
  moneyTotal[0] = Number(moneyTotal[0]).toLocaleString();
  moneyTotal[1] = moneyTotal[1].padStart(2, 0);
  return moneyTotal.join('.');
};

function InvoiceRow(props) {
  const date = props.invoice.paymentDue ? props.invoice.paymentDue.split('-') : ['1', '1', '2020'];
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  return (
    <div className="invoice-row">
      <h4><span className="grayish-text">#</span>{props.invoice.id}</h4>
      <h5>Due {date[2].padStart(2, 0)} {months[Number(date[1])-1]} {date[0]}</h5>
      <h5>{props.invoice.clientName}</h5>
      <div><h3>${formatNumber(props.invoice.total)}</h3></div>
      <button className={"invoice-row__btn invoice-row__btn--" + props.invoice.status}>
      &#9679; {props.invoice.status}
      </button>
      <h4><svg width="7" height="10" xmlns="http://www.w3.org/2000/svg"><path d="M1 1l4 4-4 4" stroke="#7C5DFA" strokeWidth="2" fill="none" fillRule="evenodd"/></svg></h4>
    </div>
  );
}

export default InvoiceRow;
