
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, {useState} from 'react';
import Alert from'./components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";



function App() {
  const[mode,setMode]=useState('light');
  const[alert,setalert]=useState(null);

  const showAlert=(message,type)=>{
    setalert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setalert(null);
    },2000)
    
  }

   const toggleMode=()=>{
      if(mode === 'light'){
      setMode('dark');
       document.body.style.backgroundColor='#042743';
       showAlert("Dark mode has enabled","success");
      // document.title="Textutils - Dark Mode" 
    //   setInterval(()=>{
    //   document.title="Textutils is Amazing Mode";
    // },2000)
    //    setInterval(()=>{
    //   document.title="Textutils install now";
    // },1500)
      }
      
      else
     {
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has enabled","success");
      // document.title="Textutils - Light Mode"
     }
    }
 return (
    <>   
      <Router>
        <Navbar title='Textutils ' aboutText='About' mode={mode} toggleMode={toggleMode}/> 
        <Alert alert={alert}/>
        <div className='container my-3'>
            <Routes>
              <Route exact path="/about" element={<About mode={mode} />} >
              {/* mode={mode} */}
              </Route>
              <Route exact path="/" element={<Textform heading='Textutils - Word Counter , Character Counter , Remove Extra Spaces' showAlert={showAlert} mode={mode}/>}>
              </Route>
            </Routes>  
            {/* <Textform heading='Enter the text to analyze' showAlert={showAlert} mode={mode}/> */}
        </div>
      </Router>
    </>
  );
}

export default App;
