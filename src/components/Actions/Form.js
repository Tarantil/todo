import React from 'react';
import {Input} from './Input';
import {Button} from './Button';
const Form = (props) =>{
  const action = props.action;
  if(action=='search'){
    return(
      <form className='mb-4'>
        <div className='form-group d-flex'>
            <Input placeholder='Search'/>
            <Button class='btn btn-primary ml-1' title="All"/>
            <Button class='btn btn-outline-secondary ml-1' title="Active"/>
            <Button class='btn btn-outline-secondary ml-1' title="Done"/>
        </div>
      </form>
    );
  }
  else if(action=='add'){
    return(
      <form className='mb-3'>
        <div className=' d-flex '>
            <Input placeholder='What needs to be done'/>
            <Button class='btn btn-outline-secondary ml-1 text-nowrap' title="Add Item"/>
        </div>
      </form>
    );
  }
};
export {Form};
