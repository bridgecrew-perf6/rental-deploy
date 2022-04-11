import React from "react";
import { Layout, Navigation } from "../../components";
// , ReservationComponent
import "../../style.css";
import vehicleDetail from "../../images/vehicle-detail.png";

import { Link, useLocation } from "react-router-dom";

const Reservation = (props) => {
  // console.log(props.history.location.state);
  const location = useLocation();
  const data = location.data;
  console.log(data, props.data);
  const [counter, setCounter] = React.useState(1);
  // const [counterPrice, setCounterPrice] = React.useState();

  const addCounter = () => {
    const newCounter = counter + 1;
    setCounter(newCounter);
    // const newCounterPrice = counterPrice + counterPrice;
  };

  const subCounter = () => {
    const newCounter = counter - 1 < 0 ? 0 : counter - 1;
    setCounter(newCounter);
  };

  // const { data } = props.location;
  // console.log("our props : ", data.counter, data.id, data.text);
  return (
    <Layout>
      <Navigation />
      <>
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
                    <h2 className="card-subtitle payment-info">
                      No prepayment
                    </h2>
                    <div className="container-fluid d-flex justify-content-center qty-box">
                      <button
                        onClick={subCounter}
                        type="button"
                        className="btn btn-light min-qty"
                      >
                        -
                      </button>
                      <div className="form-group">
                        <p className="form-control text-qty">{counter}</p>
                      </div>
                      <button
                        onClick={addCounter}
                        type="button"
                        className="btn btn-warning plus-qty"
                      >
                        +
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
      </>
      {/* <ReservationComponent /> */}
      <div
        className="container-fluid btn-detail-bottom"
        style={{ marginBottom: "30px" }}
      >
        <div className="row justify-content-center">
          <Link to="/detail/payment">
            <button
              type="button"
              className="btn btn-warning btn-lg btn-block btn-pay-reservation-price yellow-color"
            >
              Rp.178.000,00
            </button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Reservation;
