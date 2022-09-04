import React from 'react'

import './List.css'

function List(props) {

  return (
    <section className="main">

      {props.todos.length > 0 && (
        <a href='#' onClick={
          (event) => {
            event.preventDefault();
            props.completeAllItem();
          }
        } >
          <input className="toggle-all" type="checkbox" />
          <label htmlFor="toggle-all" >
            Mark all as complete
          </label>
        </a>
      )}

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
                onClick={
                  (event) => {
                    event.preventDefault();
                    props.completeItem(item);
                  }
                }
              />
              <label>{item.content}</label>
              <button
                className="destroy"
                name={index}
                onClick={
                  (event) => {
                    event.preventDefault();
                    props.removeItem(item);
                  }
                }
              ></button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default List