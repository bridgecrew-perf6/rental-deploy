import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card } from "../../components";
import "../../style.css";
import { filterVehicle } from "../../utils/https/vehicle";

const Motorbike = () => {
  const [motorbike, setMotorbike] = useState([]);

  useEffect(() => {
    let type = "motorbike";
    let limit = "4";
    let search = "";
    let location = "";
    const fetchData = () => {
      filterVehicle(limit, type, search, location)
        .then((response) => {
          setMotorbike(response.data.result.data);
          // console.log("motorbike : ", response.data.result);
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
        <h1 className="home-title">Motorbike</h1>
        <Link
          to="/product/All-Vehicle"
          key={"motorbike"}
          state={{ vState: "motorbike" }}
        >
          <button type="button" className="btn btn-link btn-next-viewAll">
            View all<i className="bi bi-chevron-right"></i>
          </button>
        </Link>
      </div>
      <div className="container-fluid view-popular-home">
        <div className="row">
          {motorbike.length > 0 &&
            motorbike.map((vehicle, idx) => (
              <Card
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

export default Motorbike;
