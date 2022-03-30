import React, { Component } from "react";
import "../../style.css";
import { useNavigate } from "react-router-dom";
import dbg from "../../images/defaultVehicle.png";
import { addVehicle } from "../../utils/https/vehicle";
import { connect } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

class Vehiclepostcomponent extends Component {
  constructor(props) {
    console.log(props.token);
    super(props);
    this.state = {
      counter: 1,
      name: "",
      price: "",
      images: "",
      location: "",
      type: "",
      description: "",
      result: [],
    };
    this.inputFile = React.createRef();
  }

  addCounter = () => {
    const newCounter = this.state.counter;
    this.setState({
      counter: newCounter + 1,
    });
  };

  subCounter = () => {
    const newCounter = this.state.counter;
    this.setState({
      counter: newCounter - 1 < 1 ? 1 : newCounter - 1,
    });
  };

  handleFile = (event) => {
    this.inputFile.current.click();
    event.preventDefault();
  };

  formChange = (e) => {
    const data = { ...this.state };
    data[e.target.name] = e.target.value;
    this.setState(data);
  };

  fileChange = (event) => {
    const file = event.target.files[0];
    const data = { ...this.state };
    if (file) {
      data.image = file;
      this.setState(data);
    }
    event.preventDefault();
  };

  submitHandler = () => {
    const body = new FormData();
    body.append("brand", this.state.name);
    body.append("price", this.state.price);
    body.append("type", this.state.type);
    body.append("city", this.state.location);
    body.append("qty", this.state.counter);
    body.append("description", this.state.description);
    return body;
  };

  postVehicle = (e) => {
    const body = this.submitHandler();
    const token = this.props.token;
    const url = process.env.REACT_APP_HOST + "/vehicles";

    axios({
      url: url,
      method: "POST",
      data: body,
      headers: {
        "content-type": "multipart/form-data",
        // "application"
        "x-access-token": token,
      },
    })
      .then((res) => {
        toast.info("add Success");
        console.log("cek res", res);
        // this.setState({ res: res.data.result.id });
        // this.props.history.push("/");
      })
      .catch((err) => {
        console.log(err.response);
        toast.error("add failed");
      });
  };

  render() {
    return (
      // onSubmit={postVehicleHandler}
      <form>
        <div className="container-fluid vehicle-detail">
          <ToastContainer />

          <div className="row justify-content-center">
            <div className="col-sm-6 col-md-12 col-lg">
              <div className="vehicle-detail-container">
                <section className="grid-image">
                  <input
                    type="file"
                    name="images"
                    hidden
                    onChange={this.fileChange}
                    ref={this.inputFile}
                  />
                  <button className="add" onClick={this.handleFile} />
                </section>
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
                onChange={this.formChange}
              />
              <input
                className="post-vehicel-input"
                type="text"
                name="location"
                placeholder="Location"
                onChange={this.formChange}
              />
              <input
                className="post-vehicel-input"
                type="text"
                name="detail"
                placeholder="Detail"
                onChange={this.formChange}
              />
              <p>Price :</p>
              <input
                className="post-vehicel-input"
                type="text"
                name="price"
                onChange={this.formChange}
                id=""
                placeholder="Price"
              />
              <p>Status :</p>
              <input
                className="post-vehicel-input"
                type="text"
                name="status"
                placeholder="Status"
                onChange={this.formChange}
              />
              <div className="container-fluid d-flex justify-content-center qty-box">
                <div className="form-group"></div>
                <button
                  onClick={this.subCounter}
                  type="button"
                  className="btn btn-light min-qty-post-vehicle"
                >
                  -
                </button>
                <p
                  // onClick={this.state.counter}
                  className="form-control text-qty-post-vehicle"
                >
                  {this.state.counter}
                  {/* {this.clicks} */}
                </p>
                <button
                  onClick={this.addCounter}
                  type="button"
                  className="btn btn-warning plus-qty-post-vehicle"
                >
                  +
                </button>
              </div>
            </aside>
          </div>

          <div className="row justify-content-center" style={{ width: "50%" }}>
            <button className="col-4 col-sm-3 col-md btn btn-warning btn-reservation yellow-color mx-2">
              Add to item
            </button>
            <button
              type="submit"
              className="col-4 col-sm-3 col-md btn btn-dark btn-liked mx-2"
              onClick={this.postVehicle}
            >
              Save item
            </button>
          </div>
        </div>
      </form>
    );
  }
}

// export default Vehiclepostcomponent;
const mapStateToProps = (state) => {
  console.log(state.auth.userData.token);
  return {
    token: state.auth.userData.token,
  };
};

export default connect(mapStateToProps)(Vehiclepostcomponent);
