import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card } from "../../components";
import "../../style.css";
import { getPop } from "../../utils/https/vehicle";
import Loadingcomponent from "../loading/LoadingComponent";

const PopularHome = () => {
  const [popular, setPopular] = useState([]);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    // const fetchData = () => {
    getPop()
      .then((response) => {
        setLoad(true);
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
      {/* <Loadingcomponent /> */}
      <div className="d-flex justify-content-between popular-header">
        <h1 className="home-title">Popular In Town</h1>
        <Link to="/product/list">
          <button type="button" className="btn btn-link btn-next-viewAll">
            View all<i className="bi bi-chevron-right"></i>
          </button>
        </Link>
      </div>
      {load ? (
        <div className="container-fluid view-popular-home">
          <div className="row">
            {popular.map((populars, idx) => (
              <Card
                location={populars.location}
                id={populars.vehicle_payment_id}
                images={populars.images}
                key={idx}
                city={populars.destination}
              />
            ))}
          </div>
        </div>
      ) : (
        <Loadingcomponent />
      )}
    </div>
  );
};

export default PopularHome;
