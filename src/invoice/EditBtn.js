import React, { useState } from 'react';
import './Invoice.css';
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

function EditBtn(props) {
  const params = useParams();
  let navigate = useNavigate();
  let eventHandler = () => console.log('edit btn clicked');

  if (props.action === 'closeModal') {
    eventHandler = function() {
      document.querySelector('.modal').classList.remove('modal--active');
    }
  } else if (props.action === 'openEditInvoice') {
    eventHandler = function() {
      navigate(`/invoice/${params.invoiceId}/editInvoice`);
    }
  }


  return (
    <button className="btn btn-3" onClick={() => eventHandler()}>
      {props.children}
    </button>
  );
};

export default EditBtn;
