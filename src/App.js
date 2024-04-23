
import "./Components/App.css"
import CryptImage from "./imgs/CryptImage.jpg"
import NavBar from './Components/NavBar';
import { Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import CryptidContext from "./Components/CryptidContext";

function App() {
  const [crypt, setCrypt] = useState([])
    
  useEffect(() => {
      fetch("http://localhost:3000/cryptids")
      .then(res => res.json())
      .then(res => setCrypt(res))
  }, [])
  
  function handleSubmit (NewCryptid) {
    setCrypt([...crypt, NewCryptid])
  }
  
  return (
    <div className="App">
      
    <header className="App-header">
      <img src={CryptImage} alt='Cryptid Image' className="HeaderImage" />
     <NavBar/>
    </header>
    <main>
    <CryptidContext.Provider value={{ crypt, setCrypt, handleSubmit }}>
          <Outlet />
    </CryptidContext.Provider>
      </main>
    
  
  </div>
  );
}

export default App;
