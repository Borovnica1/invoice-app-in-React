import React, { useState } from 'react';
import './Form.css';

function ItemList(props) {
  const [items, setItems] = React.useState(props.items || []);
  const [state, setState] = React.useState({});
  const [loaded, setLoaded] = React.useState(false);


  React.useEffect(() => {
    props.formWrapEl.current = document.querySelector(`.form-box-wrap`);
    props.formWrapEl.current.scroll({
      top: props.formWrapElHeight,
      behavior: 'smooth'
    });
    props.setFormWrapElHeight(props.formWrapEl.current.offsetHeight);
  }, [items])

  function onInputchange(event, i, j) {
    if (!loaded) setLoaded(true);
    items[i][j] = event.target.value;
    items[i][3] = String(Number(items[i][1]) * Number(items[i][2]))
    setLoaded(false);
    setItems(items);
    setState({
      [event.target.id]: event.target.value
    });
  }

  let itemsRows = [];
  itemsRows = items.map((el, i) => {
    const inputUtils = [['text', 'item-name'],['number', 'qty'],['number', 'price'],['number', 'total']];
    const inputs = inputUtils.map((util, j) => {
      util.push(el[j]);
      return <input name="nam" type={util[0]} id={util[1]} value={loaded ? state.id : j == 3 ? Math.round(Number(util[2]) * 100) / 100 : util[2]} onChange={(e) => onInputchange(e, i, j)} placeholder={j == 2 ? 0 : j == 1 ? '0' : ''} readOnly={j == 3 ? true : false} key={j}/>
    })
    return (<div className="item-list__row item-list__row-value" data-id={i} key={i}>
    {inputs}
    <svg onClick={function(e){ deleteItem(e.target)} } width="13" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.583 3.556v10.666c0 .982-.795 1.778-1.777 1.778H2.694a1.777 1.777 0 01-1.777-1.778V3.556h10.666zM8.473 0l.888.889h3.111v1.778H.028V.889h3.11L4.029 0h4.444z" fill="#888EB0" fillRule="nonzero"/></svg>
    </div>);

  });
  console.log('RERENDERRRRRR ', itemsRows)



  const addItem = function() {
    console.log('ADD ITEM')
    /* const newItems = itemList.filter((el, i) => {
      const currEl = document.querySelector(`.item-list__row[data-id="${i}"]`);
      for (let j = 0; j < 4; j++) el[j] = currEl.children[j].value;
      return el;
    }) */
    //setFormWrapElHeight(formWrapEl.current.offsetHeight);
    setItems([...items, ['','','','']]);
  };

  const deleteItem = function(object) {
    const itemRow = object.parentElement.parentElement.classList.contains('item-list__row') ? object.parentElement.parentElement : object.parentElement;
    const newItems = items.filter((el, j) => j !== Number(itemRow.dataset.id));
    /// THIS SETLOADED SOLVED 12H OF DEBUGGGGGGGGG
    setLoaded(false);
    setItems(newItems);
    console.log('DELETE ITEM', itemRow, items)
    /*
    const newItems = itemList.filter((el, i) => {
      const currEl = document.querySelector(`.item-list__row[data-id="${i}"]`);
      for (let j = 0; j < 4; j++) el[j] = currEl.children[j].value;
      if (Number(itemRow.dataset.id) !== i) return el;
    })
    console.log('BRISEM', itemRow, newItems)
    setItemList(newItems); */
  }

  return (
    <React.Fragment>
      {itemsRows}
      <button className="btn btn-6" onClick={() => addItem()}>
      <svg width="11" height="11" xmlns="http://www.w3.org/2000/svg"><path d="M6.313 10.023v-3.71h3.71v-2.58h-3.71V.023h-2.58v3.71H.023v2.58h3.71v3.71z" fill="#7C5DFA" fillRule="nonzero"/></svg><h4>Add New Item</h4>
      </button>
    </React.Fragment>
  )
}



export default ItemList;