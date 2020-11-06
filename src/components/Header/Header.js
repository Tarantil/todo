import React from 'react';
import './Header.scss';

const Header = () =>{
  return (
    <div className='d-flex justify-content-between align-items-center'>
      <h1>Todo List</h1>
      <p className="mb-0 info">0 more to do, 0 done</p>
    </div>
  );
};

export {Header};
