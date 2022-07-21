import React, { HTMLAttributes, ReactNode } from 'react';

export interface Props extends HTMLAttributes<HTMLButtonElement>{
    children: ReactNode;
    variant: 'primary'|'secondary';
}

export const Button = ({children = 'I am doing good', variant = 'primary',...props} : Props) => {
  return (
   <button 
   {...props} 
   style={{backgroundColor: variant === 'primary' ? 'grey' : 'red',
   color: 'white'}}>
    {children}
   </button>
  )
}


export default Button;
