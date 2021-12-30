import React from 'react';
import './App.css';

function App() {
  return (
    <div className="main">
        <h1>FIRST PAGE</h1>
        <div className="sub-main">
        <label htmlFor="name">Name</label>
        <input type="text" placeholder='Enter Your name'></input>
      </div>

      <div className="subb-main">
      <label for="guessField">Enter a guess: </label>
      <input type="text" id="guessField" placeholder='Enter number between 1-9' class="guessField" />
      </div>

      <div className="button">
        <button>Start</button>
      </div>
    </div>
  );
}

export default App;
