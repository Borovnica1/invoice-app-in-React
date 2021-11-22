import React, { useState } from 'react';
import './Invoice.css';

function EditBtn(props) {
  let eventHandler = () => console.log('edit btn clicked');

  if (props.action === 'closeModal') {
    eventHandler = function() {
      document.querySelector('.modal').classList.remove('modal--active');
    }
  }


  return (
    <button className="btn btn-3" onClick={() => eventHandler()}>
      {props.children}
    </button>
  );
};

export default EditBtn;
