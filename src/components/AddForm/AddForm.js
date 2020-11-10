import React from 'react';
import {Input} from '../Input';
import {Button} from '../Button';
const AddForm = () =>{
  return(
    <form className='mb-3'>
        <div className=' d-flex '>
            <Input placeholder='What needs to be done'/>
            <Button style='btn btn-outline-secondary ml-1 text-nowrap' title="Add Item"/>
        </div>
      </form>
  );
};
export {AddForm};
