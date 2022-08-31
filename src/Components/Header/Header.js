import React from 'react'

import './Header.css'

function Header() {
    return (
        <header className="header">
            <h1>todos</h1>
            <form>
                <input className="new-todo" placeholder="What needs to be done?" autoFocus />
            </form>
        </header>
    )
}

export default Header