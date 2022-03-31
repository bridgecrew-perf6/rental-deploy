import React from "react"; //{useState, useEffect }
import dot from "../../images/dot.png";
import Navactive from "./NavActive";
import Navvisit from "./NavVisit";
import { Link } from "react-router-dom";
import "../../style.css";
import { Navbar, Nav, Container } from "react-bootstrap";
import { useSelector } from "react-redux";

const Navigation = () => {
  const token = useSelector((state) => state.auth.userData.token);

  // const token = localStorage.getItem("login-token");
  const navRender = () => {
    if (!token) {
      return <Navvisit />;
    } else {
      return <Navactive />;
    }
  };

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>
          <Link to="/">
            <img src={dot} width="30" height="30" alt="logo" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Nav className="align-items-center">
            <Nav.Link as={Link} to="/" className="nav-item">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/product/category" className="nav-item">
              Vehicle
            </Nav.Link>
            <Nav.Link as={Link} to="/history" className="nav-item">
              History
            </Nav.Link>
            <Nav.Link className="nav-item">About</Nav.Link>

            {navRender()}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
