import React,{useState, useEffect, FormEvent} from  'react'
import './input-field.css'
import Todo from '../model'

interface Props {
    todo: string | number;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;
}

const InputField:React.FC<Props> = ({todo, setTodo, handleAdd}) => {
 
    return(
        <form id='input-container'>
            <input 
                type='text' 
                id='input-box' 
                placeholder='Type here...'
                value={todo}
                onChange={e => {setTodo(e.target.value)}}
            />
            <button id='input-btn' onClick={handleAdd} type='submit'>GO</button>
        </form>
    )
}

export default InputField;