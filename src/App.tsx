import React from 'react';
import logo from './logo.svg';
import './App.css';
import { advice } from './advice';

interface Advice {
  piece: string;
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <ul>
          {advice.map((piece<Advice>) => {
            <li>{piece}</li>
          })}
        </ul>
      </header>
    </div>
  );
}

export default App;
