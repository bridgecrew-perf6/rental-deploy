import React, { useState, useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";
// import { Card, } from "../../components";
import "../../style.css";
import axios from "axios";
// import { connect } from 'react-redux';
import popularImages from "../../images/popular-one.png";

const Product = () => {
  let [vehicles, setVehicle] = useState([]);
  let navigate = useNavigate();

  axios.defaults.baseURL = "http://localhost:8000/vehicles";
  const fetchData = () => {
    axios
      .get("./")
      .then((response) => {
        setVehicle(response.data.result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    setTimeout(() => {
      fetchData();
    }, 3000);
  }, []);

  return (
    <>
      <div className="popular-section" style={{ height: "1000px" }}>
        <div
          className="container-fluid view-popular-home"
          style={{ height: "900px" }}
        >
          <div className="row">
            {vehicles.map((vehicle, idx) => (
              <div
                className="col-sm-3 col-md-3 card vehicle-card d-felx"
                key={idx}
                onClick={() => {
                  navigate(`/product/${vehicle.id}`);
                }}
              >
                <img
                  src={popularImages}
                  className="card-img-top view-popular-image"
                  alt="pop"
                />
                <div className="card-body view-popular-card">
                  <p>
                    <small>{vehicle.location}</small>
                  </p>
                  <p>
                    <small>{vehicle.city}</small>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Product;
