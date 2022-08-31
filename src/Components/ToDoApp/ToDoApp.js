import React from 'react'

import './ToDoApp.css'

import Header from '../Header/Header'
import List from '../List/List'
import Options from '../Options/Options'

function ToDoApp() {
  return (
    <section className='todoapp'>
      <Header />
      <List />
      <Options />
    </section>
  )
}

export default ToDoApp