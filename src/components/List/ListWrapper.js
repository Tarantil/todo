import React from 'react';
import {List} from './List';
const ListWrapper = () =>{
  const title = ['Drink Coffe', 'Make Awesome App', 'Eat', 'Go'];
  return(
    <List title={title} />
  );
};
export {ListWrapper};
