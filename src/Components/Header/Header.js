import {useRef} from 'react';

import './Header.css'

function Header(props) {

    let inputRef = useRef(null);

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            props.addToDo(inputRef.current.value);
            inputRef.current.value = '';
        }
      }
    

    return (
        <header className="header">
            <h1>todos</h1>
            <form>
                <input className="new-todo" ref={inputRef} onKeyDown={handleKeyDown} placeholder="What needs to be done?" autoFocus />
            </form>
        </header>
    )
}

export default Header