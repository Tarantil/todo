import React, { useState } from 'react';
import {Header} from '../Header';
import {Actions} from '../Actions';
import {List} from '../List';
import './App.scss';
const App = () => {
  const [lists, setLists]=useState([
    {id:0, value:'Make a coffe', done:false},
    {id:1, value:'Drink', done:false},
    {id:2, value:'Eat', done:false},
  ]);
  return (
    <div className='container mt-5'>
      <Header />
      <Actions />
      <List lists={lists}/>
    </div>
  );
};


export {App};
