// useRef and useEffect: DOM interaction
// 💯 (alternate) migrate from classes
// http://localhost:3000/isolated/exercise/05-classes.js

import * as React from 'react'
import VanillaTilt from 'vanilla-tilt'
import {useEffect} from "react";
function Tilt() {
  const tiltRef = React.useRef()

  useEffect(()=>{
    const tiltNode = tiltRef.current
    const vanillaTiltOptions = {
      max: 25,
      speed: 400,
      glare: true,
      'max-glare': 0.5,
    }
    VanillaTilt.init(tiltNode, vanillaTiltOptions)
    return function cleanup() {
      tiltNode.vanillaTilt.destroy()
    }
  },[])
  return (
      <div ref={tiltRef} className="tilt-root">
        <div className="tilt-child">
          <div className="totally-centered">vanilla-tilt.js</div>
        </div>
      </div>
  )
}
function App() {
  return (
    <Tilt/>
  )
}

export default App
