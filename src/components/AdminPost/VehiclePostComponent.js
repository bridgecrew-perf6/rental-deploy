import React from "react";
import "../../style.css";
import { useNavigate } from "react-router-dom";
import { postVehicleForm } from "../../utils/https/user";
import dbg from "../../images/defaultVehicle.png";

const Vehiclepostcomponent = (props) => {
  let navigate = useNavigate(props.history);
  const postVehicleHandler = (event) => {
    event.preventDefault();
    const body = {
      name: event.target.name.value,
      location: event.target.location.value,
      detail: event.target.detail.value,
      price: event.target.price.value,
      status: event.target.status.value,
    };
    postVehicleForm(body)
      .then((response) => {
        const postVehicleResponse = response.data.result;
        console.log(postVehicleResponse);
        navigate("/product/list");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const state = {
    clicks: 1,
    show: true,
  };
  const IncrementItem = () => {
    this.setState({ clicks: this.state.clicks + 1 });
  };
  const DecreaseItem = () => {
    this.setState({ clicks: this.state.clicks - 1 });
  };
  const ToggleClick = () => {
    this.setState({ show: true });
  };

  return (
    <form onSubmit={postVehicleHandler}>
      <div className="container-fluid vehicle-detail">
        <div className="row justify-content-center">
        <div className="col-sm-6 col-md-12 col-lg">
                <div className="vehicle-detail-container">
                  <div className="grid-image">
                    <img
                      src={dbg}
                      alt="detail-vehicle"
                      className="img-fluid img-thumbnail rounded"
                    />
                  </div>
                  <div className="item2">
                    <button type="button" className="btn btn-light">
                      <i className="bi bi-chevron-left"></i>
                    </button>
                  </div>
                  <div className="item3">
                    <img
                      src={dbg}
                      alt="detail-vehicle"
                      className="img-thumbnail rounded vehicle-preview"
                    />
                  </div>
                  <div className="item4">
                    <img
                      src={dbg}
                      alt="detail-vehicle"
                      className="img-thumbnail rounded vehicle-preview"
                    />
                  </div>
                  <div className="item4">
                    <button type="button" className="btn btn-light">
                      <i className="bi bi-chevron-right"></i>
                    </button>
                  </div>
                </div>
              </div>
          <aside className="col col-sm-5 col-md-5 post-image-information">
            <input
              className="post-vehicel-input"
              type="text"
              name="name"
              placeholder="Name (max up to 50 words)"
            />
            <input
              className="post-vehicel-input"
              type="text"
              name="location"
              placeholder="Location"
            />
            <input
              className="post-vehicel-input"
              type="text"
              name="detail"
              placeholder="Detail"
            />
            <p>Price :</p>
            <input
              className="post-vehicel-input"
              type="text"
              name="price"
              id=""
              placeholder="Price"
            />
            <p>Status :</p>
            <input
              className="post-vehicel-input"
              type="text"
              name="status"
              placeholder="Status"
            />
            <div className="container-fluid d-flex justify-content-center qty-box">
              <button
                onClick={IncrementItem}
                type="button"
                className="btn btn-warning plus-qty-post-vehicle"
              >
                +
              </button>
              <div className="form-group">
                <p onClick={ToggleClick} className="form-control text-qty-post-vehicle">
                  {state.clicks}
                </p>
              </div>
              <button
                onClick={DecreaseItem}
                type="button"
                className="btn btn-light min-qty-post-vehicle"
              >
                -
              </button>
            </div>
          </aside>
        </div>

        <div className="row justify-content-center" style={{width: "50%" }}>
          <button className="col-4 col-sm-3 col-md btn btn-warning btn-reservation yellow-color mx-2">Add to item</button>
          <button type="submit" className="col-4 col-sm-3 col-md btn btn-dark btn-liked mx-2">Save item</button>
        </div>
      </div>
    </form>
  );
};

export default Vehiclepostcomponent;
