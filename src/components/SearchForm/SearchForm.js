import React from 'react';
import {Input} from '../Input';
import {Button} from '../Button';
const SearchForm = () =>{
 return(
  <form className='mb-4'>
    <div className='form-group d-flex'>
        <Input placeholder='Search'/>
        <Button className='btn btn-primary ml-1'>All</Button>
        <Button className='btn btn-outline-secondary ml-1'>Active</Button>
        <Button className='btn btn-outline-secondary ml-1'>Done</Button>
    </div>
  </form>
 );
};
export {SearchForm};
