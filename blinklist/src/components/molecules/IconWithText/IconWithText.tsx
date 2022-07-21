import React from 'react';
import Typography from '../../atoms/TypographyComponent/Typography';
import Icon from '../../atoms/Icon/Icon';
import 'bootstrap/dist/css/bootstrap.css';
import './iconWithText.css';


type User = {
  name: string;
};

interface IconWithTextProps {
  icon: any,
  disabled: boolean,
  onClick : () => void,
  variant: string,
  children: string
}


export const IconWithTextComponent = ( {icon,disabled,onClick,variant,children} :IconWithTextProps) => (
      <div className="container">
          {(
            <div className='row'>
            <div className='col'>
              <Icon icon={icon} disabled={disabled} onClick={onClick}/> 
            </div>
            <div className='col'>
                <Typography variant={variant} children={children}/>
            </div>
            </div>
          )}
      </div>
  );