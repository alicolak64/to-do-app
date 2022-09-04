import { useState } from 'react';

import './ToDoApp.css'

import Header from '../Header/Header'
import List from '../List/List'
import Options from '../Options/Options'

function ToDoApp() {


  const [todos, setTodos] = useState([])

  const addToDo = (newToDo) => {
    setTodos([...todos, {content  : newToDo , completed: false}])
  }

  const completeAllItem = () => {
    setTodos(todos.map(item => {
      return {...item, completed: !item.completed}
    }))
  }

  const removeItem = () => {
    console.log('removeItem')
  }


  const completeItem = () => {
    console.log('completeItem')
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