import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
background: #ADD8E6;
height: 85px;
display: flex;
position: sticky;
top:0;
opacity: 0.8;
justify-content: space-around;
padding: 0.2rem calc((60vw - 1000px) / 2);
z-index: 12;
/* Third Nav */
/* justify-content: flex-start; */
`;

export const NavLink = styled(Link)`
color: #808080;
display: flex;
font-size: 20px;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 80%;
cursor: pointer;
border-radius: 10px;
&.active {
	color: #000000;
}
&:hover {
	transition: all 0.2s ease-in-out;
	background: #DCDCDC;
	color: #808080;
}
`;

export const Bars = styled(FaBars)`
display: none;
color: #fff;
@media screen and (max-width: 768px) {
	display: block;
	position: absolute;
	top: 3vh;
	right: 5vw;
	
	font-size: 1.8rem;
	cursor: pointer;
}
`;

export const NavMenu = styled.div`
display: flex;
align-items: center;
margin-right: -24px;
/* Second Nav */
/* margin-right: 24px; */
/* Third Nav */
/* width: 100vw;
white-space: nowrap; */
@media screen and (max-width: 768px) {
	display: none;
}
`;

export const NavBtn = styled.nav`
display: flex;
align-items: center;
margin-right: 24px;
/* Third Nav */
/* justify-content: flex-end;
width: 100vw; */
@media screen and (max-width: 768px) {
	display: none;
}
`;

export const NavBtnLink = styled(Link)`
border-radius: 4px;
background: #808080;
padding: 10px 22px;
color: #000000;
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;
/* Second Nav */
margin-left: 24px;
&:hover {
	transition: all 0.2s ease-in-out;
	background: #fff;
	color: #808080;
}
`;

export const DropDownContainer = styled("div") `
@media screen and (max-width: 768px) {
	position: absolute;
	top: 10;
	right: 0;
	transform: translate(0%, 60%);
	font-size: 1.8rem;
	cursor: pointer;
	background: #555b6e;
	padding: 0px;
	width: 30vw;
	
	
}
`;