import React from "react";
import "./App.css";
import { Routes, BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import About from "./Components/About";
import Home from "./Components/Home";
import Users from "./Components/Users";
import "bootstrap/dist/css/bootstrap.css";

const App = () => {
  return (
    <>
      <Router>
        <Navbar bg="primary" variant="dark">
          <Container>
            <Navbar.Brand as={Link} to="/">
              ServiceWorker
            </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/users">
                Users
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
