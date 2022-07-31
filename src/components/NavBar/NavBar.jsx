import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./navBar.css"
function NavBar() {
  return (
    <Navbar className='nav_bar' expand="lg">
      <Container>
        <Navbar.Brand href="/" className='nav_logo'>PRO FT</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link className='nav_item' href="/">Home</Nav.Link>
            <Nav.Link className='nav_item' href="/players">Players</Nav.Link>
            <Nav.Link className='nav_item' href="/teams">Teams</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar