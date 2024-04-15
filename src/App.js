
import './App.css';
import CryptImage from "./imgs/CryptImage.jpg"
import NavBar from './Components/NavBar';
import { Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
function App() {
  const [crypt, setCrypt] = useState([])
    
  useEffect(() => {
      fetch("http://localhost:3000/cryptids")
      .then(res => res.json())
      .then(res => setCrypt(res))
  }, [])
  
  return (
    <div className="App">
      
    <header className="App-header">
      <img src={CryptImage} alt='Cryptid Image' />
     <NavBar/>
    </header>
    <main>
    <Outlet context={[crypt, setCrypt]}/>
    </main>
  
  </div>
  );
}

export default App;
