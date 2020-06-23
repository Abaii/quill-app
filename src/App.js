import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Col, Row } from 'react-bootstrap';
import { Navbar } from './Components/Navbar/Navbar.js';
import { HomePage } from './Components/HomePage/HomePage.js';
import { Banner } from './Components/Banner/Banner.js';

function App() {
  const [ page, updatePage ] = useState('Home');

  const changePage = (directTo) => {
    updatePage(directTo)
  }; 

  const renderPage = (page) => {
    console.log('Rendered')
    if (page === 'Home') {return <HomePage/>};
    if (page === 'Profile') {return <div>Profile page placeholder</div>};
    if (page === 'Details') {return <div>Details page placeholder</div>};
    if (page === 'Log in') {return <div>Log in page placeholder</div>};
  };

  return (
    <div>
      <Container>
        <Row>
          <Col md='auto'><Banner/></Col>
          <Col md='auto'></Col>
          <Col md='auto'>
            <Navbar changePage={changePage}/>
          </Col>
        </Row>
      </Container>
      <div>
        {renderPage(page)}
      </div>
    </div>
  )
};

export default App;
