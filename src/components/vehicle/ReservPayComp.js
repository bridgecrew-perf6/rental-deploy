import React, { Component } from "react";
import vehicleDetail from "../../images/vehicle-detail.png";
import { Card, Container, Col, Row, Button } from "react-bootstrap";
import "../../style.css";
import { Link } from "react-router-dom";

class ReservPayComp extends Component {
  render() {
    return (
      <div className="container-fluid vehicle-detail">
        <div className="container-fluid">
          <Link to='/pay-reservation'>
          <button
            type="button"
            className="btn btn-light btn-lg btn-block btn-detail"
            >
            <i className="bi bi-chevron-left"></i>Reservation
          </button>
            </Link>
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
                </div>
              </div>

              <Card>
                <Card.Body>
                  <Card.Title className="mb-2">Qt: 2 bikes</Card.Title>
                  <Card.Text className="mb-2 text-muted">
                    No Prepayment
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card>
                <Card.Body>
                  <Card.Title>Details:</Card.Title>
                  <Card.Text>1 bike : Rp. 78.000</Card.Text>
                  <Card.Text>1 bike : Rp. 78.000</Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
        <Container>
          <Row>
            <Col xs={5}>
              <p className="h3">Reservation</p>
            </Col>
            <Col>
              <Button variant="outline-secondary">Start date</Button>
            </Col>
            <Col>
              <Button variant="outline-secondary">Return Date</Button>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default ReservPayComp;
