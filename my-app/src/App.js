import './App.css';
import AboutUs from './components/about';
import Alert from './components/alert';
import Navbar from './components/navbar';
import Textform from './components/textform';
import { useState } from 'react';
function App() {
  const [mode, setMode] = useState('light')
  const [alertmsg, setAlertmsg] = useState('dark mode enabled')
  const theme=()=>{
    if(mode ==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#181818';
      document.body.style.color='white';
      setAlertmsg('dark mode enabled')
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      setAlertmsg('light mode enabled')

    }
  }
  return (
    <>
    <Navbar name = 'Text.Uitls' section = 'About us' mode = {mode} theme={theme}/>
    <div className="container">
      <Alert alertmsg={alertmsg}/>
    <AboutUs mode={mode}/>
    <Textform mode={mode}/>
    </div>
    </>
  ); 
}

export default App;
