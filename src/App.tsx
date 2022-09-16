
import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { advice } from './advice';

interface T {
  advice: string[];
}

function App() {
  const [currentQuote, setCurrentQuote] = useState(advice[Math.floor(Math.random() * advice.length)]);

  const randomQuote = (e: React.MouseEvent<HTMLButtonElement>) => { 
    e.preventDefault();
    setCurrentQuote(advice[Math.floor(Math.random() * advice.length)]);
   }

  return (
    <div className="App">
        <h2>{currentQuote}</h2>
        <button onClick={randomQuote}>More Advice</button>
        {/* <ul>
          {advice.map((quote: string) => {
            return <li>{quote}</li>
          })}
        </ul> */}
    </div>
  );
}

export default App;
