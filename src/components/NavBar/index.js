import React from 'react';
import '../../pages/Styles.css';
import {
  Nav,
  Bars,
  NavMenu,
  NavLink,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
        <div class = "git">
      <a class="links" href="https://github.com/jordynful" activeStyle>
            <img src={require('./githubAlt.png')} alt="GitHub logo" class="img" />
          </a>
          <a class="links" href="https://www.linkedin.com/in/jordyn-fulbright-92825053/" activeStyle>
          <img src={require('./link.png')} alt="Linkedin logo" class="img"></img>
          </a>
          </div>
        <Bars />
          
          <NavMenu>
          <NavLink class="links" to='/' activeStyle>
            Home
          </NavLink>
          <NavLink class="links" to='/contact' activeStyle>
            Contact
          </NavLink>
          <NavLink class="links" to='/portfolio' activeStyle>
            Portfolio
          </NavLink>
          <h1 class="name"
          >Jordyn Fulbright</h1>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
