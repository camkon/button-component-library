import React from 'react'
import styled from 'styled-components'

interface SimpleButtonProps {
    label: string;
}

const Simple = () => {
    return <Button>SIMPLE BUTTON</Button>
}

export default Simple;

const Button = styled.button`
    padding: 1rem 2rem;
    border: none;
    background-color: #ddd;
    border-radius: 0.5rem;
`