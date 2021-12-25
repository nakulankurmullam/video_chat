import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { signOut } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { FireBaseAuthContext } from "../Context";

function Navigation() {
  const {user,setUser } = useContext(FireBaseAuthContext);
  const logOut = () => {
    signOut(auth)
      .then(() => {
        setUser(false)
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">MEET STRANGERS</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Profile</Nav.Link>
            <Nav.Link href="/">About</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link className="justify-content-end" onClick={logOut}>
              Sign {user?'Out':'In'}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
