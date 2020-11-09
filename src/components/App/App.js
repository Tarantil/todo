import React, { Fragment } from 'react';
import {Header} from '../Header';
import {Actions} from '../Actions';
import {ListWrapper} from '../List';
import './App.scss';
const App = () => {
  return (
    <div className='container mt-5'>
      <Header />
      <Actions />
      <ListWrapper />
    </div>
  );
};


export {App};
