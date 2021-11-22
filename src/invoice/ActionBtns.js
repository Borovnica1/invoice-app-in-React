import React, { useState } from 'react';
import './Invoice.css';
import EditBtn from './EditBtn';
import DeleteBtn from './DeleteBtn';
import MarkAsBtn from './MarkAsBtn';

function ActionsBtns(props) {

  return (
    <div className="header__action-btns">
      <EditBtn>Edit</EditBtn>
      <DeleteBtn step={1}/>
      <MarkAsBtn />
    </div>
  );
};

export default ActionsBtns;
