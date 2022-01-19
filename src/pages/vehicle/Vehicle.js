import React, { Component } from "react";
import { Layout, Navigation, VehicleAll} from "../../components";
import "../../style.css";
// import {Link} from "react-router-dom";

class Vehicle extends Component {
  render() {
    return (
      <Layout>
        <Navigation />
        <div className="popular-section-view">
          <h1>Popular In Town</h1>
          <p>Click item to see details and reservation</p>
          <VehicleAll />
          <p>There is no vehicle left</p>
        </div>
      </Layout>
    );
  }
}

export default Vehicle;
