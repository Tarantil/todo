import React from 'react';
import {ListItem} from './ListItem';
const List = ({lists}) =>{
  return(
 <div>
   {
     lists.map(({id, value, done}) =>(
     <ListItem
      id={id}
      value={value}
      done={done}
     />
     ))
   }
 </div>
  );
};
export {List};
