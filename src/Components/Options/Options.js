import React from 'react'

import './Options.css'

function Options(props) {
    return (
        <footer className="footer">
            <span className="todo-count">
                <span><strong>{props.countActive}</strong> items left </span>
            </span>

            <ul className="filters">
                <li>
                    <a href="#/" className="selected">All</a>
                </li>
                <li>
                    <a href="#/">Active</a>
                </li>
                <li>
                    <a href="#/">Completed</a>
                </li>
            </ul>

            {
                props.countCompleted > 0 &&
                <button className="clear-completed" onClick={props.clearCompleted}>
                    Clear completed
                </button>
            }

        </footer>
    )
}

export default Options