import React from "react";
import {
  Switch,
  Route
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Col, Row } from 'react-bootstrap';
import { Navbar } from './Components/Navbar/Navbar.js';
import { HomePage } from './Components/HomePage/HomePage.js';
import { Banner } from './Components/Banner/Banner.js';
import { AppWrapper, TopBar } from './App.styles.js';


function App() {
  return (
    <AppWrapper>
      <TopBar>
        <Container fluid>
            <Row className='justify-content-between'>
              <Col xs='12' lg='4'><Banner/></Col>
              <Col xs='12' lg='5'><Navbar/></Col>
            </Row>
        </Container>
      </TopBar>
      <Container fluid>
        <Row>
          <Switch>
            {/* If the current URL is /about, this route is rendered
                while the rest are ignored */}
              <Route path="/Details">
                <div>Details page placeholder</div>
              </Route>
              <Route path="/Profile">
                <div>Profile page placeholder</div>
              </Route>
              <Route path="/">
                <HomePage/>
              </Route>
            </Switch>
        </Row>
      </Container>
    </AppWrapper>
  )
};

export default App;
