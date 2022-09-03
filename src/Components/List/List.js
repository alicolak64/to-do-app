import React from 'react'

import './List.css'

function List(props) {

    const clicked = (event) => {
        event.preventDefault()
        props.changeStatusAll()
    }

    return (
        <section className="main">

            <a href='#' onClick={clicked}>
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
                      />
                      <label>{item.content}</label>
                      <button
                        className="destroy"
                        onClick={console.log('dsfs') }
                        name={index}
                      ></button>
                    </div>
                  </li>
                ))}
              </ul>
        </section>
    )
}

export default List