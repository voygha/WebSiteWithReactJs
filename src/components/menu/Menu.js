import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavLink} from "react-router-dom";

class Menu extends Component {
  render() {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                <NavLink to="/" className="nav-link">Home </NavLink>
                <Nav className="me-auto">
                    <NavLink to="/" className="nav-link">Home </NavLink>
                    <NavLink to="/nosotros" className="nav-link">Nosotros </NavLink>
                    <NavLink to="/servicios" className="nav-link">Servicios </NavLink>
                    <NavLink to="/contacto" className="nav-link">Contacto </NavLink>
                    <NavLink to="/post" className="nav-link">Post API </NavLink>
                </Nav>
                </Container>
            </Navbar>
        </div>
    )
  }
}

export default Menu;
