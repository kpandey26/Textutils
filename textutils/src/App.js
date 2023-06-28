import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';
import Alert from './components/Alert';




function App() {
  const [mode, setMode]=useState('light');  //whether darkMode is enabled or not.
  const [alert, setAlert]=useState(null);
  const showAlert=(message,type)=>{
     setAlert({
      msg:message,
      type:type
     })
     setTimeout(()=>{
      setAlert(null);
     },1500);
  }   //showalert is a function which is used to set alert messages.
  
  
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='grey';
      showAlert("Dark mode has been enabled","success");
      document.title="Textutils-DarkMode";
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","success");
      document.title="Textutils-DarkMode";
    }
  }
  return (
   
    <>
    <Navbar title="textutils" aboutText={"About us"} mode ={mode} toggleMode={toggleMode}/>
   
    <About/>
    
    <Alert alert={alert}/>
    <div className="container my-3">
    <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>
 
   
    </div>
   
   
    </>
    
   
  

   
  );
}

export default App;
