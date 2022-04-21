import React from 'react';
import './App.css';
import Navbar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Portfolio from './pages/events';
import ParticlesBg from 'particles-bg'
import ContactForm from "./pages/about";
import MyBook from './pages/flipbook';
import NewMedia from "./pages/newMedia";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/contact' element={<ContactForm />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/nmc' element={< NewMedia />} />
        </Routes>
      </Router>
    <>
    
    <ParticlesBg  className="bubbles" type="cobweb" bg={true}/>

    </>

      
    </>

  );
}

export default App;


