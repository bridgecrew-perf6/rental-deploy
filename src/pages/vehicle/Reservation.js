import React, { Component } from "react";
import { Layout, Navigation, ReservationComponent } from "../../components";
import "../../style.css";
import { Link } from "react-router-dom";

class Reservation extends Component {
  render() {
    return (
      <Layout>
        <Navigation />
        <ReservationComponent />
        <div
          className="container-fluid btn-detail-bottom"
          style={{ marginBottom: "30px" }}
        >
          <div className="row justify-content-center">
            <Link to="/go-payment">
              <button
                type="button"
                className="btn btn-warning btn-lg btn-block btn-reservation yellow-color"
              >
                Rp.178.000,00
              </button>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }
}

export default Reservation;
