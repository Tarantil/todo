import React from 'react';
import {Button} from '../Button';

const List = ({title}) =>{
  const titles = title;
  const listItems = titles.map((title) =>
    <li key={title} className='list-group-item list-group-item-info d-flex justify-content-between'>{title}
      <span>
        <Button style='btn btn-danger mr-2' title='X'/>
        <Button style='btn btn-success' title='!'/>
      </span>
    </li>
  );
  return (
    <ul className='list-group'>
        {listItems}
    </ul>
  );

}
export {List};
