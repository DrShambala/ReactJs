import { type } from '@testing-library/user-event/dist/type';
import './App.css';
import AboutUs from './components/about';
import Alert from './components/alert';
import Navbar from './components/navbar';
import Textform from './components/textform';
import { useState } from 'react';
function App() {
  const [mode, setMode] = useState('light');
  const [bgtheme, setBgtheme] = useState('red')
  const [alertmsg, setAlertmsg] = useState(null);

  const alertMsg=(message,type)=>{
    setAlertmsg({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setAlertmsg(null);
    }, 2000);
  }

  const theme=()=>{
    if(mode ==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#181818';
      document.body.style.color='white';
      alertMsg('dark mode enabled','success')
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      document.body.style.color='black';
      alertMsg('light mode enabled','primary')
    }
  }

  const themeRed=()=>{
    setMode('danger')
    document.body.style.backgroundColor='#690000';
      document.body.style.color='white';
  }
  const themeBlue=()=>{
    setMode('primary')
    document.body.style.backgroundColor='#000080';
      document.body.style.color='white';
  }
  const themeGreen=()=>{
    setMode('success')
    document.body.style.backgroundColor='#0d482d';
      document.body.style.color='white';
  }
  return (
    <>
    <Navbar name = 'Text.Uitls' section = 'About us' mode = {mode} theme={theme} themeRed={themeRed} themeBlue={themeBlue} themeGreen={themeGreen} />
    <div className="container">
      <Alert alertmsg={alertmsg}/>

      <Textform alertMsg={alertMsg} mode={mode}/>
    </div>
    </>
  ); 
}

export default App;
