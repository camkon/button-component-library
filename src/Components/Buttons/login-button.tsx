import React from 'react'
import styled from 'styled-components'

interface LoginButtonProps {
    label: string;
}

const Login = (props: LoginButtonProps) => {

    return <Button>LOGIN BUTTON</Button>

}

export default Login;

const Button = styled.button`
    padding: 1rem 2rem;
    border: none;
    background-color: blue;
    color: #fff;
    border-radius: 0.5rem;
`