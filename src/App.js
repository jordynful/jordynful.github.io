import React, { useCallback } from 'react';
import './App.css';
import Navbar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages';
import Portfolio from './pages/port';
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import ContactForm from "./pages/about";
import NewMedia from "./pages/newMedia";

import GrowthForm from './pages/GrowthForm';
import AssessmentForm from './pages/AssessmentForm';
import DailyForm from './pages/DailyForm';
import { useState } from 'react';
import { useEffect } from 'react';

function AppContent() {
  const location = useLocation();
const WORKER_URL = 'https://snowy-surf-6a35.jordynfulbright.workers.dev';
  // routes that should look like a separate app
  const standaloneRoutes = ['/cell-group-growth', '/cell-group-assessment', '/cell-group-daily'];

  const isStandalone = standaloneRoutes.includes(location.pathname);

  const [members, setMembers] = useState([]);
  const [status, setStatus] = useState({ loading: false, msg: '' });
useEffect(() => {
  const fetchMembers = async () => {
    try {
      // Replace with your actual Worker URL
      const response = await fetch('https://snowy-surf-6a35.jordynfulbright.workers.dev/members');
      const data = await response.json();
      
      // Save the list of members into your state
      setMembers(data.members); 
  
    } catch (error) {
      console.error("Error fetching members:", error);
    }
  };

  fetchMembers();
}, []);
  

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    console.log(container);
  }, []);

const handleGlobalSubmit = async (type, payload) => {
  setStatus({ loading: true, msg: 'Saving to Notion...' });
    try {
      const response = await fetch(WORKER_URL, {
        method: 'POST',
        body: JSON.stringify({ formType: type, ...payload }),
      });
      if (response.ok) { alert("Recorded in Notion! 🙌");
      setStatus({ loading: false, msg: 'Recorded in Notion! 🙌' });
      } else {
        setStatus({ loading: false, msg: 'Failed to save.' });
      }
    } catch (err) {
      alert("Error saving data.");
      setStatus({ loading: false, msg: 'Error connecting to server.' });
    }
  };

  return (
    <>
      {!isStandalone && <Navbar />}

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<ContactForm />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/newmedia' element={<NewMedia />} />
         <Route path='/cell-group-growth' element={<GrowthForm onSubmit={handleGlobalSubmit} members ={members} status={status}/>} />
         <Route path='/cell-group-assessment' element={<AssessmentForm onSubmit={handleGlobalSubmit} members ={members} status={status} workerUrl={WORKER_URL}/>} />
         <Route path='/cell-group-daily' element={<DailyForm onSubmit={handleGlobalSubmit} members ={members} status={status}/>} />
      </Routes>

      {!isStandalone && (
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            background: {
              color: {
                value: "#D6EBD6",
              },
              opacity: 0,
            },
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 100,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#919EA1",
              },
              links: {
                color: "#919EA1",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              collisions: {
                enable: true,
              },
              move: {
                directions: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 2,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 80,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 5 },
              },
            },
            detectRetina: true,
          }}
        />
      )}
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
