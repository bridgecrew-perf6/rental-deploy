import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Layout, Navigation, ReservPayComp } from "../../components";
import "../../style.css";

class ReservPayment extends Component {
  render() {
    return (
      <Layout>
        <Navigation />
        <ReservPayComp />
        <div
          className="container-fluid btn-detail-bottom"
          style={{ marginBottom: "30px" }}
        >
          <div className="justify-content-center">
            <Link to="payment/payment">
              <button
                type="button"
                className="btn btn-outline-secondary btn-lg btn-block btn-reservation"
              >
                Rp.178.000,00
              </button>
            </Link>
            <Link to="/payment">
              <button
                type="button"
                className="btn btn-warning btn-lg btn-block btn-reservation yellow-color"
              >
                Go to Payment
              </button>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }
}

export default ReservPayment;
