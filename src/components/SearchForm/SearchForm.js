import React from 'react';
import {Input} from '../Input';
import {Button} from '../Button';
const SearchForm = () =>{
 return(
  <form className='mb-4'>
    <div className='form-group d-flex'>
        <Input placeholder='Search'/>
        <Button style='btn btn-primary ml-1' title="All"/>
        <Button style='btn btn-outline-secondary ml-1' title="Active"/>
        <Button style='btn btn-outline-secondary ml-1' title="Done"/>
    </div>
  </form>
 );
};
export {SearchForm};
