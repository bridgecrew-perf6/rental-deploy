import React from "react";
import profileImage from "../../images/edward.png";
import "../../style.css";
import "./style.css"
import {
  Nav,
  Card,
  Container,
  ListGroup,
  Dropdown,
  Button,
} from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";

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
          
            <Dropdown.Item>
              <Card className="chat-nav-wrapper">
                <Link to="/chat">
                  <Card.Body>
                    <ListGroup horizontal>
                      <ListGroup.Item>
                        <Container>
                          <Card.Title className="chat-nav-user">User 1</Card.Title>
                          <Card.Text className="chat-nav-text">
                            Some quick example text to 
                          </Card.Text>
                        </Container>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <Container>
                          <Card.Subtitle className="mb-2 text-muted chat-nav-time">
                            Just now
                          </Card.Subtitle>
                          <Card.Text className="chat-nav-numNotif">1</Card.Text>
                        </Container>
                      </ListGroup.Item>
                    </ListGroup>
                  </Card.Body>
                </Link>
              </Card>
            </Dropdown.Item>

            <Dropdown.Item>
              <Card className="chat-nav-wrapper">
                <Link to="/chat">
                  <Card.Body>
                    <ListGroup horizontal>
                      <ListGroup.Item>
                        <Container>
                          <Card.Title className="chat-nav-user">User 1</Card.Title>
                          <Card.Text className="chat-nav-text">
                            Some quick example text to
                          </Card.Text>
                        </Container>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <Container>
                          <Card.Subtitle className="mb-2 text-muted chat-nav-time">
                            Just now
                          </Card.Subtitle>
                          <Card.Text className="chat-nav-numNotif">1</Card.Text>
                        </Container>
                      </ListGroup.Item>
                    </ListGroup>
                  </Card.Body>
                </Link>
              </Card>
            </Dropdown.Item>

            <Dropdown.Item>
              <Card className="chat-nav-wrapper">
                <Link to="/chat">
                  <Card.Body>
                    <ListGroup horizontal>
                      <ListGroup.Item>
                        <Container>
                          <Card.Title className="chat-nav-user">User 1</Card.Title>
                          <Card.Text className="chat-nav-text">
                            Some quick example text to
                          </Card.Text>
                        </Container>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <Container>
                          <Card.Subtitle className="mb-2 text-muted chat-nav-time">
                            Just now
                          </Card.Subtitle>
                          <Card.Text className="chat-nav-numNotif">1</Card.Text>
                        </Container>
                      </ListGroup.Item>
                    </ListGroup>
                  </Card.Body>
                </Link>
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
            <Dropdown.Item>
              <Link to="/profile">
                <Button>Edit Profile</Button>
              </Link>
            </Dropdown.Item>
            <Dropdown.Item href="#">Help</Dropdown.Item>
            <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Nav.Link>
    </>
  );
};

export default Navactive;
