import React from 'react';

const Selector = ({ items, selectedItem, onSelect }) => (
  <ul className='Selector'>
    { items && items.map((item) => (
      <li className='Selector-item' key={ item }>
        <label>
          <input
            type='checkbox'
            onClick={() => { onSelect(item); }}
            checked={ item === selectedItem }
          />
          { item }
        </label>
      </li>
    ))}
  </ul>
);


export default Selector;
