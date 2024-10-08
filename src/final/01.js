// useState: greeting
// http://localhost:3000/isolated/final/01.js

import * as React from 'react'
import {useState} from "react";

function Greeting() {
  const [name, setName]= useState('');

  function handleChange(event) {
    setName(event.target.value);
  }
  console.log(name)

  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input onChange={handleChange} id="name" />
      </form>
      {name ? <strong>Hello {name}</strong> : 'Please type your name'}
    </div>
  )
}

function App() {
  return <Greeting />
}

export default App
