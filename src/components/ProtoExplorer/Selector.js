import React from 'react';
import './Selector.css';

const Selector = ({ items, selectedItem, onSelect }) => (
  <ul className='Selector'>
    { items && items.map((item) => (
      <li className='Selector-item' key={ item }>
        <label>
          <input
            className='Selector-item-input'
            type='checkbox'
            onClick={() => { onSelect(item); }}
            checked={ item === selectedItem }
          />
          &nbsp;
          { item }
        </label>
      </li>
    ))}
  </ul>
);


export default Selector;
