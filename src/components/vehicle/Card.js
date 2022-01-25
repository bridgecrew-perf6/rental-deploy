import React from "react";
import { Link, useNavigate } from "react-router-dom";
import popularImages from "../../images/popular-one.png";
import "../../style.css";

const Card = (props) => {
  let navigate = useNavigate();
  return (
    <div
      className="col-sm-3 col-md-3 card vehicle-card d-felx"
      key={props.idx}
      value={props.id}
      onClick={() => {
        navigate(`/product/${props.id}`);
      }}
    >
      <div>
        <img
          src={popularImages}
          className="card-img-top view-popular-image"
          alt="pop"
        />
      </div>
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
