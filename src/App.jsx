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
        <footer>This project was built by <a href="https://github.com/ndlovutrinity18-a11y" target="_blank" rel="noopener noreferrer">Trinity Ndlovu</a> and is open-sourced on <a href="https://github.com/ndlovutrinity18-a11y/Dictionary-project" target="_blank" rel="noopener noreferrer">GitHub</a></footer>
        </div>
    </div>
  )
}