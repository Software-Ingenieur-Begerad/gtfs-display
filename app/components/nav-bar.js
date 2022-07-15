import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

function NavigationBar () {
    return (
        <Navbar collapseOnSelect fixed="top" bg="dark" expand="xxl" variant="dark">
      //TODO make brand available through configuration
            <Navbar.Brand href="/">GTFS Display</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <LinkContainer to="/files">
                        <Nav.Link>Files</Nav.Link>
                    </LinkContainer>
                </Nav>
                <Nav className="mr-auto">
                    <LinkContainer to="/overview">
                        <Nav.Link>Overview</Nav.Link>
                    </LinkContainer>
                </Nav>
                <Nav className="mr-auto">
                    <LinkContainer to="/service">
                        <Nav.Link>Service</Nav.Link>
                    </LinkContainer>
                </Nav>
                <Nav className="mr-auto">
                    <LinkContainer to="/trip-calendar">
                        <Nav.Link>Trip Calendar</Nav.Link>
                    </LinkContainer>
                </Nav>
                <Nav className="mr-auto">
                    <LinkContainer to="/contact">
                        <Nav.Link>Contact</Nav.Link>
                    </LinkContainer>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavigationBar;
