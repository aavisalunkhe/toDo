import { useState  } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { AddTodo } from './components/AddTodo'
import { ListTodos } from './components/listTodos'

function App() {

  const [todosState, setTodos] = useState([])

  fetch("http://localhost:3000/listTodos")
    .then(async function(resp){
        const finalResp= await resp.json();
        setTodos(finalResp);
    })

  return (
    <div>
        <AddTodo></AddTodo>
        <ListTodos todoarray={todosState}></ListTodos>
    </div>
  )
}

export default App
