import React, { Component } from "react";
import vehicleDetail from "../../images/vehicle-detail.png";
import { Card  } from "react-bootstrap";
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
            className="btn-light btn-lg btn-block btn-back-content"
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

              <Card >
                <Card.Body className="qty-payment-card">
                  <Card.Title className="mb-2 gopayment-title">Qt: 2 bikes</Card.Title>
                  <Card.Text className="mb-2 text-muted">
                    No Prepayment
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card>
                <Card.Body className="qty-payment-card">
                  <Card.Title className="gopayment-title">Details:</Card.Title>
                  <Card.Text className="reservation-detail-txt">1 bike : Rp. 78.000</Card.Text>
                  <Card.Text className="reservation-detail-txt">1 bike : Rp. 78.000</Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
        <div className="gopayment-date-wrapper">
          <div className="row align-items-center justify-content-center">
            <div className="col">
              <p className="reservation-date-title">Reservation date :</p>
            </div>
            <div className="col col-sm-4">
              <div type="button" className="btn gopayment-reservation-btn">Start date</div>
            </div>
            <div className="col col-sm-4">
              <div type="button" className="btn gopayment-reservation-btn">Return Date</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ReservPayComp;
