import React from 'react';
import './Styles.css';

const Portfolio = () => {
    return (

        <>

            <div class="about" >
                <h1>Portfolio</h1>
            </div>
            {/* Holds portfolio */}
            <div class="container" id="particles-js">
                <div class="leftPointer">
                    <div class="leftItem">
                        <div class="github">
                            <p class="head"><em>May 2022</em></p>
                            <a href="https://github.com/jordynful/ReactNativeNMIX4310" activeStyle>
                                <img src={require('../components/NavBar/githubAlt.png')} alt="GitHub logo" class="img" />
                            </a>
                        </div>
                        <h1 class="head">Software Developer App</h1>
                        <p class="description">
                            Developed an app in React Native for a course at UGA. The app implements user-authentication using MongoDB as a databse. The app would be
                            for requesting services from a software
                            developer(me). The user can scroll through the offered services or use the search function.
                            Each service when clicked on, takes the user to a detailed page about the service.</p>
                    </div>

                    <div class="leftItem">
                        <div class="github">
                            <p class="head"><em>March 2022</em></p>
                            <a href="https://github.com/jordynful/MidtermProject" activeStyle>
                                <img src={require('../components/NavBar/githubAlt.png')} alt="GitHub logo" class="img" />
                            </a>
                        </div>
                        <h1 class="head">Trivia App</h1>
                        <p class="description">
                            Developed an app in SwiftUI for a course at the University of Georgia.
                            The app is an animal trivia game with questions from an API. The app
                            allows you to see your score and on each submit shows a new question.</p>
                    </div>
                    <div class="leftItem">
                        <div class="github">
                            <p class="head"><em>February 2022</em></p>
                            <a href="https://github.com/jordynful/IndustRealize" activeStyle>
                                <img src={require('../components/NavBar/githubAlt.png')} alt="GitHub logo" class="img" />
                            </a>
                        </div>
                        <h1 class="head">Strive</h1>
                        <p class="description">
                            Created a website for the UGA Hackathon. The website was intended
                            to act as a platform between contractors and clients for “odd job” type work. During this
                            project, I learned html, css, and Javascript.
                        </p>
                    </div>
                </div>
                <div class="chron">
                    <div class="vertLine"></div>
                </div>
                <div class="rightPointer">
                    <div class="leftItem">
                        <div class="github">
                            <p class="head"><em>April 2022</em></p>
                            <a href="https://github.com/jordynful/DramaApp-41422" activeStyle>
                                <img src={require('../components/NavBar/githubAlt.png')} alt="GitHub logo" class="img" />
                            </a>
                        </div>
                        <h1 class="head">TV Series App</h1>
                        <p class="description">
                            Developed an app in SwiftUI for a course at the University of Georgia.
                            The app allows you to store your TV dramas, with information
                            about them such as your watched status, how many episodes you’ve seen, and any
                            notes about the program.
                        </p>
                    </div>
                    <div class="leftItem">
                        <div class="github">
                            <p class="head"><em>March 2022</em></p>
                            <a href="https://gitfront.io/r/jordynful/PRuPKD65x6Jw/BinaryTrees/" activeStyle>
                                <img src={require('../components/NavBar/githubAlt.png')} alt="GitHub logo" class="img" />
                            </a>
                        </div>
                        <h1 class="head">Binary Search Tree</h1>
                        <p class="description">
                            Wrote a C++ program that creates a Binary Search Tree from
                            an input file of values. The program corrects the tree according
                            to any insertions or deletions during runtime. The program includes a
                            variety of commands, for example, the user can request to
                            get the sum of all values in a subtree.
                        </p>
                    </div>
                    <div class="leftItem">
                        <div class="github">
                            <p class="head"><em>December 2021</em></p>
                            <a href="https://gitfront.io/r/jordynful/mkHHw24rF5Ed/HomemadeShell/" activeStyle>
                                <img src={require('../components/NavBar/githubAlt.png')} alt="GitHub logo" class="img" />
                            </a>
                        </div>
                        <h1 class="head">Immitation Shell</h1>
                        <p class="description">
                            Developed a fully operational immitation shell in c++ for a course
                            at the University of Georgia. The project taught me to work with
                            forks and their parent/child processes as well as system calls within
                            a program.
                        </p>
                    </div>

                </div>


            </div>
        </>

    );
};


export default Portfolio;
