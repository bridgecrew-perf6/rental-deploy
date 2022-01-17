import React from "react"; //{useState, useEffect }
import dot from "../../images/dot.png";
import Navactive from './NavActive';
import  Navvisit  from "./NavVisit";
import { withRouter, Link } from "react-router-dom";
import "../../style.css";
import {
  Navbar,
  Nav,
  Container,
  ListGroup,
} from "react-bootstrap";

class Navigation extends React.Component{
  // const history = useHistory(props.history);
  render(){
    const token = JSON.parse(localStorage.getItem("login-token"));
     const navRender = ()=>{
       if(!token){
         return <Navvisit/>
       }else{
         return <Navactive/>
       }
     }
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>
          <Link to='/'>
          <img src={dot} width="30" height="30" alt="logo" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Nav className="align-items-canter">
           
            <Nav.Link as={Link} to="/" className="nav-item">
              Home
            </Nav.Link> 
            <Nav.Link as={Link} to="/vehicle" className="nav-item">
              Vehicle
            </Nav.Link>
            <Nav.Link as={Link} to="/history" className="nav-item">
              History
            </Nav.Link>
            <Nav.Link className="nav-item">
              About
            </Nav.Link>
            <ListGroup horizontal>
            {navRender()}
             
              {/* <Nav.Link as="li" className="nav-item profile-dropdown">
                <Dropdown className="d-inline">
                  <Dropdown.Toggle
                    id="dropdown-basic-button"
                    type="button"
                    className="profile-btn-picture"
                  >
                    <img
                      src={profileImage}
                      className="profile-btn-image"
                      alt="profile-thumbnail"
                    />
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#">Edit Profile</Dropdown.Item>
                    <Dropdown.Item href="#">Help</Dropdown.Item>
                    <Dropdown.Item onClick={()=>this.handleLogout()}>Logout</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Nav.Link> */}
            </ListGroup>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
}

export default withRouter(Navigation);
