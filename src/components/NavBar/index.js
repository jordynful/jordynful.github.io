
import '../../pages/Styles.css';
import React, { useState } from "react";
import {
  Nav,
  Bars,
  NavMenu,
  NavLink,
  NavBtn,
  NavBtnLink,
  DropDownContainer
} from './NavbarElements';
import styled from 'styled-components';

const DropDownHeader = styled("div")``;
const DropDownListContainer = styled("div")``;

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const toggling = () => setIsOpen(!isOpen);
  return (
    <>
      <Nav>
        <div class="git">
          <a class="links" href="https://github.com/jordynful" activeStyle>
            <img src={require('./githubAlt.png')} alt="GitHub logo" class="img" />
          </a>
          <a class="links" href="https://www.linkedin.com/in/jordyn-fulbright-92825053/" activeStyle>
            <img src={require('./link.png')} alt="Linkedin logo" class="img"></img>
          </a>
        </div>

        <div>
        <DropDownHeader onClick={toggling}>
              {/* {selectedOption || "Mango"} */}
              <Bars />
            </DropDownHeader>
          <DropDownContainer class= "dropContainer">
            
            {isOpen && (
              <DropDownListContainer class="drop" >
                <ul class = "listLink">
                  <NavLink class = "Altlinks" to='/' activeStyle>
                    Home
                  </NavLink>
                  <NavLink class="Altlinks" to='/contact' activeStyle>
                    Contact
                  </NavLink>
                  <NavLink class="Altlinks" to='/portfolio' activeStyle>
                    Portfolio
                  </NavLink>
                </ul>
              </DropDownListContainer>
            )}
          </DropDownContainer>
        </div>

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
}