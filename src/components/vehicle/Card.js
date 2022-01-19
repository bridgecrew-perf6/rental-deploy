import React from "react";
import { Link } from "react-router-dom";
import popularImages from "../../images/popular-one.png";
import "../../style.css";

const Card = (props) => {
  return (
    <div className="col-sm-3 col-md-3 card vehicle-card d-felx" key={props.idx}>
      <Link to="/vehicles">
        <img
          src={popularImages}
          className="card-img-top view-popular-image"
          alt="pop"
        />
      </Link>
      <div className="card-body view-popular-card">
      <p>
          <small>{props.idVehicle}</small>
        </p>
        <p>
          <small>{props.location}</small>
        </p>
        <p>
          <small>{props.city}</small>
        </p>
      </div>
    </div>
  );
};

export default Card;
