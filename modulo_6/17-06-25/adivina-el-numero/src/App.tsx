import React from 'react'
import './App.css'
import Game from './components/Game.jsx'

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Adivina el Número 🎲</h1>
      <Game />
    </div>
  )
}

export default App
