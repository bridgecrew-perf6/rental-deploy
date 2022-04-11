import React, { useState, useEffect } from "react";
import profileImage from "../../images/edward.png";
import "../../style.css";
import "./style.css";
import {
  Nav,
  Card,
  Container,
  ListGroup,
  Dropdown,
  Button,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { logoutAuth } from "../../utils/https/auth";
import { useDispatch, useSelector } from "react-redux";
import { logoutAction } from "../../redux/actions/auth";
import { getUsers } from "../../utils/https/user";
import { userActive } from "../../redux/actions/user";

const Navactive = () => {
  const token = useSelector((state) => state.auth.userData.token);
  // const id = useSelector((state) => state.auth.userData.id);
  // console.log("tokennav", token);
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const [activeUser, setActiveUser] = useState([]);

  useEffect(() => {
    getUsers(token)
      .then((res) => {
        setActiveUser(res.data.result[0]);
        const data = { ...res.data.result[0] };
        dispatch(userActive(data));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // console.log("active user", activeUser);

  const handleLogout = () => {
    // localStorage.clear();
    logoutAuth(token)
      .then((res) => {
        dispatch(logoutAction());
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });

    // navigate("/login");
    // setTimeout(() => {
    // }, 1000)
  };

  // const onLogout = () => {
  //   // console.log('token', token);
  //   logoutAuth(token)
  //     .then(res => {
  //       dispatch(logoutAction());
  //       navigation.navigate('Home');
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // };
  return (
    <>
      <Nav.Link as="div" className="nav-item chat">
        <Dropdown className="d-inline">
          <Dropdown.Toggle
            id="dropdown-autoclose-true"
            className="btn btn-sm btn-outline-warning nav-home-btn btn-message-profile"
          >
            <i className="bi bi-envelope"></i>
          </Dropdown.Toggle>

          <Dropdown.Menu className="justify-content-center">
            <Dropdown.Item as="div">
              <Card className="chat-nav-wrapper">
                <Nav.Link onClick={() => navigate("/chat")}>
                  <Card.Body>
                    <ListGroup horizontal>
                      <ListGroup.Item>
                        <Container>
                          <Card.Title className="chat-nav-user">
                            User 1
                          </Card.Title>
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
                </Nav.Link>
              </Card>
            </Dropdown.Item>

            <Dropdown.Item as="div">
              <Card className="chat-nav-wrapper">
                <Nav.Link onClick={() => navigate("/chat")}>
                  <Card.Body>
                    <ListGroup horizontal>
                      <ListGroup.Item>
                        <Container>
                          <Card.Title className="chat-nav-user">
                            User 1
                          </Card.Title>
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
                </Nav.Link>
              </Card>
            </Dropdown.Item>

            <Dropdown.Item as="div">
              <Card className="chat-nav-wrapper">
                <Nav.Link onClick={() => navigate("/chat")}>
                  <Card.Body>
                    <ListGroup horizontal>
                      <ListGroup.Item>
                        <Container>
                          <Card.Title className="chat-nav-user">
                            User 1
                          </Card.Title>
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
                </Nav.Link>
              </Card>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Nav.Link>

      <Nav.Link as="div" className="nav-item profile-dropdown">
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
            <Dropdown.Item as="div">
              <Nav.Link onClick={() => navigate("/profile")}>
                <Button>Edit Profile</Button>
              </Nav.Link>
            </Dropdown.Item>
            <Dropdown.Item as="div" href="#">
              Help
            </Dropdown.Item>
            <Dropdown.Item as="div" onClick={handleLogout}>
              Logout
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Nav.Link>
    </>
  );
};

export default Navactive;
