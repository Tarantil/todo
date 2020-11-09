import React from 'react';
import {Button} from './Button';

const List = (props) =>{
  const titles = props.title;
  const listItems = titles.map((title) =>
    <li key={title.toString()} className='list-group-item list-group-item-info d-flex justify-content-between'>{title} <span><Button action='delete'/><Button action='highlight'/></span></li>
  );
  return (
    <ul className='list-group'>
        {listItems}
    </ul>
  );

}
export {List};
