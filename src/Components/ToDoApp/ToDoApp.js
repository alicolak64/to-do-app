import { useState , useEffect } from 'react';

import './ToDoApp.css'

import Header from '../Header/Header'
import List from '../List/List'
import Options from '../Options/Options'

function ToDoApp() {


  const [todos, setTodos] = useState([])

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem('todos'));
    if (todos) {
      setTodos(todos);
    }
  }, [])

  const addToDo = (newToDo) => {
    const toDo = {
      content: newToDo,
      completed: false
    }
    const newTodos = [...todos, toDo];
    setTodos(newTodos);
    localStorage.setItem('todos', JSON.stringify(newTodos));
  }

  const completeAllItem = () => {
    const newTodos = todos.map(item => {
      return {...item, completed: !item.completed}
    })
    setTodos(newTodos);
    localStorage.setItem('todos', JSON.stringify(newTodos));
  }

  const removeItem = (item) => {
    const newTodos = todos.filter(todo => todo !== item)
    setTodos(newTodos)
    localStorage.setItem('todos', JSON.stringify(newTodos));
  }


  const completeItem = (item) => {
    const newTodos = todos.map(todo => {
      if(todo === item){
        return {...todo, completed: !todo.completed}
      }
      return todo
    })
    setTodos(newTodos)
    localStorage.setItem('todos', JSON.stringify(newTodos));
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