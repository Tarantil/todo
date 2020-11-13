import React, { useState } from 'react';
import {Header} from '../Header';
import {Actions} from '../Actions';
import {List} from '../List';
import './App.scss';
const App = () => {
  const [lists, setLists]=useState([
    {id:0, value:'Make a coffe', done:true},
    {id:1, value:'Drink', done:false},
    {id:2, value:'Eat', done:false},
  ]);
const onDelete=id=>{
  setLists(prev=>prev.filter(item=>item.id!==id));
}
const onDone=id=>{
   console.log('hhh');
}
  return (
    <div className='container mt-5'>
      <Header />
      <Actions />
      <List
        lists={lists}
        onItemDelete={onDelete}
        onItemDone={onDone}
        />
    </div>
  );
};


export {App};
