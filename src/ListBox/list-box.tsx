import React, {useState, useEffect} from 'react';
import Todo from '../model';
import './list-box.css'

interface Props {
    todos: Todo[]
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const ListBox: React.FC<Props> = ({todos, setTodos}) => {
    return(
        <div id="list-box">
        {
            todos.map((i) => {
                return(
                    <div id="list-indi-box">{i.todo}</div>
                )
            })
        }
        </div>
    )
}

export default ListBox;