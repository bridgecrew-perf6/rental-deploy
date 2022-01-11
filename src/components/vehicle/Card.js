import React, { Component } from 'react';
import popularImages from "../../images/popular-one.png";
import "../../style.css";
import axios from "axios";

class Card extends Component {
  state={
    vehicle :[],
  }
  componentDidMount() {
    const URL = "http://localhost:8000/vehicles";
      axios
        .get(URL)
        .then((response) => {
          console.log(response.data.result);
        })
        .catch((error) => {
          console.log( error);
        }); 
  }
  
    render() {
        return (
            <div className="container-fluid view-popular-home">
            <div className="row">
              <div className="card col-sm col-md col-lg vehicle-card">
                <a href="/order.html">
                  <img
                    src={popularImages}
                    className="card-img-top view-popular-image"
                    alt="pop"
                  />
                </a>
                <div className="card-body view-popular-card">
                  <p>
                    <strong>Merapi</strong>
                  </p>
                  <p>
                    <small>Yogyakarta</small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default Card;