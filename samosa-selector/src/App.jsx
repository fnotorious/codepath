import './App.css';
import { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);
  const [multiplier, setMultiplier] = useState(1);
  const image = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fpngtree.com%2Fso%2Fsamosa&psig=AOvVaw2TCGYTh_-JVE1txBfuVh7U&ust=1727226960631000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCNjKk_2z2ogDFQAAAAAdAAAAABAh";

  const updateCount = () => setCount(count + multiplier);

  const buyWithMultiplier = (numToMultiply, limit) => {
    if (count >= limit) {
      setMultiplier(multiplier * numToMultiply);
    }
    
    setCount(count - limit);
  };

  return (
    <div className="App">
      <div className="header">
        <h1>Samosa Selector</h1>
        <h2>Count: {count}</h2>
        <img className="samosa" src={image} onClick={updateCount} />
      </div>
      <div className="container">
        <div className="upgrade">
          <h3>Double Stuffed 👯‍♀️</h3>
          <p>2x per click</p>
          <button onClick={() => buyWithMultiplier(2, 10)}>10 samosas</button>
        </div>
        <div className="upgrade">
          <h3>Party Pack 🎉</h3>
          <p>5x per click</p>
          <button onClick={() => buyWithMultiplier(5, 100)}>100 samosas</button>
        </div>
        <div className="upgrade">
          <h3>Full Feast 👩🏽‍🍳</h3>
          <p>10x per click</p>
          <button onClick={() => buyWithMultiplier(10, 1000)}>1000 samosas</button>
        </div>
      </div>
    </div>
  )
}

export default App
