import React from 'react'

import './List.css'

function List(props) {

  const completeAllItem = (event) => {
    event.preventDefault()
    props.completeAllItem()
  }

  const removeItem = (event) => {
    event.preventDefault()
    props.removeItem()
  }

  const completeItem = (event) => {
    event.preventDefault()
    props.completeItem()
  }

  return (
    <section className="main">

      <a href='#' onClick={completeAllItem} >
        <input className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all" >
          Mark all as complete
        </label>
      </a>

      <ul className="todo-list">
        {props.todos.map((item, index) => (
          <li
            className={(item.completed) ? 'completed' : ''}
            key={index}
          >
            <div className="view">
              <input
                className="toggle"
                name={index}
                type="checkbox"
                onClick={completeItem}
              />
              <label>{item.content}</label>
              <button
                className="destroy"
                name={index}
                onClick={removeItem}
              ></button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default List