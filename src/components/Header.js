import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


const Header = () => {
  
  return(
    <>
      <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/signup">Sign Up</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Features</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar> 
    </>
  )	
}

export default Header