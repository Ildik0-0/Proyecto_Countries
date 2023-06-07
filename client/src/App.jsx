// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
//import './App.css'
//useLocation, useNavigate
//import { useState, useEffect } from 'react';
//import Home from './components/home/Home.js'
import Home from './components/homeCountry/Home'
import LandingPage from './components/landing/LandingPage'

import { Routes, Route } from 'react-router-dom';

function App() {
  



  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/home' element={<Home/>} />
      </Routes>
    </>
  )
}

export default App
