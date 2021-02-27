
import React from 'react';
import { FormControl, Nav, Navbar, NavDropdown, Button, Form } from 'react-bootstrap';

const NavBar = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
            <Navbar.Brand href="/home">
      <img
        // src="https://img.icons8.com/fluent/2x/exam.png"
        src = "https://img.icons8.com/officel/2x/test-failed.png "
        width="30"
        height="30"
        className="d-inline-block align-top"
      />
    </Navbar.Brand>
  <Navbar.Brand href="/home">इम्तिहान</Navbar.Brand>
  <Navbar bg="dark">
  </Navbar>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/home">Home</Nav.Link>
      <Nav.Link href="#services">Services</Nav.Link>
      <Nav.Link href="#services">Products</Nav.Link>
      <Nav.Link href="#services">Partners</Nav.Link>
      <Nav.Link href="/create">Create Paper</Nav.Link>
      <Nav.Link href="#services">Contact Us</Nav.Link>
      {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown> */}
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-light">Search</Button>
    </Form>
    <Nav>
      <Nav.Link href="#deets">Sign Up</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Login
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
        </div>
    );
};

export default NavBar;