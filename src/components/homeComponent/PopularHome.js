import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Card } from "../../components";
import "../../style.css";
import axios from "axios";

export default class PopularHome extends Component {
  state = {
    populars: [],
  };
  componentDidMount() {
    const URL =
      "https://arka-vehicle-rental.herokuapp.com/vehicles/byOrder?by=cars&order=asc&page=1&limit=4";
    axios
      .get(URL)
      .then((response) => {
        this.setState({
          populars: response.data.result.data,
          // populars: response.data.result,
        });
        console.log(response.data.result);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    return (
      <div className="popular-section">
        <div className="d-flex justify-content-between popular-header">
          <h1 className="home-title">Popular In Town</h1>
          <Link to="/product/list">
            <button type="button" className="btn btn-link btn-next-viewAll">
              View all<i className="bi bi-chevron-right"></i>
            </button>
          </Link>
        </div>
        <div className="container-fluid view-popular-home">
          <div className="row">
            {this.state.populars.map((popular, idx) => (
              <Card
                location={popular.Type}
                // location
                key={idx}
                city={popular.City}
                // destionation
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
