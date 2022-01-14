import React, { Component } from "react";
import { Layout, Navigation, Card } from "../../components";
import '../../style.css';
import {Link} from "react-router-dom";

class Vehicle extends Component {
  render() {
    return (
      <Layout>
        <Navigation />
        <div className="popular-section">
          <div className="d-flex justify-content-between popular-header">
            <h1 className="home-title">Popular In Town</h1>
           <Link to="/vehicle-all">
            <a
              href="/vehicle.html"
              type="button"
              className="btn btn-link btn-next-viewAll"
            >
              View all<i className="bi bi-chevron-right"></i>
            </a>
           </Link>
          </div>
         <Card/>
        </div>
      </Layout>
    );
  }
}

export default Vehicle;
