import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Home'

function App() {
 

  return (
    <div className='app'>
      <nav>
        <ul>
          <li>Home</li>
          <li>Login</li>
          <li>Register</li>
        </ul>
      </nav>
    <Home/>
     
    </div>
  )
}

export default App
