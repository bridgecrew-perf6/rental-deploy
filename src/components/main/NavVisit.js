import React from "react"; //{useState, useEffect }
import { useHistory } from "react-router-dom";
import { Nav, Button } from "react-bootstrap";
import "../../style.css";


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

