import React, { Component } from "react";
import vehicleDetail from "../../images/vehicle-detail.png";
import "../../style.css";
import { Link } from "react-router-dom";

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
          <Link to="/vehicle-detail">
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
                  <div className="container-fluid">
                    <h3 className="reservation-date">Reservation Date :</h3>
                    <div className="container-fluid">
                      <input
                        type="date"
                        className="datepicker box-btn"
                        placeholder="Select date"
                        id="datereservation"
                      />
                    </div>

                    <div
                      className="btn dropdown-toggle box-btn btn-day-options"
                      type="button"
                      id="defaultDropdown"
                      data-bs-toggle="dropdown"
                      data-bs-auto-close="true"
                      aria-expanded="false"
                    >
                      Day 1
                      <span className="dropdown-span-icon">
                        <i className="bi bi-chevron-down"></i>
                      </span>
                    </div>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="defaultDropdown"
                    >
                      {/* <li>
                        <a className="dropdown-item">Menu item</a>
                      </li>
                      <li>
                        <a className="dropdown-item">Menu item</a>
                      </li>
                      <li>
                        <a className="dropdown-item">Menu item</a>
                      </li> */}
                    </ul>
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
