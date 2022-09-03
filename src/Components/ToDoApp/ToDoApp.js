import { useState } from 'react';

import './ToDoApp.css'

import Header from '../Header/Header'
import List from '../List/List'
import Options from '../Options/Options'

function ToDoApp() {


  const [todos, setTodos] = useState([])

  const addToDo = (newToDo) => {
    console.log(todos)
    setTodos([...todos, {content  : newToDo , completed: false}])
    console.log(todos)
  }

  const changeStatusAll = () => {
    console.log("changeStatusAll")
  }

  return (
    <section className='todoapp'>
      <Header
      addToDo={addToDo}
       />
      <List 
      todos={todos}
      changeStatusAll = {changeStatusAll}
      />
      <Options />
    </section>
  )
}

export default ToDoApp