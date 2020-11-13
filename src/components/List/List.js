import React from 'react';
import {ListItem} from './ListItem';
const List = ({lists, onItemDelete,onItemDone}) =>{
  return(
 <div>
   {
     lists.map(({id, value, done}) =>(
     <ListItem
      key={value}
      value={value}
      done={done}
      onItemDelete={()=>onItemDelete(id)}
      onItemDone={()=>onItemDone(id)}
     />
     ))
   }
 </div>
  );
};
export {List};
