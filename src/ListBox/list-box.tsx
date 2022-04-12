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
                    <div className="list-indi-box">
                        <div className="list-text">{i.todo}</div>
                        <div className="todo-btns-box">
                            <span className="todo-btn">Edit</span>
                            <span className="todo-btn">Delete</span>
                            <span className="todo-btn">Done</span>
                        </div>
                    </div>
                )
            })
        }
        </div>
    )
}

export default ListBox;