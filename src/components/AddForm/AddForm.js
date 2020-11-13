import React from 'react';
import {Input} from '../Input';
import {Button} from '../Button';
const AddForm = () =>{
  return(
    <form className='mb-3'>
        <div className=' d-flex '>
            <Input placeholder='What needs to be done'/>
            <Button className='btn btn-outline-secondary ml-1 text-nowrap'>Add Item</Button>
        </div>
      </form>
  );
};
export {AddForm};
