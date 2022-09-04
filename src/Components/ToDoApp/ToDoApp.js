import { useState , useEffect } from 'react';

import './ToDoApp.css'

import Header from '../Header/Header'
import List from '../List/List'
import Options from '../Options/Options'

function ToDoApp() {


  const [todos, setTodos] = useState([])
  const [count, setCount] = useState(0)

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem('todos'));
    if (todos) {
      setTodos(todos);
      setCount(todos.filter(todo => !todo.completed).length);
    }
  }, [])
  
  const addToDo = (newToDo) => {
    const toDo = {
      content: newToDo,
      completed: false
    }
    const newTodos = [...todos, toDo];
    setTodos(newTodos);
    setCount(count + 1);
    localStorage.setItem('todos', JSON.stringify(newTodos));
  }

  const completeAllItem = () => {
    const newTodos = todos.map(item => {
      return {...item, completed: !item.completed}
    })
    setTodos(newTodos);
    setCount(count === 0 ? todos.length : 0);
    localStorage.setItem('todos', JSON.stringify(newTodos));
  }

  const removeItem = (item) => {
    const newTodos = todos.filter(todo => todo !== item)
    setTodos(newTodos)
    if (!item.completed) {
      setCount(count - 1)
    }
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
    setCount(count + (item.completed ? 1 : -1))
    localStorage.setItem('todos', JSON.stringify(newTodos));
  }

  const clearCompleted = () => {
    const newTodos = todos.filter(todo => !todo.completed)
    setTodos(newTodos)
    localStorage.setItem('todos', JSON.stringify(newTodos));
  }

  if (count === 0) {

    return (
      <section className='todoapp'>
        <Header
        addToDo = {addToDo}
         />
        <List 
        todos = {todos}
        completeAllItem = {completeAllItem}
        removeItem = {removeItem}
        completeItem = {completeItem}
        />
      </section>
    )

  } else {
    return (
      <section className='todoapp'>
        <Header
        addToDo = {addToDo}
         />
        <List 
        todos = {todos}
        completeAllItem = {completeAllItem}
        removeItem = {removeItem}
        completeItem = {completeItem}
        />
        <Options
        count = {count}
        clearCompleted = {clearCompleted}
         />
      </section>
    )
  }


  
}

export default ToDoApp