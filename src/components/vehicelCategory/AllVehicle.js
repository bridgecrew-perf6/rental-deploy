import React, { Component } from 'react';
// import { Link } from "react-router-dom";
import { Card } from "../../components";
import "../../style.css";
import axios from "axios";

export default class AllVehicle extends Component {
    state = {
        vehicles: [],
      };
      componentDidMount() {
        const URL = "http://localhost:8000/vehicles";
        // const { location } = this.props;
        axios
          .get(URL)
          .then((response) => {
            this.setState({
              vehicles: response.data.result,
            });
            console.log(response.data.result);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    render() {
        return (
            <div className="popular-section" style={{height:'1000px'}}>
            <div className="container-fluid view-popular-home" style={{height:'900px'}}>
              <div className="row">
                {this.state.vehicles.map((vehicle, idx) => (
                  <Card location={vehicle.location} key={idx} city={vehicle.city} />
                ))}
              </div>
            </div>
          </div>
        );
    }
}
