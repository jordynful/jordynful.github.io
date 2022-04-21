import React from 'react';
import Typest from 'react-typist';

const NewMedia = () => {

  return (
    <>
      <div class="aboutP">
        <Typest>
          New Media Portfolio
        </Typest>
      </div>

      <div class="front">
        <div class="page">
          <h2>About Me</h2>
          <p> I'm an aspiring full-stack developer based in Athens, GA, and am currently pursuing
            my B.S in Computer Science at the University of Georgia. I'm a third year student
            expecting to graduate in May 2023. I've completed a variety of relevant course work
            in the computer science field and enjoy applying my experience in programming to
            real world solutions. I love interacting with people and working in teams. Problem
            solving is my specialty, but I love a good organization task.
          </p>
          {/* <a href='./Fulbright_Resume_April.pdf' download>My Resume</a> */}
        </div>
        <div class="web">


        </div>
      </div>

    </>


  );
};

export default NewMedia;