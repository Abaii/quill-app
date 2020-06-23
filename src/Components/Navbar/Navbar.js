import React from "react";
import { Container } from "react-bootstrap";
import { Button } from '../Button/Button.js'

export const Navbar = (props) => {
  const { changePage } = props;

  return (
    <Container>
      <Button type={'primary'} functionality={changePage} label='Home'/>
      <Button type={'primary'} functionality={changePage} label='Profile'/>
      <Button type={'primary'} functionality={changePage} label='Details'/>
      <Button type={'primary'} functionality={changePage} label='Log in'/>
    </Container>
  )
};
