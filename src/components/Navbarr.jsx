import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import { RiShoppingCartFill } from "react-icons/ri";
import { AiFillShop } from "react-icons/ai";
import { Link } from 'react-router-dom';

export default function Navbarr() {
    return (
        <div>
          <Navbar expand="lg" className="bg-warning">
      <Container>
        <Navbar.Brand as={Link} to="/" style={{fontWeight:"bolder", fontSize:"25px"}}><AiFillShop size={"50px"}/>L O G O</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/home" style={{fontWeight:"bold", fontSize:"18px"}}>Home</Nav.Link>
            <Nav.Link as={Link} to="/about" style={{fontWeight:"bold", fontSize:"18px"}}>About</Nav.Link>
            <Nav.Link as={Link} to="/contact" style={{fontWeight:"bold", fontSize:"18px"}}>Contact</Nav.Link>

            {/* <--- dropdown list part----> */}

            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}

            {/* <--- dropdown list part----> */}

          </Nav>
          <Nav.Link as={Link} to='/cart'><RiShoppingCartFill color='black' size={"20px"}/></Nav.Link>
        </Navbar.Collapse>
      </Container>

    </Navbar>
        </div>


    )
}
