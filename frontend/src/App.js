import './App.css';
import {Routes,Route, BrowserRouter} from 'react-router-dom'
import React from 'react'
import Home from './pages/Home'
import Signup from './pages/Signup'
import Login from './pages/Login'
// import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <>
    <BrowserRouter> 
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Signup' element={<Signup/>}/>
        <Route path='/Login' element={<Login/>}/>
        {/* <Route path='/genre' element ={<Genre />}/>
        <Route path='/browse' element ={<Browse />}/> */}
      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
