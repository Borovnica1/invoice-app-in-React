import React from 'react';
import './Invoices.css';
import { useNavigate } from "react-router-dom";

function NewInvoice() {
  let navigate = useNavigate();

  return (
    <button className="btn btn-1" onClick={() => navigate("/invoices/newInvoice")}>
      <div className="btn-1__icon">
        <svg width="11" height="11" xmlns="http://www.w3.org/2000/svg"><path d="M6.313 10.023v-3.71h3.71v-2.58h-3.71V.023h-2.58v3.71H.023v2.58h3.71v3.71z" fill="#7C5DFA" fillRule="nonzero"/></svg>
      </div>
     <h4>New <span className="bonus-text">Invoice</span></h4></button>
  );
}

export default NewInvoice;
