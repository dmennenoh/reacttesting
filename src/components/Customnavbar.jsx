import React from 'react';
import { Navbar, Nav } from 'react-bootstrap'

function Customnavbar()
{
    return(
        <Navbar bg="dark" variant="dark" sticky="top">
            <Navbar.Brand href="/">DM</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="/">Home </Nav.Link>
                <Nav.Link href="/work">My Work </Nav.Link>
                <Nav.Link href="/contact">Contact </Nav.Link>
            </Nav>
        </Navbar>
    );
}

export default Customnavbar;