import React from "react";
import { Container, Nav, Navbar} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from "../../images/logo.png";
import './Header.css'

const Header = () => {
  return (
    <div>
      <Navbar bg="dark" expand="md">
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} alt="logo" height="80"/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto textLight navLink">
              <NavLink to="/quizhub" className="ms-3">Quiz Hub</NavLink>
              <NavLink to="/statistic" className="ms-3">Statistic</NavLink>
              <NavLink to="/blog" className="ms-3">Blog</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;