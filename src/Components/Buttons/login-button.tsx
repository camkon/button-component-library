import React from 'react'
import styled from 'styled-components'

interface LoginButtonProps {
    label: string;
}

const Login = (props: LoginButtonProps) => {

    return <Button>{props.label}</Button>

}

export default Login;

const Button = styled.button`
    padding: 1rem 2rem;
    border: none;
    background-color: #2626e7;
    color: #fff;
    border-radius: 0.5rem;
    cursor: pointer;
    transition: background-color 0.1s ease-in-out;

    &:hover {
        background-color: #0000bc;
    }
`