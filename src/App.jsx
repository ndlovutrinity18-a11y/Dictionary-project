import React from 'react'
import './App.css'
import Dictionary from './Dictionary.jsx';
export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header>
          <h1>Dictionary</h1>
          <p>Type a word to look up its definition.</p>
        </header>
        <main>
          <Dictionary />
        </main>
        </div>
    </div>
  )
}