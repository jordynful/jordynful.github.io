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
          <p> I’m a technical project manager with a B.S. in Computer Science from the University of Georgia. I help teams turn ideas into working systems by keeping projects organized, solving problems, and bridging communication between technical and non-technical stakeholders. My work sits at the intersection of engineering, operations, and execution.
          </p>
          {/* <a href='./Fulbright_Resume_April.pdf' download>My Resume</a> */}
        </div>

      </div>

    </>
  );
};

export default Home;
