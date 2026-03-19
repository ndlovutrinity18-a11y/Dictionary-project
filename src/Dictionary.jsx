import React from 'react';
import './Dictionary.css';
export default function Dictionary() {
  return (
    <div className="Dictionary">
        <form>
          <input type="text" placeholder="Enter a word..." />
          <button type="submit">Look Up</button>
        </form>
        <div className="results">
        </div>
    </div>
  );
}