import React from 'react'
import styled from 'styled-components'

const Simple = () => {
    return(
        <div id="btn-simple-cont">
            <Button>SIMPLE BUTTON</Button>
        </div>
    )
}

export default Simple;

const Button = styled.button`
    padding: 1rem 2rem;
    border: none;
    background-color: #ddd;
    border-radius: 0.5rem;
`