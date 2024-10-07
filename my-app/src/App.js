import './App.css';
import AboutUs from './components/about';
import Navbar from './components/navbar';
import Textform from './components/textform';
import { useState } from 'react';
function App() {
  const [mode, setMode] = useState('light')
  const theme=()=>{
    if(mode ==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#181818';
      document.body.style.color='white';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
    }
  }
  return (
    <>
    <Navbar name = 'Text.Uitls' section = 'About us' mode = {mode} theme={theme}/>
    <h1>hello react</h1>
    <div className="container">
    <AboutUs mode={mode}/>
    <Textform mode={mode}/>
    </div>
    </>
  ); 
}

export default App;
