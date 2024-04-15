
import './App.css';
import CryptImage from "./imgs/CryptImage.jpg"
import NavBar from './Components/NavBar';
import { Outlet } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      
    <header className="App-header">
      <img src={CryptImage} alt='Cryptid Image' />
     <NavBar/>
    </header>
    <main>
    <Outlet/>
    </main>
  
  </div>
  );
}

export default App;
