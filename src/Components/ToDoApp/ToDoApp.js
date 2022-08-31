import React from 'react'

import './ToDoApp.css'

import Header from '../Header/Header'
import List from '../List/List'
import Options from '../Options/Options'

function ToDoApp() {

  const addToDo = (toDo) => {
  }

  return (
    <section className='todoapp'>
      <Header
      addToDo={addToDo}
       />
      <List />
      <Options />
    </section>
  )
}

export default ToDoApp