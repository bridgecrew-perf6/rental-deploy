import React from "react";
import load from "../../images/loadingbig.gif";
import "./style.css";

const Loadingcomponent = () => {
  return (
    <div className="container product-content-wrapper my-5 py-5 w-25">
      <div className="col d-flex justify-content-center align-items-center">
        <img className="loading" src={load} alt="Loading" />
        {/* <p>Loading...</p> */}
      </div>
    </div>
  );
};

export default Loadingcomponent;
