import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card } from "../../components";
import "../../style.css";
import { filterVehicle } from "../../utils/https/vehicle";

const Bike = () => {
  const [bike, setBike] = useState([]);

  useEffect(() => {
    let type = "bike";
    let limit = "4";
    let search = "";
    let location = "";
    const fetchData = () => {
      filterVehicle(limit, type, search, location)
        .then((response) => {
          setBike(response.data.result.data);
          console.log("bike : ", response.data.result);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchData();
  }, []);

  return (
    <div className="popular-section">
      <div className="d-flex justify-content-between popular-header">
        <h1 className="home-title">Bikes</h1>
        <Link to="/product/list">
          <button type="button" className="btn btn-link btn-next-viewAll">
            View all<i className="bi bi-chevron-right"></i>
          </button>
        </Link>
      </div>
      <div className="container-fluid view-popular-home">
        <div className="row">
          {bike.map((vehicle, idx) => (
            <Card
              location={vehicle.location}
              key={idx}
              city={vehicle.city}
              name={vehicle.name}
              id={vehicle.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bike;
