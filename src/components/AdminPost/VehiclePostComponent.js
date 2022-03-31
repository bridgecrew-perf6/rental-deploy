import React, { useState } from "react";
import "../../style.css";
// import { useNavigate } from "react-router-dom";
import dbg from "../../images/defaultVehicle.png";
import { addVehicle } from "../../utils/https/vehicle";
// import { connect } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
// import axios from "axios";

const Vehiclepostcomponent = () => {
  const token = useSelector((state) => state.auth.userData.token);
  const ownerId = useSelector((state) => state.auth.userData.id);

  console.log("my token add v", token, ownerId);
  // const [categories, setCategory] = useState([]);
  const [image, setImage] = useState(null);
  const [imgPrev, setImagePrev] = useState(null);

  const [counter, setCounter] = React.useState(1);

  const addCounter = () => {
    const newCounter = counter + 1;
    setCounter(newCounter);
    // const newCounterPrice = counterPrice + counterPrice;
  };

  const subCounter = () => {
    const newCounter = counter - 1 < 0 ? 0 : counter - 1;
    setCounter(newCounter);
  };

  // name, location, detail, price, status, qty, category

  const [data, setData] = useState({
    name: "",
    location: "",
    detail: "",
    price: "",
    status: "",
    qty: "",
    category: "",
    // user_id: "",
  });

  const handleImage = (e) => {
    const file = e.target.files[0];
    console.log(file);
    setImage(file);
    setImagePrev(URL.createObjectURL(file));
  };
  console.log("image file upl : ", image);

  const handleChange = (e) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form data token : ", token);
    let body = new FormData();
    body.append("user_id", ownerId);
    body.append("name", data.name);
    body.append("location", data.location);
    body.append("description", data.detail);
    body.append("price", data.price);
    body.append("status", data.status);
    body.append("qty", counter);
    body.append("type", data.type);
    if (image) body.append("images", image);

    console.log("body data : ", body);
    addVehicle(body, token)
      .then((response) => {
        console.log("resposnse pos req", body);
        console.log(response);
        toast.success("Vehicle Added.");
      })
      .catch((err) => {
        console.log(err, err.message);
        toast.warning("Add failed");
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="container-fluid vehicle-detail">
          <ToastContainer />

          <div className="row justify-content-center">
            <div className="col-sm-6 col-md-12 col-lg">
              <div className="vehicle-detail-container">
                <section className="grid-image">
                  <input type="file" name="images" hidden />
                  <button className="add" />
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
                  <div
                  // value={image.file}
                  // name="image"
                  >
                    {image &&
                    (
                      <img
                        src={imgPrev}
                        className="add-image imgWidthAdd"
                        alt="add pic"
                      />
                    ) !== null ? (
                      <img
                        src={imgPrev}
                        className="add-image imgWidthAdd"
                        alt="add pic"
                      />
                    ) : (
                      <img
                        src={dbg}
                        className="add-image imgWidthAdd"
                        alt="add pic"
                      />
                    )}
                  </div>
                  <div className="input-file-btn btn-add-byGallery btn-width-container btn-yellow-color font-brown-color">
                    <input
                      type="file"
                      id="file"
                      onChange={(e) => handleImage(e)}
                      {...data}
                    />
                    <label htmlFor="file"> Choose From Gallery</label>
                  </div>
                  {/* <img
                    src={dbg}
                    alt="detail-vehicle"
                    className="img-thumbnail rounded vehicle-preview"
                  /> */}
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
                onChange={handleChange}
                placeholder="Name (max up to 50 words)"
              />
              <input
                className="post-vehicel-input"
                type="text"
                name="location"
                onChange={handleChange}
                placeholder="Location"
              />
              <input
                className="post-vehicel-input"
                type="text"
                name="detail"
                onChange={handleChange}
                placeholder="Detail"
              />
              <p style={{ textAlign: "left" }}>Price :</p>
              <input
                className="post-vehicel-input"
                type="text"
                name="price"
                onChange={handleChange}
                id=""
                placeholder="Price"
              />
              <p style={{ textAlign: "left" }}>Status :</p>
              <input
                className="post-vehicel-input"
                type="text"
                name="status"
                onChange={handleChange}
                placeholder="Status"
              />
              <div className="container-fluid d-flex justify-content-center qty-box">
                <div className="form-group"></div>
                <button
                  // onClick={this.subCounter}
                  onClick={subCounter}
                  type="button"
                  className="btn btn-light min-qty-post-vehicle"
                >
                  -
                </button>
                <p className="form-control text-qty-post-vehicle">{counter}</p>
                <button
                  onClick={addCounter}
                  type="button"
                  className="btn btn-warning plus-qty-post-vehicle"
                >
                  +
                </button>
              </div>
            </aside>
          </div>

          <div className="row justify-content-center" style={{ width: "50%" }}>
            {/* <button className="col-4 col-sm-3 col-md btn btn-warning btn-reservation yellow-color mx-2">
              Add to item
            </button> */}
            <select
              id="status"
              name="type"
              className="col-4 col-sm-3 col-md btn btn-warning btn-reservation yellow-color mx-2"
            >
              <option value="" disable="true" hidden>
                Add Item to
              </option>
              <option value="" className="choose-category" disabled>
                Choose Category
              </option>
              <option value="Car">Car</option>
              <option value="Motorbike">Motorbike</option>
              <option value="Bike">Bike</option>
            </select>
            <button
              type="submit"
              className="col-4 col-sm-3 col-md btn btn-dark btn-liked mx-2"
            >
              Save item
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Vehiclepostcomponent;

// constructor(props) {
//   console.log(props.token);
//   super(props);
//   this.state = {
//     counter: 1,
//     name: "",
//     price: "",
//     images: "",
//     location: "",
//     type: "",
//     description: "",
//     result: [],
//   };
//   this.inputFile = React.createRef();
// }

// addCounter = () => {
//   const newCounter = this.state.counter;
//   this.setState({
//     counter: newCounter + 1,
//   });
// };

// subCounter = () => {
//   const newCounter = this.state.counter;
//   this.setState({
//     counter: newCounter - 1 < 1 ? 1 : newCounter - 1,
//   });
// };

// handleFile = (event) => {
//   this.inputFile.current.click();
//   event.preventDefault();
// };

// formChange = (e) => {
//   const data = { ...this.state };
//   data[e.target.name] = e.target.value;
//   this.setState(data);
// };

// fileChange = (event) => {
//   const file = event.target.files[0];
//   const data = { ...this.state };
//   if (file) {
//     data.image = file;
//     this.setState(data);
//   }
//   event.preventDefault();
// };

// submitHandler = () => {
//   const body = new FormData();
//   body.append("brand", this.state.name);
//   body.append("price", this.state.price);
//   body.append("type", this.state.type);
//   body.append("city", this.state.location);
//   body.append("qty", this.state.counter);
//   body.append("description", this.state.description);
//   return body;
// };

// postVehicle = (e) => {
//   const body = this.submitHandler();
//   const token = this.props.token;
//   const url = process.env.REACT_APP_HOST + "/vehicles";

//   axios({
//     url: url,
//     method: "POST",
//     data: body,
//     headers: {
//       "content-type": "multipart/form-data",
//       // "application"
//       "x-access-token": token,
//     },
//   })
//     .then((res) => {
//       toast.info("add Success");
//       console.log("cek res", res);
//       // this.setState({ res: res.data.result.id });
//       // this.props.history.push("/");
//     })
//     .catch((err) => {
//       console.log(err.response);
//       toast.error("add failed");
//     });
// };
