import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown } from 'react-bootstrap';

function MyNavbar() {
    return (
        <Navbar bg="light" expand="lg" style={{ paddingLeft: 20 }}>
            <Navbar.Brand href="/home">My App</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <NavItem>
                        <Nav.Link href="/resources">Resources</Nav.Link>
                    </NavItem>
                    <NavItem>
                        <Nav.Link href="/chat">Chat</Nav.Link>
                    </NavItem>
                    <NavItem>
                        <Nav.Link href="/post">Post</Nav.Link>
                    </NavItem>
                </Nav>
                <Nav className="ml-auto">
                    <NavDropdown title="More Options" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#my-profile">My Profile</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#edit-profile">Edit Profile</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/">Logout</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default MyNavbar;
