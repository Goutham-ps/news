import React from 'react';
import './App.css';
import Login from './Components/Login'
import Home from "./Components/Home";
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import About from './Components/About';
import SignUp from './Components/Signup';
import Contact from './Components/Contact';



const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/Home' element={<Home/>}/>
          <Route path="/About" element={<About/>} />
          <Route path='/SignUp' element={<SignUp/>}/>
          <Route path='/Contact' element={<Contact/>}/>
         
      </Routes>
      </BrowserRouter>   
    </div>
  );
}

export default App;
