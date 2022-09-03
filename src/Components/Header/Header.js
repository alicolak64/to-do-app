import { useRef } from 'react';

import './Header.css'

function Header(props) {

    let inputRef = useRef(null);

    const handleKeyDown = (event) => {

        if (event.key === 'Enter') {

            event.preventDefault()

            if (inputRef.current.value.trim() !== '') {

                props.addToDo(inputRef.current.value.trim());
                inputRef.current.value = '';

            }
        }
    }


    return (
        <header className="+">
            <h1>todos</h1>
            <form>
                <input className="new-todo" ref={inputRef} onKeyDown={handleKeyDown} placeholder="What needs to be done?" autoFocus />
            </form>
        </header>
    )
}

export default Header