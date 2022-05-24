import React, {useState} from 'react';
import styled, { StyledComponent } from 'styled-components';

interface StyledProps {
  action?: string;
  padding?: string;
  borderRadius?: string;
  backgroundColor?: string;
  fontSize?: string;
}

interface SimpleButtonProps {
  action?: string;
  label?: string;
  padding?: string;
  borderRadius?: string;
  backgroundColor?: string;
  fontSize?: string;
  onClick?: any;
}

interface States { click: Boolean }

const defaultProps: SimpleButtonProps = {
  action: 'false',
  label: 'DEFAULT',
}

const Simple = (props: SimpleButtonProps) => {
  
  const [click, setClick] = useState<string>('false')
  
  return <Button
  
  action={click} 
  padding={props.padding}
  borderRadius={props.borderRadius}
  backgroundColor={props.backgroundColor}
  fontSize={props.fontSize}
  
  // {...props}
  onClick={props.onClick}
  onMouseDown={() => {setClick('true')}}
  onMouseUp={() => {setClick('false')}}
  
  >{props.label}</Button>
}


Simple.SimpleButtonProps = defaultProps;

export default Simple;

const Button = styled.div<StyledProps>`
  width: fit-content;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  background-color: #ddd;
  box-shadow: ${props => props.action === 'true' ? `0px 2px 2px 0 transparent` : `0px 2px 2px 0 #bbb`};
  transform: ${props => props.action === 'true' ? `translateY(2px)` : `translateY(0px)`};
  transition: transform 0s ease-in-out;
  user-select: none;
  
  padding: ${props => props.padding};
  border-radius: ${props => props.borderRadius};
  background-color: ${props => props.backgroundColor};
  font-size: ${props => props.fontSize};
`