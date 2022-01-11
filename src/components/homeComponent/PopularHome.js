import React, { Component } from "react";
import { Card } from "../../components";
import "../../style.css";

export default class PopularHome extends Component {
  render() {
    return (
      <div className="popular-section">
        <div className="d-flex justify-content-between popular-header">
          <h1 className="home-title">Popular In Town</h1>
          <button type="button" className="btn btn-link btn-next-viewAll">
            View all<i className="bi bi-chevron-right"></i>
          </button>
        </div>
        <Card />
      </div>
    );
  }
}
