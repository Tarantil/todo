import React from 'react';

const Button = (props) =>{
  const action = props.action;
  if(action=='delete'){
    return(
      <button className="btn btn-danger mr-2">X</button>
    );
  }
  else if(action=='highlight'){
    return(
      <button className="btn btn-success">!</button>
    );
  }
};

export {Button};
