import React from 'react';
import logo from '../../logos/Group 1329.png'
import { Button, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
  <Navbar bg="light" expand="lg">
  <Navbar.Brand href=""><img style={{width:'130px'}} src={logo} alt=""/></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto" style={{marginLeft:'400px'}}>
            <Nav.Link href="home" style={{marginLeft:'50px'}}>Home</Nav.Link>
            <Nav.Link href="" style={{marginLeft:'50px'}}>Donation</Nav.Link>
            <Nav.Link href="" style={{marginLeft:'50px'}}>Events</Nav.Link>
            <Nav.Link href="postData" style={{marginLeft:'50px'}}>Blog</Nav.Link>
            <Button variant="primary" style={{marginLeft:'30px', width:'130px'}}>Register</Button>
            <Button variant="dark" style={{marginLeft:'20px', width:'130px'}}>Admin</Button>
            </Nav>
    </Navbar.Collapse>
</Navbar>
    );
};

export default Header;