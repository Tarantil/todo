import React from 'react';

const Button = ({style, title}) =>{
  return(
    <button className={style}>{title}</button>
  );
};
export {Button};
