import React, { Component } from "react";
import { Layout, Navigation, DetailVehicle } from "../../components";
import "../../style.css";

class ChatNav extends Component {
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
            <div className="col-sm-8">
              <button
                type="button"
                className="btn btn-warning btn-lg btn-block btn-reservation yellow-color"
              >
                Reservation
              </button>
            </div>
            <div className="col-sm-2">
              <button type="button" className="btn btn-dark btn-lg btn-liked">
                <i
                  className="bi bi-heart-fill"
                  style={{ color: "#FFCD61", width: "100%" }}
                ></i>
                Like
              </button>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default ChatNav;
