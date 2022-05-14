
import Typest from 'react-typist';
import React, { useState } from "react";
import {
  Projects
} from '../components/NavBar/NavbarElements';
import styled from 'styled-components';
const DropDownHeader = styled("div")``;
const DropDownListContainer = styled("div")``;
const NewMedia = () => {

  return (
    <>
      <div class="aboutP">
        <Typest>
          New Media Portfolio
        </Typest>
      </div>

      <div class="front">
        <h2>NMIX 4220</h2>
        <div class="page">
          <p> In NMIX 4220, I had the opportunity to listen to experts in New Media industries,
            including those in different fields ranging from marketing to software engineering.
            The course also helped me develop effective professional skills as well as professional
            necessities(resumes, business cards, etc). During this semester I've read books and listened
            to lectures to help foster my growth in software development. My favorite assignment
            was learning more about myself, my personality type (ENTP) and the positions that suit me best.
            Lucky for me, my major matches up perfectly!
          </p>
          {/* <a href='./Fulbright_Resume_April.pdf' download>My Resume</a> */}
        </div>
      </div>
      <div class="front1">
        <div class="rop">


          <div class="proj2">
            <h1 class="head1">Favorite Speaker</h1>
            <p class="desc3">
              My favorite speaker so far was Ben Bolton from Verizon. Although he works in the content development field
              and I'm in the software engineering field, I felt that his presentation touched on a lot of aspects of life
              that I care about. For example, I have always wanted to work abroad for a few months or a year, and Ben
              actually did this and explained how he was able to pull it off. Also, I enjoyed hearing about his journey up
              in the content development world, because there is a similar journey for SWE graduates.</p>
          </div>
          <div class="proj2">
            <h1 class="head1">Book Assignment</h1>
            <p class="desc3">
              For one of my professional Development activities, I read the book Cracking the Coding Interview by Gayle Laakmann. 
              This book helped me refine my interview skills, specifically in regards to the technical interview. While reading this
              book, I learned more about Hashmaps specifically, which are vitally important for minimizing algorithm complexity. I also 
              tweaked my resume and website portfolio according to the tips given in this book.</p>
          </div>
          <div class="proj2">
            <h1 class="head1">Ted Talks</h1>
            <p class="desc3">
              During the TED Talk assignment, I watched several lectures on the topic of success
              in the working world. My favorite lecture was one by Tina Seelig called "Little Risks You Can
              Take to Increase Your Luck". This lecture encouraged me to talk to more people and seek out opportunities for connections. Because
              of this talk, I've had the opportunity to attend Hackathons with groups of people I was unfamiliar, and apply for internships where
              my hat was only thrown in the ring because of a connection I made on a whim.</p>
          </div>


        </div>
      </div>

      <div class="frontL">
        <h2>NMIX 4310</h2>
        <div class="pageL">
          <p> In NMIX 4310 I learned to develop IOS apps in SwiftUI. A few things a learned
            throughout this course: formatting apps using Vstacks, Hstacks, and Zstacks, creating different pages
            and link to them using NavigationViews and Links, Animating items, and UserDefault memory allocation.
            Below you can check out a few of the projects I developed this semester.
          </p>
          {/* <a href='./Fulbright_Resume_April.pdf' download>My Resume</a> */}
        </div>

      </div>

      <div class="green">
        <div class="ro">

          <div class="outer">
            <div class="proj">
              <h1 class="head1">TV Series App</h1>
              <p class="desc2">
                Developed an app in SwiftUI for NMIX 4310.
                The app allows you to store your TV dramas, with information
                about them such as your watched status, how many episodes you’ve seen, and any
                notes about the program.</p>
            </div>
            <div class="test">
              <img src={require('./t.png')} alt="TV app" class="img1" />
              <img src={require('./t2.png')} alt="TV app" class="img1" />
              <img src={require('./t3.png')} alt="TV app" class="img1" />
              <img src={require('./t4.png')} alt="TV app" class="img1" />
            </div>
          </div>
          <div class="outer">
            <div class="proj">
              <h1 class="head1">Trivia App</h1>
              <p class="desc">
                Developed an app in SwiftUI for NMIX 4310.
                The app is an animal trivia game with questions from an API. The app
                allows you to see your score and on each submit shows a new question.</p>
            </div>
            <div class="test">
              <img src={require('./q.PNG')} alt="Quiz app" class="img1" />
              <img src={require('./q2.PNG')} alt="Quiz app" class="img1" />
            </div>
          </div>
          <div class="outer">
            <div class="proj">
              <h1 class="head1">Map App</h1>
              <p class="desc">
                Developed an app in SwiftUI for NMIX 4310. The app utilizes the MapKit
                package.
                The app has a list of locations at the University of Georgia that
                I often visit. Each location has 3 options where you can see 3 different types
                of views. Upon clicking each view, you will see the location on a map according
                to its specific coordinates. </p>
            </div>
            <div class="test">
              <img src={require('./m.png')} alt="Map app" class="img1" />
              <img src={require('./m1.png')} alt="Map app" class="img1" />
              <img src={require('./m2.png')} alt="Map app" class="img1" />
            </div>
          </div>
          <div class="outer">
            <div class="proj">
              <h1 class="head1">Dev Contractor App</h1>
              <p class="desc">
                Developed an app in React-Native for NMIX 4310.
                The app implements user-authentication using MongoDB as a databse. The app would be
                 for requesting services from a software
                developer(me). The user can scroll through the offered services or use the search function.
                Each service when clicked on, takes the user to a detailed page about the service. </p>
            </div>
            <div class="test">
              <img src={require('./f5.png')} alt="Map app" class="img1" />
              <img src={require('./f4.png')} alt="Map app" class="img1" />
              {/* <img src={require('./f2.png')} alt="Map app" class="img1" /> */}
              <img src={require('./f.png')} alt="Map app" class="img1" />
              <img src={require('./f3.png')} alt="Map app" class="img1" />
            </div>
          </div>
        </div>
      </div>

    </>


  );
};

export default NewMedia;