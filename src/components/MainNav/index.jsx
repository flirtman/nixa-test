import React from 'react';
import {Navbar, Nav,  NavDropdown} from 'react-bootstrap';
import './styles.scss';

import logo from '../../assets/images/logo.png';

export const MaineNav = () => {
    return (
        <div id="maine-nav-center">
            <ul>
                <li>
                    <Nav.Link href="/">About Us</Nav.Link>
                </li>
                <li>
                    <Nav.Link href="/">Work</Nav.Link>
                </li>
                <li><Nav.Link href="/">
                    <img src={logo} alt="" className="logo"/></Nav.Link>
                </li>
                <li>
                    <Nav.Link href="/">Shop</Nav.Link>
                </li>
                <li>
                    <Nav.Link href="/">Contact</Nav.Link>
                </li>
            </ul>
        </div>
    );
};

export const MainMobileNav = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="/">
                <img src={logo} alt="" className="logo"/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/about">About Us</Nav.Link>
                    <Nav.Link href="/contact">Contact Us</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
};
