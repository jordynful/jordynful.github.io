import React from 'react';
import { Typewriter } from 'react-simple-typewriter'
import './Styles.css';
const Home = () => {

  return (
    <> 
    
    <div class="aboutP">
          <span style={{ color: 'black', fontWeight: 'bold' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['Hello, my name is Jordyn Fulbright']}
            loop={1}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            delaySpeed={1000}
          />
          </span>
        </div>


      <div class="front">
        
        <div class="page">
          <h1>Who am I?</h1>
          <p> I’m a full-stack developer and technical project manager with a B.S. in Computer Science from the University of Georgia. I specialize in turning complex challenges into actionable solutions by bridging communication between engineers and business stakeholders. I thrive on organizing cross-functional teams, troubleshooting problems, and delivering results. I’m passionate about public speaking and honing leadership skills through avenues inside and outside of the office.
          </p>
          {/* <a href='./Fulbright_Resume_April.pdf' download>My Resume</a> */}
        </div>

      </div>

    </>
  );
};

export default Home;
