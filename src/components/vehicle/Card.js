import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import popularImages from "../../images/popular-one.png";
import "../../style.css";
import axios from "axios";
import Loadingcomponent from "../loading/LoadingComponent";

const Card = (props) => {
  let navigate = useNavigate();
  const [load, setLoad] = useState(false);
  let [vehicleDetail, setVehicleDetails] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      setTimeout(() => {
        axios
          .get(`https://arka-vehicle-rental.herokuapp.com/vehicles/${props.id}`)
          .then((response) => {
            setLoad(true);
            setVehicleDetails(response.data.result);
          })
          .catch((error) => {
            console.log(error);
          });
      }, 1000);
    };
    fetchData();
  }, []);

  const img = JSON.parse(props.images)[0];
  const popImg = process.env.REACT_APP_HOST + "/" + img;
  // console.log("link img err" + popImg);

  return (
    <>
      {load ? (
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
              src={popImg}
              className="card-img-top view-popular-image"
              alt="pop"
              onError={({ currentTarget }) => {
                console.log(currentTarget);
                currentTarget.onerror = null;
                currentTarget.src = require("../../images/defaultVehicle.png");
              }}
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
      ) : (
        <Loadingcomponent />
      )}
    </>
  );
};

export default Card;
