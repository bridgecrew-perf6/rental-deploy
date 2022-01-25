import React from "react"; //{useState, useEffect }
import { Link } from "react-router-dom";
import { Nav, Button } from "react-bootstrap";
import "../../style.css";

const Navvisit = () => {
  // let navigate = useNavigate;
  return (
    <>
      <Nav.Link as={Link} to="/login" className="nav-item">
        <Button variant="outline-warning">Login</Button>
      </Nav.Link>

      <Nav.Link as={Link} to="/signup" className="nav-item">
        <Button variant="warning">Register</Button>
      </Nav.Link>
    </>
  );
};

export default Navvisit;
