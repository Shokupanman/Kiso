import React from 'react'
import Routes from './Routes'
import Lander from './components/Lander/Lander'
import './App.css'

function App() {
  return (
    <div className="App">
      <Lander />
      {Routes}
    </div>
  )
}

export default App
