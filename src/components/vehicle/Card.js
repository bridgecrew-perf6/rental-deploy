import React from 'react';
import { Link } from 'react-router-dom';
import popularImages from "../../images/popular-one.png";
import "../../style.css";

const Card = (props) => {
        return (
              <div className="card col-sm col-md col-lg vehicle-card" key={props.idx}>
                <Link to='/vehicle-detail'>
                  <img
                    src={popularImages}
                    className="card-img-top view-popular-image"
                    alt="pop"
                  />
                </Link>
                <div className="card-body view-popular-card">
                  <p>
                    <small>{props.name}</small>
                  </p>
                </div>
              </div>
        );
    }

export default Card;