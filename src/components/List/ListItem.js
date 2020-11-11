import React from 'react';
import {Button} from '../Button';

const ListItem = ({id,value}) =>{
  return(
  <li key={id} className='list-group-item list-group-item-info d-flex justify-content-between'>{value}
      <span>
        <Button style='btn btn-danger mr-2' title='X'/>
        <Button style='btn btn-success' title='!'/>
      </span>
    </li>
  );

}
export {ListItem};
