import React from "react";
import { StyledNavBar } from "./Navbar.styles.js";
import { Button } from '../Button/Button.js'

export const Navbar = (props) => {
  const { changePage } = props;

  return (
    <StyledNavBar>
      <Button type={'primary'} functionality={changePage} label='Home'/>
      <Button type={'primary'} functionality={changePage} label='Profile'/>
      <Button type={'primary'} functionality={changePage} label='Details'/>
      <Button type={'primary'} functionality={changePage} label='Log in'/>
    </StyledNavBar>
  )
};
