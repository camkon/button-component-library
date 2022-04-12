import React,{useState, useEffect} from 'react';
import './app.css'
import InputField from './InputField/input-field';
import ListBox from './ListBox/list-box';
import Todo from './model'

const App: React.FC = () => {

  const [todo, setTodo] = useState<string>('');
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e:React.FormEvent<EventTarget>) => {
    e.preventDefault();
    if(todo) {
      setTodos([...todos,{id:Date.now(),todo: todo, isDone:false}]);
      setTodo('');
    }
  }

  useEffect(() => {
    console.log(todos)
  },[todos])

  return (
    <div id="App">
      <div id="header">TASKIFY</div>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
      <ListBox todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
