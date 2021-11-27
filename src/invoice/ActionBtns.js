import React, { useState } from 'react';
import './Invoice.css';
import EditBtn from './EditBtn';
import DeleteBtn from './DeleteBtn';
import MarkAsBtn from './MarkAsBtn';

function ActionsBtns(props) {

  return (
    <div className="header__action-btns">
      <EditBtn action={"openEditInvoice"}>Edit</EditBtn>
      <DeleteBtn step={1}/>
      <MarkAsBtn status={props.status}/>
    </div>
  );
};

export default ActionsBtns;
