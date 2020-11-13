import React from 'react';
import {Button} from '../Button';
import cn from 'classnames';
const ListItem = ({value, done,onItemDelete,onItemDone}) =>{
  return(
  <div className={cn("list-group-item list-group-item-info d-flex justify-content-between",done && "list-item--done")}>{value}
      <span>
        <Button onClick={onItemDelete} className='btn btn-danger mr-2'>X</Button>
        <Button onClick={onItemDone} className='btn btn-success'>!</Button>
      </span>
    </div>
  );

}
export {ListItem};
