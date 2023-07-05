// useEffect: persistent state
// http://localhost:3000/isolated/exercise/02.js

import * as React from 'react'
import {useState} from "react";

function Greeting({initialName = ''}) {
  console.log("Render component")
  const [name, setName] = React.useState(
      ()=> window.localStorage.getItem('name') || initialName
  )

  React.useEffect(()=> {
    console.log("UseEffect call!")
    window.localStorage.setItem('name', name);
  },[name])

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

function App() {
  const [count, setCount] = useState(0);
  return(
      <>
        <button onClick={()=> setCount(prevCount => prevCount + 1)}>
          {count}
        </button>
        <Greeting initialName={'Mike Hunt'} />
      </>
  )
}

export default App
