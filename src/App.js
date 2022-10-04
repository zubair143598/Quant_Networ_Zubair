import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle";
import AOS from 'aos';
import 'aos/dist/aos.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Base from './Components/Layout/Base';
import Home from './Pages/Home';
import { useState } from 'react';
import Aos from 'aos';

function App() {
  useState(()=>{
    Aos.init({duration:1500})
  })
  return (
    <>
    <BrowserRouter>
    <Base>
    <Routes>
      <Route index path="/" element={<Home/>} />
    </Routes>
    </Base>
    </BrowserRouter>
    </>
  );
}

export default App;
