import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Card } from "..";
import "../../style.css";
import axios from "axios";

export default class Cars extends Component {
    state = {
        vehicles: [],
      };
      componentDidMount() {
        const URL = "http://localhost:8000/vehicles/all";
        axios
          .get(URL)
          .then((response) => {
            this.setState({
              vehicles: response.data.result,
            });
          })
          .catch((error) => {
            console.log(error);
          });
      }
      render() {
        return (
          <div className="popular-section">
            <div className="d-flex justify-content-between popular-header">
              <h1 className="home-title">Cars</h1>
              <Link to="/vehicle-detail">
                <button type="button" className="btn btn-link btn-next-viewAll">
                  View all<i className="bi bi-chevron-right"></i>
                </button>
              </Link>
            </div>
            <div className="container-fluid view-popular-home">
              <div className="row">
                {this.state.vehicles.map((vehicle, idx) => (
                  <Card idVehicle={vehicle.id} location={vehicle.location} key={idx} city={vehicle.city} />
                ))}
              </div>
            </div>
          </div>
        );
      }
}
