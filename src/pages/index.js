import React from 'react';
import { Typewriter } from 'react-simple-typewriter'
import './Styles.css';
const Home = () => {

  return (
    <> <div class="aboutP">
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
          <p> I'm an aspiring full-stack developer based in Athens, GA, and am currently pursuing
            my B.S in Computer Science at the University of Georgia. I'm a fourth year student
            expecting to graduate in May 2023. I've completed a variety of relevant course work
            in the computer science field and enjoy applying my experience in programming to
            real world solutions. I love interacting with people and working in teams. Problem
            solving is my specialty, but I love a good organization task.
          </p>
          {/* <a href='./Fulbright_Resume_April.pdf' download>My Resume</a> */}
        </div>

      </div>

    </>
  );
};

export default Home;
