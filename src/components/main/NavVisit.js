import React from "react"; //{useState, useEffect }
import dot from "../../images/dot.png";
import "../../style.css";
import { useHistory } from "react-router-dom";
import { Navbar, Nav, Container, Button } from "react-bootstrap";

const Navvisit = () => {
  const history = useHistory();

  const loginRoute = () => {
    let path = "login";
    history.push(path);
  };
  const signupRoute = () => {
    let path = "signup";
    history.push(path);
  };
  // let { isActiveNav } = props;

  // if (isActiveNav){
  //     return
  // }else{
  //     return
  return (
    <>
      <Nav.Link className="nav-item" href="#link">
        <Button onClick={loginRoute} variant="outline-warning">
          Login
        </Button>
      </Nav.Link>

      <Nav.Link className="nav-item" href="#link">
        <Button onClick={signupRoute} variant="warning">
          Register
        </Button>
      </Nav.Link>
    </>
  );
};

export default Navvisit;

{
  /* <Navbar bg="light" expand="lg">
<Container>
  <Navbar.Brand>
    <img src={dot} width="30" height="30" alt="logo" />
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse className="justify-content-end">
    <Nav className="align-items-canter">
      <Nav.Link className="nav-item" href="#home">
        Home
      </Nav.Link>
      <Nav.Link className="nav-item" href="#link">
        Vehicle
      </Nav.Link>
      <Nav.Link className="nav-item" href="#link">
        Story
      </Nav.Link>
      <Nav.Link className="nav-item" href="#link">
        About
      </Nav.Link>
      <Nav.Link className="nav-item" href="#link">
      <Button onClick={loginRoute} variant="outline-warning">Login</Button>
      </Nav.Link>
      <Nav.Link className="nav-item" href="#link">
      <Button onClick={signupRoute} variant="warning">Register</Button>
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Container>
</Navbar> */
}
