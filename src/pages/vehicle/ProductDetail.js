import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link, Outlet } from "react-router-dom";
import vehicleDetailImg from "../../images/vehicle-detail.png";

const ProductDetail = () => {
  let { id } = useParams();
  let [vehicleDetail, setVehicleDetails] = useState([]);
  const [counter, setCounter] = React.useState(1);
  // const [counterPrice, setCounterPrice] = React.useState();

  const addCounter = () => {
    const newCounter = counter + 1;
    setCounter(newCounter);
    // const newCounterPrice = counterPrice + counterPrice;
  };

  const subCounter = () => {
    const newCounter = counter - 1 < 0 ? 0 : counter - 1;
    setCounter(newCounter);
  };

  useEffect(() => {
    const fetchData = () => {
      setTimeout(() => {
        axios
          .get(`https://arka-vehicle-rental.herokuapp.com/vehicles/${id}`)
          .then((response) => {
            setVehicleDetails(response.data.result);
          })
          .catch((error) => {
            console.log(error);
          });
      }, 1000);
    };
    fetchData();
  }, []);

  return (
    <>
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
        {vehicleDetail.map((vehicle, idx) => (
          <div className="container-fluid vehicle-detail" key={idx}>
            <div className="justify-content-center">
              <div className="col-sm-6 col-md-12 col-lg">
                <div className="vehicle-detail-container">
                  <div className="grid-image">
                    <img
                      src={vehicleDetailImg}
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
                      src={vehicleDetailImg}
                      alt="detail-vehicle"
                      className="img-thumbnail rounded vehicle-preview"
                    />
                  </div>
                  <div className="item4">
                    <img
                      src={vehicleDetailImg}
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
                      {vehicle.name}
                    </h1>
                    <h3 className="card-subtitle city">{vehicle.city}</h3>
                    <h2 className="card-subtitle status-vehicle">
                      {vehicle.status}
                    </h2>
                    <h2 className="card-subtitle payment-info">
                      No prepayment
                    </h2>
                    <div className="vehicle-info-detail">
                      <p className="card-text">Capacity : 1 Person</p>
                      <p className="card-text">Type : {vehicle.type}</p>
                      <p className="card-text">Reservaton before 2 PM</p>
                    </div>
                    <div className="price">
                      <h4>Rp.{vehicle.price}/day</h4>
                    </div>
                    <div className="container-fluid d-flex justify-content-center qty-box">
                      <button
                        onClick={subCounter}
                        type="button"
                        className="btn btn-light min-qty"
                      >
                        -
                      </button>
                      <div className="form-group">
                        <p className="form-control text-qty">{counter}</p>
                      </div>
                      <button
                        onClick={addCounter}
                        type="button"
                        className="btn btn-warning plus-qty"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* buttonFooter */}
      <div
        className="container-fluid btn-detail-bottom"
        style={{ marginBottom: "30px" }}
      >
        <div className="row justify-content-center">
          <div className="col-sm-4">
            <Link to="/chat-detail">
              <button
                type="button"
                className="btn btn-dark btn-lg btn-block btn-chatAdmin"
              >
                Chat Admin
              </button>
            </Link>
          </div>
          <div className="col-sm-4">
            <Link to="/pay-reservation">
              <button
                type="button"
                className="btn btn-warning btn-lg btn-block btn-reservation yellow-color"
              >
                Reservation
              </button>
            </Link>
          </div>
          <div className="col-sm-2">
            <Link to="/">
              <button type="button" className="btn btn-dark btn-lg btn-liked">
                <i
                  className="bi bi-heart-fill"
                  style={{ color: "#FFCD61", width: "100%" }}
                ></i>
                Like
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default ProductDetail;
