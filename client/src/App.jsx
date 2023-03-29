import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from "axios";
import './App.css'

function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    axios.get('/api')
    .then((res) => {
      console.log(res.data);
      setData(res.data);
    })
    .catch((err) => {
      console.error(err);
    });  
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={reactLogo} className="App-logo" alt="logo" />
        <p>{!data ? "Loading..." : data.message}</p>
        <a href="">Amo a mi amore!!!</a>
      </header>
    </div>
  );
}

export default App
