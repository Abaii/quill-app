import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Col, Row } from 'react-bootstrap';
import { Navbar } from './Components/Navbar/Navbar.js';
import { HomePage } from './Components/HomePage/HomePage.js';
import { Banner } from './Components/Banner/Banner.js';
import { AppWrapper, TopBar } from './App.styles.js';


function App() {
  const [ page, updatePage ] = useState('Home');

  const changePage = (page) => {
    updatePage(page)
  }; 

  const renderPage = (page) => {
    console.log('Rendered')
    if (page === 'Home') {return <HomePage/>};
    if (page === 'Profile') {return <div>Profile page placeholder</div>};
    if (page === 'Details') {return <div>Details page placeholder</div>};
    if (page === 'Log in') {return <div>Log in page placeholder</div>};
  };

  return (
    <AppWrapper>
      <TopBar>
        <Container fluid>
            <Row className='justify-content-between'>
              <Col xs='12' lg='4'><Banner/></Col>
              <Col xs='12' lg='5'><Navbar changePage={changePage}/></Col>
            </Row>
        </Container>
      </TopBar>
      <Container fluid>
        <Row>
          <div>
            {renderPage(page)}
          </div>
        </Row>
      </Container>
    </AppWrapper>
  )
};

export default App;
