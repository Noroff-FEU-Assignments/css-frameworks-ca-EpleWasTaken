import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import "./css/styles.css";
import Footer from "./components/Footer";
import Nav from "react-bootstrap/Nav";
import Home from "./components/home/Home";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import "bootstrap/dist/css/bootstrap.min.css";
import Contact from "./components/contact/Contact";
import News from "./components/news/News";

function App() {
  return (
    <>
      <div className="wrapper">
        <Router>
          <div>
            <Navbar bg="light" expand="md">
              <div className="container">
                <Navbar.Brand className="logo" href="/">
                  The YAY Company
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mr-auto">
                    <NavLink exact to="/" className="navbar__text">
                      Home
                    </NavLink>
                    <NavLink to="/news" className="navbar__text">
                      News
                    </NavLink>
                    <NavLink to="/contact" className="navbar__text">
                      Contact
                    </NavLink>
                  </Nav>
                  <Form className="d-flex">
                    <Form.Control
                      type="search"
                      placeholder="Search"
                      className="mr-2"
                      aria-label="Search"
                    />
                    <Button variant="outline-success">Go</Button>
                  </Form>
                </Navbar.Collapse>
              </div>
            </Navbar>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/news">
                <News />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
      <Footer />
    </>
  );
}

export default App;
