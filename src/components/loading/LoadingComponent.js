import React from "react";
import load from "../../images/loadingbig.gif";
import "./style.css";

const Loadingcomponent = () => {
  return (
    <div className="container product-content-wrapper my-5 py-5">
      <div className="col d-flex">
        <img className="loading" src={load} alt="Loading" />
        {/* <p>Loading...</p> */}
      </div>
    </div>
  );
};

export default Loadingcomponent;
