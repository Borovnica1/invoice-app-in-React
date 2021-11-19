import React, { useState } from 'react';
import './Invoice.css';
import EditBtn from './EditBtn';
import DeleteBtn from './DeleteBtn';
import MarkAsBtn from './MarkAsBtn';

function ActionsBtns(props) {

  return (
    <div className="header__action-btns">
      <EditBtn />
      <DeleteBtn />
      <MarkAsBtn />
    </div>
  );
};

export default ActionsBtns;
