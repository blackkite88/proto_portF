import React from "react";
import Container from "react-bootstrap/Container";
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

function NavigationBar(){
    return(
        <Navbar expand='lg' className='bg-primary w-100 fixed-top z-1' data-bs-theme='dark'>
            <Container>
                <Navbar.Brand href='#' className='fs-4'>
                    GN
                    <span >J.</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basin-navbar-nav"/>
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className="me-auto w-100 d-flex justify-content-end">
                        <Nav.Link href='#header'>Home</Nav.Link>
                        <Nav.Link href='#about'>About</Nav.Link>
                        <Nav.Link href='#projects'>Projects</Nav.Link>
                        <Nav.Link href='#contact'>Contacts</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
export default NavigationBar;