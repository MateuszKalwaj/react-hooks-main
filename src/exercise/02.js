// useEffect: persistent state
// http://localhost:3000/isolated/exercise/02.js

import * as React from 'react'
import {useEffect, useState} from "react";

function Greeting({initialName = ''}) {
    console.log("calling greetings")
    const [name, setName] = useState(()=> localStorage.getItem('name') || initialName);

    useEffect(() => {
        console.log("calling useEffect")
         localStorage.setItem('name', name);
    })

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
function useCounter() {
    const [count, setCount] = useState(0);
    const increment = () => setCount(prevState => prevState + 1);
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