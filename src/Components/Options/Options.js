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
                    <a
                        href="#"
                        className={(props.status === 'All') ? 'selected' : ''}
                        onClick={
                            (event) => {
                                event.preventDefault();
                                props.changeStatus('All');
                            }
                        }
                    >
                        All
                    </a>
                </li>

                {props.countActive > 0 && (
                    <li>
                        <a href="#"
                            className={(props.status === 'Active') ? 'selected' : ''}
                            onClick={
                                (event) => {
                                    event.preventDefault();
                                    props.changeStatus('Active');
                                }
                            }
                        >
                            Active
                        </a>
                    </li>
                )}

                {props.countCompleted > 0 && (
                    <li>
                        <a
                            href="#"
                            className={(props.status === 'Completed') ? 'selected' : ''}
                            onClick={
                                (event) => {
                                    event.preventDefault();
                                    props.changeStatus('Completed');
                                }
                            }
                        >
                            Completed
                        </a>
                    </li>
                )}

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