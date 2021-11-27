import React from 'react';
import './Invoice.css';
import { Link } from 'react-router-dom'

function GoBack() {

  return (
    <div>
      <Link to="/invoices" className="invoice__go-back">
        <svg width="7" height="10" xmlns="http://www.w3.org/2000/svg"><path d="M6.342.886L2.114 5.114l4.228 4.228" stroke="#9277FF" strokeWidth="2" fill="none" fillRule="evenodd"/></svg>
        <h4>Go Back</h4>
      </Link>
    </div>
  );
};

export default GoBack;
