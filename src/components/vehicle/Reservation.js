import React, { Component } from "react";
import vehicleDetail from "../../images/vehicle-detail.png";
import { Form, Dropdown, ButtonGroup, Button } from "react-bootstrap";
import "../../style.css";

class ReservationComponent extends Component {
  state = {
    clicks: 1,
    show: true,
  };
  IncrementItem = () => {
    this.setState({ clicks: this.state.clicks + 1 });
  };
  DecreaseItem = () => {
    this.setState({ clicks: this.state.clicks - 1 });
  };
  ToggleClick = () => {
    this.setState({ show: true });
  };
  render() {
    return (
      <div className="container-fluid vehicle-detail">
        <div className="container-fluid">
          <button
            type="button"
            className="btn btn-light btn-lg btn-block btn-detail"
          >
            <i className="bi bi-chevron-left"></i>Reservation
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
                  <h2 className="card-subtitle payment-info">No prepayment</h2>
                  <div className="container-fluid d-flex justify-content-center qty-box">
                    <button
                      onClick={this.IncrementItem}
                      type="button"
                      className="btn btn-warning plus-qty"
                    >
                      +
                    </button>
                    <div className="form-group">
                      <p
                        onClick={this.ToggleClick}
                        className="form-control text-qty"
                      >
                        {this.state.clicks}
                      </p>
                    </div>
                    <button
                      onClick={this.DecreaseItem}
                      type="button"
                      className="btn btn-light min-qty"
                    >
                      -
                    </button>
                  </div>
                  <h3 className="card-subtitle">Reservation Date :</h3>
                  <div className="row">
                    <div className="col-md-12">
                      <Form.Group controlId="duedate">
                        <Form.Control
                          type="date"
                          name="duedate"
                          placeholder="Select date"
                        />
                      </Form.Group>
                      <Form.Group>
                        <Dropdown as={ButtonGroup}>
                          <Button variant="light">Day 1</Button>

                          <Dropdown.Toggle
                            split
                            variant="success"
                            id="dropdown-split-basic"
                          />

                          <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">
                              Action
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-2">
                              Another action
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-3">
                              Something else
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </Form.Group>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ReservationComponent;
