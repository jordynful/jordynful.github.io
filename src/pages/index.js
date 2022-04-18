import React from 'react';
import Typest from 'react-typist';
import './Styles.css';
const Home = () => {
  return (
    <><div class = "aboutP">
      <Typest>
        Hello, I'm Jordyn Fulbright.
        </Typest>
    </div>

      <div class="front">
        <div class="page">
          <p> I'm an aspiring full-stack developer based in Athens, GA, and am currently pursuing
            my B.S in Computer Science at the University of Georgia. I'm a third year student 
            expecting to graduate in May 2023.  
          </p>
          {/* <a href='./Fulbright_Resume_April.pdf' download>My Resume</a> */}
        </div>
        <div class="web">


        </div>
      </div>

    </>
  );
};

export default Home;
