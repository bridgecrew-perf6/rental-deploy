import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card } from "../../components";
import "../../style.css";
import { getPop } from "../../utils/https/vehicle";

const PopularHome = () => {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    // const fetchData = () => {
    getPop()
      .then((response) => {
        setPopular(response.data.result);
        console.log("pop home res : ", response.data.result);
      })
      .catch((error) => {
        console.log(error);
      });
    // };
    // fetchData();
  }, []);

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
          {popular.map((populars, idx) => (
            <Card
              location={populars.location}
              id={populars.vehicle_payment_id}
              key={idx}
              city={populars.destination}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularHome;
