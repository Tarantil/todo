import React from 'react';
import cn from 'classnames';
const Button = ({type='button',className, onClick,children}) =>{
  return(
    <button className={cn("btn"), className} onClick={onClick}>{children}</button>
  );
};
export {Button};
