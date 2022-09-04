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

  const removeItem = (item) => {
    setTodos(todos.filter(todo => todo !== item))
  }


  const completeItem = (item) => {
    setTodos(todos.map(todo => {
      if(todo === item){
        return {...todo, completed: !todo.completed}
      }
      return todo
    }))
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