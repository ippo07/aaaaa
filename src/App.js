import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Form from './components/Form';

import Alert from './components/Alert';
import About from './components/About';

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
    const[count,setCount]=useState(0);
    const[mode,setMode]=useState("light");
    const[alert,setAlert]=useState(0);
    function handleClick(){
        setCount(count+1);
       }
      
       function toggleMode(){
        if(mode==="light"){
            setMode("dark");
            document.body.style.backgroundColor="#252545"
            showAlert(" Enabled Dark Mode ","Success")
            
         
        }
        else{
            setMode("light")
            document.body.style.backgroundColor="white"
            showAlert(" Enabled Light Mode ","Success");
            setInterval(()=>{
                document.title='Builder -Dark Mode';
                },2000);

        }
       }
       const showAlert=(message,type)=>{
       setAlert({
            msg : message,
            type  : type
        })
        setTimeout(()=>{
           setAlert(null);
        },1500)
        
        
       }
    return(
      
        <>
              <BrowserRouter>
              <Navbar title="Builders" action="reaction" smode={mode} onClick={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-4" mode={mode}>
          <Routes>
            <Route exact path="/about" element={<About />}></Route>
            <Route
              exact path="/"
              element={
                <Form
                  showAlert={showAlert}
                  header="Write text here"
                  smode={mode}
                />
              }
            ></Route>
          </Routes>
        </div>
      </BrowserRouter>
        </>

);  

}
export default App;

