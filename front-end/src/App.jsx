import { useState, useEffect } from 'react'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/todos")
      .then(async (res) => {
        const json = await res.json();
        setTodos(json.todos);
      });
  }, []); 

  return (
    <div>
      <CreateTodo setTodos={setTodos} />
      <Todos todos={todos} setTodos={setTodos} />
    </div>
  )
}

export default App
