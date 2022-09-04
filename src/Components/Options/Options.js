import React from 'react'

import './Options.css'

function Options() {
    return (
        <footer className="footer">
            <span className="todo-count">
                <span><strong>2</strong> items left </span>
                
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

            <button className="clear-completed">
                Clear completed
            </button>
        </footer>
    )
}

export default Options