import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card } from "..";
import "../../style.css";
import { filterVehicle } from "../../utils/https/vehicle";

const Cars = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    let type = "car";
    let limit = "4";
    let search = "";
    let location = "";
    const fetchData = () => {
      filterVehicle(limit, type, search, location)
        .then((response) => {
          setCars(response.data.result.data);
          console.log("motorbike : ", response.data.result);
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
        <h1 className="home-title">Cars</h1>
        <Link to="/product/list">
          <button type="button" className="btn btn-link btn-next-viewAll">
            View all<i className="bi bi-chevron-right"></i>
          </button>
        </Link>
      </div>
      <div className="container-fluid view-popular-home">
        <div className="row">
          {cars.map((vehicle, idx) => (
            <Card
              // idVehicle={vehicle.id}
              location={vehicle.location}
              key={idx}
              city={vehicle.city}
              name={vehicle.name}
              id={vehicle.id}
              images={vehicle.images}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cars;
