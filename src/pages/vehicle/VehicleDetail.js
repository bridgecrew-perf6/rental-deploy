import React, { Component } from "react";
import { Layout, Navigation, DetailVehicle } from "../../components";
import "../../style.css";
import { Link } from "react-router-dom";

class Detail extends Component {
  render() {
    return (
      <Layout>
        <Navigation />
        <DetailVehicle />
        <div
          className="container-fluid btn-detail-bottom"
          style={{ marginBottom: "30px" }}
        >
          <div className="row justify-content-center">
            <div className="col-sm-4">
              <Link to="/chat-detail">
                <button
                  type="button"
                  className="btn btn-dark btn-lg btn-block btn-chatAdmin"
                >
                  Chat Admin
                </button>
              </Link>
            </div>
            <div className="col-sm-4">
              <Link to="/pay-reservation">
                <button
                  type="button"
                  className="btn btn-warning btn-lg btn-block btn-reservation yellow-color"
                >
                  Reservation
                </button>
              </Link>
            </div>
            <div className="col-sm-2">
              <Link to="/">
                <button type="button" className="btn btn-dark btn-lg btn-liked">
                  <i
                    className="bi bi-heart-fill"
                    style={{ color: "#FFCD61", width: "100%" }}
                  ></i>
                  Like
                </button>
              </Link>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default Detail;
