import React from 'react'
import styled from 'styled-components'

const Login = () => {
    return(
        <div id="btn-simple-cont">
            <Button>Login BUTTON</Button>
        </div>
    )
}

export default Login;

const Button = styled.button`
    padding: 1rem 2rem;
    border: none;
    background-color: blue;
    color: #fff;
    border-radius: 0.5rem;
`