import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import popularImages from "../../images/popular-one.png";
import "../../style.css";
import axios from "axios";

const Card = (props) => {
  let navigate = useNavigate();
  let [vehicleDetail, setVehicleDetails] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      setTimeout(() => {
        axios
          .get(`https://arka-vehicle-rental.herokuapp.com/vehicles/${props.id}`)
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
    <div
      className="col-sm-3 col-md-3 card vehicle-card d-felx"
      key={props.idx}
      value={props.id}
      onClick={() => {
        navigate(`/product/${props.id}`);
      }}
      // onClick={() => {
      //   navigate(`/product/${props.idVehicle}`);
      // }}
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
        {/* <p>
          <small>{props.location}</small>
        </p> */}
        <p>
          <small>{props.name}</small>
        </p>
        <p>
          <small>{`${props.city}` !== null ? `${props.city}` : "-"}</small>
        </p>
      </div>
    </div>
  );
};

export default Card;
