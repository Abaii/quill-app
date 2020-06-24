import React from "react";
import { StyledNavBar } from "./Navbar.styles.js";
import { Button } from '../Button/Button.js'
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <StyledNavBar>
      <NavLink to="/"><Button type='primary' label='Home'/></NavLink>
      <NavLink to="/Details"><Button type='primary' label='Details'/></NavLink>
      <NavLink to="/Profile"><Button type='primary' label='Profile'/></NavLink>
      <NavLink to="/Log-in"><Button type='primary' label='Log in'/></NavLink>
      <NavLink to="/Sign-up"><Button type='primary' label='Sign up'/></NavLink>
    </StyledNavBar>
  )
};
