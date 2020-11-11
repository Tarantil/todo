import React from 'react';
import {ListItem} from './ListItem';
const List = ({lists}) =>{
  return(
 <div>
   {
     lists.map(({id, value}) =>(
     <ListItem
      id={id}
      value={value}

     />
     ))
   }
 </div>
  );
};
export {List};
