import React from "react";
import { StyledNavBar } from "./Navbar.styles.js";
//import { Button } from '../Button/Button.js'
import { NavLink } from "react-router-dom";
import './NavBar.css';

export const Navbar = () => {
  return (
    <StyledNavBar>
      <NavLink exact className='StyledLink' activeClassName='ActiveStyledLink' to="/">Home</NavLink>
      <NavLink exact className='StyledLink' to="/Profile">Profile</NavLink>
      <NavLink exact className='StyledLink' to="/Details">Details</NavLink>
    </StyledNavBar>
  )
};
