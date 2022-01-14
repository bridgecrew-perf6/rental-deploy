import React from "react";
import "../../style.css";
import {
  Container,
  Col,
  Row,
  Dropdown,
  DropdownButton,
  Card,
  ListGroup,
  Form,
  FormControl,
} from "react-bootstrap";
import { Layout, Navigation } from "../../components";
import profileImage from "../../images/edward.png";

export default function ChatPage() {
  return (
    <Layout>
      <Navigation />
      <Container className="pd-auto mx-auto h-100">
        <Row className="mx-auto align-items-center">
          <Col sm={8} md={9}>
            <Form className="d-flex formSearch px-3">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2 searchbar"
                aria-label="Search"
              />
              <i className="bi bi-search my-auto"></i>
            </Form>
          </Col>
          <Col sm={2} md={3}>
            <DropdownButton
              variant="info"
              id="dropdown-basic-button"
              title="Sort by"
              className="sortbyBtn"
            >
              <Dropdown.Item href="#/action-1">Read date</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Dot addedn</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Home</Dropdown.Item>
            </DropdownButton>
          </Col>
        </Row>

        <Row className="my-5 mx-auto">
          <Col sm={2} align="center">
            <div className="container-fluid profile-picture">
              <img
                src={profileImage}
                className="profile-pic-chat"
                alt="profileImg" 
              />
            </div>
          </Col>

          <Col sm={8} md={8}>
            <Card>
              <Card.Body>
                <ListGroup>
                  <ListGroup.Item>
                    <Container>
                      <Card.Title>User 1</Card.Title>
                      <Card.Text>
                        Some quick example text to <br />
                        build on the card title and make up the
                      </Card.Text>
                    </Container>
                  </ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>

          <Col sm={1} md={2} align="center">
            <Card.Subtitle className="mb-2 text-muted">Just now</Card.Subtitle>
            <Card.Text>1</Card.Text>
          </Col>
        </Row>
        <Row className="my-5 mx-auto">
          <Col sm={2} align="center">
            <div className="container-fluid profile-picture">
              <img
                src={profileImage}
                className="profile-pic-chat"
                alt="profileImg" 
              />
            </div>
          </Col>

          <Col sm={8} md={8}>
            <Card>
              <Card.Body>
                <ListGroup>
                  <ListGroup.Item>
                    <Container>
                      <Card.Title>User 1</Card.Title>
                      <Card.Text>
                        Some quick example text to <br />
                        build on the card title and make up the
                      </Card.Text>
                    </Container>
                  </ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>

          <Col sm={1} md={2} align="center">
            <Card.Subtitle className="mb-2 text-muted">Just now</Card.Subtitle>
            <Card.Text>1</Card.Text>
          </Col>
        </Row>
        <Row className="my-5 mx-auto">
          <Col sm={2} align="center">
            <div className="container-fluid profile-picture">
              <img
                src={profileImage}
                className="profile-pic-chat"
                alt="profileImg" 
              />
            </div>
          </Col>

          <Col sm={8} md={8}>
            <Card>
              <Card.Body>
                <ListGroup>
                  <ListGroup.Item>
                    <Container>
                      <Card.Title>User 1</Card.Title>
                      <Card.Text>
                        Some quick example text to <br />
                        build on the card title and make up the
                      </Card.Text>
                    </Container>
                  </ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>

          <Col sm={1} md={2} align="center">
            <Card.Subtitle className="mb-2 text-muted">Just now</Card.Subtitle>
            <Card.Text>1</Card.Text>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}
