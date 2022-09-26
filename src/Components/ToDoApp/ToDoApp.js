import { useState , useEffect } from 'react';

import './ToDoApp.css'

import Header from '../Header/Header'
import List from '../List/List'
import Options from '../Options/Options'

function ToDoApp() {

  const [status , setStatus] = useState('All');
  const [todos, setTodos] = useState([])
  const [countActive, setCountActive] = useState(0)
  const [countCompleted, setCountCompleted] = useState(0)

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem('todos'));
    if (todos) {
      setTodos(todos);
      setCountActive(todos.filter(todo => !todo.completed).length);
      setCountCompleted(todos.filter(todo => todo.completed).length);
    }
  }, [])
  
  const addToDo = (newToDo) => {
    const toDo = {
      content: newToDo,
      completed: false
    }
    const newTodos = [...todos, toDo];
    setTodos(newTodos);
    setCountActive(countActive + 1);
    localStorage.setItem('todos', JSON.stringify(newTodos));
  }

  const completeAllItem = () => {
    let newTodos = todos 
    const countCompletedItem = todos.filter(todo => todo.completed).length;
    console.log(countCompletedItem)
    if (countCompletedItem === todos.length) {
      newTodos = todos.map(todo => {
        return {
          ...todo,
          completed: false
        }
      })
    } else {
      newTodos = todos.map(todo => {
        return {
          ...todo,
          completed: true
        }
      })
    }
    
    /*
    const newTodos = todos.map(item => {
      return {...item, completed: !item.completed}
    })
    */
    setTodos(newTodos);
    newTodos.filter(todo => !todo.completed).length === 0 ? setCountActive(0) : setCountActive(newTodos.filter(todo => !todo.completed).length);
    newTodos.filter(todo => todo.completed).length === 0 ? setCountCompleted(0) : setCountCompleted(newTodos.filter(todo => todo.completed).length);
    localStorage.setItem('todos', JSON.stringify(newTodos));
  }

  const removeItem = (item) => {
    const newTodos = todos.filter(todo => todo !== item)
    setTodos(newTodos)
    if (!item.completed) {
      setCountActive(countActive - 1)
    } else {
      setCountCompleted(countCompleted - 1)
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
    setCountActive(countActive + (item.completed ? 1 : -1))
    setCountCompleted(countCompleted + (item.completed ? -1 : 1))
    localStorage.setItem('todos', JSON.stringify(newTodos));
  }

  const clearCompleted = () => {
    const newTodos = todos.filter(todo => !todo.completed)
    setTodos(newTodos)
    setCountCompleted(0)
    localStorage.setItem('todos', JSON.stringify(newTodos));
  }

  const changeStatus = (nowStatus) => {
    if(nowStatus === 'All'){
      setStatus('All')
    } else if(nowStatus === 'Active'){
      setStatus('Active')
    } else {
      setStatus('Completed')
    }
  }

  if (countActive === 0 && countCompleted === 0) {

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
        status = {status}
        completeAllItem = {completeAllItem}
        removeItem = {removeItem}
        completeItem = {completeItem}
        />
        <Options
        status = {status}
        countActive = {countActive}
        countCompleted = {countCompleted}
        clearCompleted = {clearCompleted}
        changeStatus = {changeStatus}
         />
      </section>
    )
  }


  
}

export default ToDoApp