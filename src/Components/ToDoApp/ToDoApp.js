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

  const completeAllItem = () => {
    setTodos(todos.map(item => {
      return {...item, completed: !item.completed}
    }))
  }

  const removeItem = () => {
    alert("removeItem")
  }


  const completeItem = () => {
    alert("completeItem")
    
  }


  return (
    <section className='todoapp'>
      <Header
      addToDo = {addToDo}
       />
      <List 
      todos={todos}
      completeAllItem = {completeAllItem}
      removeItem = {removeItem}
      completeItem = {completeItem}
      />
      <Options />
    </section>
  )
}

export default ToDoApp