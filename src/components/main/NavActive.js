import React from 'react';
import profileImage from "../../images/edward.png";
import "../../style.css";
import {
  Nav,
  Card,
  Container,
  ListGroup,
  Dropdown
} from "react-bootstrap";
import {useHistory} from "react-router-dom";

const Navactive = (props) => {
  const history = useHistory(props.history);
    const handleLogout = () => {
        localStorage.clear();
        history.push("/login");
      };
    return (
        <>
         <Nav.Link as="li" className="nav-item chat">
                <Dropdown className="d-inline">
                  <Dropdown.Toggle
                    id="dropdown-autoclose-true"
                    className="btn btn-sm btn-outline-warning btn-message-profile"
                  >
                    <i className="bi bi-envelope"></i>
                  </Dropdown.Toggle>

                  <Dropdown.Menu className="justify-content-center">
                    <Dropdown.Item href="#">
                      <Card>
                        <Card.Body>
                          <ListGroup horizontal>
                            <ListGroup.Item>
                              <Container>
                                <Card.Title>User 1</Card.Title>
                                <Card.Text>
                                  Some quick example text to <br />
                                  build on the card title and make up the
                                </Card.Text>
                              </Container>
                            </ListGroup.Item>
                            <ListGroup.Item>
                              <Container>
                                <Card.Subtitle className="mb-2 text-muted">
                                  Just now
                                </Card.Subtitle>
                                <Card.Text>1</Card.Text>
                              </Container>
                            </ListGroup.Item>
                          </ListGroup>
                        </Card.Body>
                      </Card>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Nav.Link>
        
            <Nav.Link as="li" className="nav-item profile-dropdown">
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
                    <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Nav.Link>
        </>
    );
}

export default Navactive;
