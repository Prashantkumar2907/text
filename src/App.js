import { useState } from 'react';
import './App.css';
import Navbar from './Navbar';
import TextForm from './TextForm';
import Alert from './Alert';

function App() {
  const [darkmode,setdarkmode] = useState('light')
  const [alert, setalert] = useState(null)

  const showalert = (msg,type) =>{
    setalert({
      message : msg,
      type : type
    });
    setTimeout(()=>{setalert(null)},2000);
  }


  
  const toggleMode = ()=>{
    if(darkmode==='light'){
      setdarkmode('dark')
      document.body.style.backgroundColor='black'
      showalert("Dark Mode Enabled","success")
    }else{
      setdarkmode('light')
      document.body.style.backgroundColor='white'
      showalert("Light Mode Enabled","success")
    }
  }

  return (
   <>
   <Navbar title={"TextWork"} toggleMode={toggleMode} darkmode={darkmode}/>
   <Alert alert={alert}/>
   <TextForm heading = "Enter your text to analyze:-" showalert={showalert} darkmode={darkmode}/>
   </>
  );
}

export default App;
