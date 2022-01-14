import React, { Component } from "react";
import bg from "../../images/bg.png";
import { Layout, Navigation } from "../../components";

export default class Payment extends Component {
  render() {
    return (
      <Layout>
        <Navigation />
        <div className="container-fluid">
          <button
            type="button"
            className="btn btn-light btn-lg btn-block btn-detail"
          >
            <i className="bi bi-chevron-left"></i>Payment
          </button>
        </div>

        <div className="relative-header">
          <div className="container-fluid sm-dev">
            <img src={bg} className="img-fluid" alt="bg" />
            <div className="bg-pass container-fluid"></div>
          </div>
        </div>

        <div className="main-child">
          <div className="col-sm-6 col-md-12 col-lg">
            <div className="card">
              <div className="card-body vehicle-info-wrapper">
                <h1 className="display-5 vehicle-detail-title">
                  Fixie Gray - Only
                </h1>
                <h3 className="card-subtitle city">Yogyakarta</h3>
                <h2 className="card-subtitle status-vehicle">Available</h2>
                <div className="price">
                  <h4>Rp. 128.000/day</h4>
                </div>
              </div>
            </div>
          </div>
          <button>Pay before : 59:30</button>
        </div>

        <div className="row">
          <div className="col">
            <p>Payment code :</p>
            <div className="card">
              <p>#FG1209878YZS</p>
              <button>copy</button>
            </div>
          </div>
          <div className="col">
            <p>Booking code :</p>
            <div className="card">
              <p>#FG1209878YZS</p>
              <button>copy</button>
            </div>
          </div>
        </div>
        <h1>DETAIL ORDER</h1>
        <div className="row">
          <div className="col">
            <div className="card">
              <p>Quantity: 2 Bikes</p>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <p>Reservation date:</p>
              <p>Jan 18 - 20 2021</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="card">
              <p>Price detail :</p>
              <p>1 bike : Rp. 78.000</p>
              <p>1 bike : Rp. 78.000</p>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <p>Identity :</p>
              <p>Samantha Doe (+6290987682)</p>
              <p>samanthadoe@mail.com</p>
            </div>
          </div>
        </div>
        <h1>PAYMENT METHOD</h1>
        <div>
            <button>TRANSFER</button><button>CASH</button>
        </div>
        <button>Finish Payment</button>
      </Layout>
    );
  }
}
