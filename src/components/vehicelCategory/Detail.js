import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import vehicleDetail from "../../images/vehicle-detail.png";
import "../../style.css";

class DetailVehicle extends Component {
  state = {
    clicks: 1,
    show: true,
    vehicleData: [],
    isSuccess: false,
  };
  componentDidMount() {
    const { match } = this.props;
  console.log(match);

    const URL = "http://localhost:8000/vehicles/";
    setTimeout(() => {
      axios
        .get(URL + match.params.id)
        .then((response) => {
          this.setState({ vehicleData: response.data, isSuccess: true });
          // console.log(response.data);
        })
        .catch((err) => console.error(err));
    }, 1000);
  }
  IncrementItem = () => {
    this.setState({ clicks: this.state.clicks + 1 });
  };
  DecreaseItem = () => {
    this.setState({ clicks: this.state.clicks - 1 });
  };
  ToggleClick = () => {
    this.setState({ show: true });
  };

  render() {
    const { match } = this.props;
    const { vehicleData: vehicle, isSuccess } = this.state;
    // console.log(history);
  // console.log(location)
    return (
      <div className="container-fluid vehicle-detail">
        <div className="container-fluid">
          <Link to="/product/list">
            <button
              type="button"
              className="btn btn-light btn-lg btn-block btn-detail"
            >
              <i className="bi bi-chevron-left"></i>Detail
            </button>
          </Link>
        </div>

        {isSuccess ? (
          <div className="container-fluid vehicle-detail">
            <div className="row justify-content-center">
              <div className="col-sm-6 col-md-12 col-lg">
                <div className="vehicle-detail-container">
                  <div className="grid-image">
                    <img
                      src={vehicleDetail}
                      alt="detail-vehicle"
                      className="img-fluid img-thumbnail rounded"
                    />
                  </div>
                  <div className="item2">
                    <button type="button" className="btn btn-light">
                      <i className="bi bi-chevron-left"></i>
                    </button>
                  </div>
                  <div className="item3">
                    <img
                      src={vehicleDetail}
                      alt="detail-vehicle"
                      className="img-thumbnail rounded vehicle-preview"
                    />
                  </div>
                  <div className="item4">
                    <img
                      src={vehicleDetail}
                      alt="detail-vehicle"
                      className="img-thumbnail rounded vehicle-preview"
                    />
                  </div>
                  <div className="item4">
                    <button type="button" className="btn btn-light">
                      <i className="bi bi-chevron-right"></i>
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-12 col-lg">
                <div className="card">
                  <div className="card-body vehicle-info-wrapper">
                    <h1 className="display-5 vehicle-detail-title">
                      {match.params.id}
                    </h1>
                    <h3 className="card-subtitle city">{vehicle.name}</h3>
                    <h2 className="card-subtitle status-vehicle">Available</h2>
                    <h2 className="card-subtitle payment-info">
                      No prepayment
                    </h2>
                    <div className="vehicle-info-detail">
                      <p className="card-text">Capacity : 1 Person</p>
                      <p className="card-text">Type : Bike</p>
                      <p className="card-text">Reservaton before 2 PM</p>
                    </div>
                    <div className="price">
                      <h4>Rp. 128.000/day</h4>
                    </div>
                    <div className="container-fluid d-flex justify-content-center qty-box">
                      <button
                        onClick={this.IncrementItem}
                        type="button"
                        className="btn btn-warning plus-qty"
                      >
                        +
                      </button>
                      <div className="form-group">
                        <p
                          onClick={this.ToggleClick}
                          className="form-control text-qty"
                        >
                          {this.state.clicks}
                        </p>
                      </div>
                      <button
                        onClick={this.DecreaseItem}
                        type="button"
                        className="btn btn-light min-qty"
                      >
                        -
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <p>Sedang Fetching</p>
        )}
      </div>
    );
  }
}

export default DetailVehicle;
