import { useState, useEffect } from 'react'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [list, setList] = useState(null)
  const API_KEY = import.meta.env.VITE_APP_API_KEY;
  const url = `https://min-api.cryptocompare.com/data/all/coinlist?&api_key=${API_KEY}`;

  useEffect(() => {
    const fetchAllCoinData = async () => {
      const response = fetch(url);
      const data = await response.json;
      setList(data);
    }

    fetchAllCoinData().catch(console.error);
  }, []);

  return (
    <div className="whole-page">
      <h1>My Crypto List</h1>
        <ul>
            
        </ul>
    </div>
  )
}

export default App
