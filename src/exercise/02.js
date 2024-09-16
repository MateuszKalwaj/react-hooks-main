// useEffect: persistent state
// http://localhost:3000/isolated/exercise/02.js

import {useEffect, useState} from "react";

const useLocalStorageState = (initialName) => {
    const [name, setName] = useState(() => localStorage.getItem('name') || initialName)

    useEffect (() => {
        localStorage.setItem('name', name);
    },[name])

    return [name, setName];
}

function Greeting({initialName}) {
    const [name, setName] = useLocalStorageState(initialName);
    function handleChange(event) {
        setName(event.target.value)
    }
    
    return (
        <div>
            <form>
                <label htmlFor="name">Name: </label>
                <input value={name} onChange={handleChange} id="name" />
            </form>
            {name ? <strong>Hello {name}</strong> : 'Please type your name'}
        </div>
    )
}

function useCounter(initialValue = 0) {
    const [count, setCount] = useState(initialValue)
    const increment = () => setCount((prevState) => prevState + 1);
    return [count, increment];
}


function App() {
    const [count, setCount] = useCounter();
    return <>
        <Greeting initialName={"sir Mateusz"} />
        <button onClick={setCount}>{count}</button>
    </>
}

export default App