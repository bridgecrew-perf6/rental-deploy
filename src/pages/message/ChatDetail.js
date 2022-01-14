import React from "react";
import { Layout, Navigation } from "../../components";
import vehicleDetail from "../../images/vehicle-detail.png";
import "../../style.css";
import { Row, Col, Card, Container, Form, FormControl } from "react-bootstrap";
import profileImage from "../../images/edward.png";

const Chatdetail = () => {
  return (
    <Layout>
      <Navigation />
      <div className="container-fluid">
        <button
          type="button"
          className="btn btn-light btn-lg btn-block btn-detail"
        >
          <i className="bi bi-chevron-left"></i>Rental 1
        </button>
      </div>
      <div className="container-fluid vehicle-detail">
        <div className="row justify-content-center">
          <div className="col-sm-6 col-md-12 col-lg">
            <div className="vehicle-detail-container">
              <div className="grid-image">
                <img
                  src={vehicleDetail}
                  alt="detail-vehicle"
                  className="img-fluid img-thumbnail rounded"
                />
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-12 col-lg">
            <div className="card">
              <div className="card-body vehicle-info-wrapper">
                <h1 className="display-5 vehicle-detail-title">
                  Fixie Gray - Only
                </h1>
                <h3 className="card-subtitle city">Yogyakarta</h3>
                <h2 className="card-subtitle status-vehicle">Available</h2>
                <div className="price">
                  <h4>Rp. 128.000/day</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <Row>
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
                <Container>
                  <Card.Title>User 1</Card.Title>
                  <Card.Text>
                    Some quick example text to <br />
                    build on the card title and make up the
                  </Card.Text>
                </Container>
                <Card.Text className="text-muted">12.02</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col sm={8} md={8}>
            <Card style={{ float: "right", textAlign: "right" }}>
              <Card.Body>
                <Container>
                  <Card.Title>User 1</Card.Title>
                  <Card.Text>
                    Some quick example text to <br />
                    build on the card title and make up the
                  </Card.Text>
                </Container>
                <Card.Text className="text-muted text-right">12.02</Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col sm={2} align="center">
            <div className="container-fluid profile-picture">
              <img
                src={profileImage}
                className="profile-pic-chat"
                alt="profileImg"
              />
            </div>
          </Col>
        </Row>
      </div>

      <div>
        <p>Pop up sugestion :</p>
        <button>Thank you</button>
        <button>Ok</button>
        <div>
          <Form className="d-flex formSearch px-3">
            <FormControl
              type="search"
              placeholder="Type a message"
              className="me-2 searchbar"
              aria-label="Search"
            />
            <i className="bi bi-camera my-auto"></i>
          </Form>
        </div>
      </div>
    </Layout>
  );
};

export default Chatdetail;
