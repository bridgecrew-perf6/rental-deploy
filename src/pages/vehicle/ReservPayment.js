import React, { Component } from "react";
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
            <button
              type="button"
              className="btn btn-outline-secondary btn-lg btn-block btn-reservation"
            >
              Rp.178.000,00
            </button>
            <button
              type="button"
              className="btn btn-warning btn-lg btn-block btn-reservation yellow-color"
            >
              Go to Payment
            </button>
          </div>
        </div>
      </Layout>
    );
  }
}

export default ReservPayment;
