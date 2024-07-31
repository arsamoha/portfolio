import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <h1 class="name1">ARSHAD MOHAMMAD</h1>
      <h1 class="name2">أرشد محمد</h1>
      </div>
      <div class="subpages">
        <p class="about">ABOUT ME</p>
        <p class="resume">RESUME</p>
        <p class="photography">PHOTOGRAPHY</p>
        <p class="cad">CAD</p>
        <p class="art">ART</p>
        <p class="projects">PROJECTS</p>
        <div class="projectnames">
          <p class="icook">ICOOK</p>
          <p class="gazetracker">GAZE TRACKER</p>
          <p class="cat">CAT'S ROOM</p>
        </div>
      </div>
    </>
  )
}

export default App
