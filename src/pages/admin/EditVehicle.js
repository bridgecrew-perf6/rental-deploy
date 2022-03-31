import React, { useState, useEffect } from "react";
import { Navigation, Layout } from "../../components";
//useParams, Outlet,
import { Link, useNavigate } from "react-router-dom";
import vehicleDetailImg from "../../images/vehicle-detail.png";
import Loadingcomponent from "../../components/loading/LoadingComponent";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
import { getVehicleId, editVehicle } from "../../utils/https/vehicle";
import dbg from "../../images/defaultVehicle.png";
import "./style.css";

const Editvehicle = () => {
  const token = useSelector((state) => state.auth.userData.token);
  let navigate = useNavigate();

  const [image, setImage] = useState(null);
  const [imgPrev, setImagePrev] = useState(null);
  // const [getImg, setGetImg] = useState([]);
  // const [imageShow, setImageShow] = useState(null);

  // let { id } = useParams();
  let [vehicleDetail, setVehicleDetails] = useState([]);
  const [load, setLoad] = useState(false);

  const [counter, setCounter] = React.useState(1);
  // const [counterPrice, setCounterPrice] = React.useState();

  const addCounter = () => {
    const newCounter = counter + 1;
    setCounter(newCounter);
    // const newCounterPrice = counterPrice + counterPrice;
  };

  const subCounter = () => {
    const newCounter = counter - 1 < 0 ? 0 : counter - 1;
    setCounter(newCounter);
  };

  useEffect(() => {
    let id = 102;
    const fetchData = () =>
      getVehicleId(id)
        .then((response) => {
          setLoad(true);
          setVehicleDetails(response.data.result[0]);
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    fetchData();
  }, []);

  // console.log("img promo", imageShow);
  // const imgpreview = `${process.env.REACT_APP_HOST}/promos/${imageShow}`;
  // console.log("imgurl", imgpreview);

  const [data, setData] = useState({
    name: "",
    city: "",
    status: "",
    type: "",
    // reservation : "",
    price: "",
    qty: "",
    capacity: "",
  });

  const handleImage = (e) => {
    const file = e.target.files[0];
    console.log(file);
    setImage(file);
    setImagePrev(URL.createObjectURL(file));
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value,
    });
  };

  const handleSubmit = (e) => {
    let id = 102;
    e.preventDefault();
    console.log("fomradta token : ", token);
    let body = new FormData();
    // city: "",
    // status: "",
    // type : "",
    // // reservation : "",
    // price : "",
    // qty: "",
    body.append("name", data.name);
    body.append("city", data.city);
    body.append("status", data.status);
    body.append("type", data.type);
    body.append("qty", data.qty);
    body.append("price", data.price);
    body.append("capacity", data.capacity);
    if (image) body.append("image", image);

    console.log("body data : ", body);
    editVehicle(body, token, id)
      .then((response) => {
        navigate("/");
        console.log("resposnse pos req", body);
        toast.success("Update success.");

        console.log(response);
      })
      .catch((err) => {
        console.log(err, err.message);
        toast.warning("failed");
      });
  };

  return (
    <>
      <Layout>
        <Navigation />
        <form onSubmit={handleSubmit}>
          <ToastContainer />

          <div className="container-fluid vehicle-detail">
            <div className="container-fluid">
              <Link to="/">
                <button
                  type="button"
                  className="btn btn-light btn-lg btn-block btn-detail"
                >
                  <i className="bi bi-chevron-left"></i>Detail
                </button>
              </Link>
            </div>

            {load ? (
              <>
                <div className="container-fluid vehicle-detail">
                  <div className="justify-content-center">
                    <div className="col-sm-6 col-md-12 col-lg">
                      <div className="vehicle-detail-container">
                        <div className="grid-image">
                          <img
                            src={vehicleDetailImg}
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
                            src={vehicleDetailImg}
                            alt="detail-vehicle"
                            className="img-thumbnail rounded vehicle-preview"
                          />
                        </div>
                        <div className="item4">
                          <div>
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
                          <section>
                            <input
                              type="file"
                              id="file"
                              onChange={(e) => handleImage(e)}
                              {...data}
                            />
                            <label htmlFor="file"> Choose From Gallery</label>
                          </section>
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
                    <section>
                      <div className="col-sm-6 col-md-12 col-lg">
                        <div className="card">
                          <div className="card-body vehicle-info-wrapper">
                            <input
                              type="text"
                              className="form-control start-hour-btn display-5 vehicle-detail-title"
                              placeholder={vehicleDetail.name}
                              name="name"
                              onChange={handleChange}
                            />
                            <input
                              type="text"
                              className="form-control start-hour-btn card-subtitle city"
                              placeholder={vehicleDetail.city}
                              name="city"
                              onChange={handleChange}
                            />
                            <input
                              type="text"
                              className="form-control start-hour-btn status-vehicle"
                              placeholder={vehicleDetail.status}
                              name="status"
                              onChange={handleChange}
                            />
                            <h2 className="card-subtitle payment-info">
                              No prepayment
                            </h2>
                            {/* <h1 className="display-5 vehicle-detail-title">
                        {vehicleDetail.name}
                      </h1> */}
                            {/* <h3 className="card-subtitle city">
                        {vehicleDetail.city}
                      </h3>
                      <h2 className="card-subtitle status-vehicle">
                        {vehicleDetail.status}
                      </h2>
                      <h2 className="card-subtitle payment-info">
                        No prepayment
                      </h2> */}
                            <div className="vehicle-info-detail">
                              <input
                                type="number"
                                className="form-control start-hour-btn card-text"
                                placeholder={`${vehicleDetail.capacity} person`}
                                name="capacity"
                                onChange={handleChange}
                              />
                              <input
                                type="text"
                                className="form-control start-hour-btn card-text my-2"
                                placeholder={vehicleDetail.type}
                                name="type"
                                onChange={handleChange}
                              />
                              {/* <p className="card-text">Capacity : 1 Person</p>
                        <p className="card-text">Type : {vehicleDetail.type}</p>
                        <p className="card-text">Reservaton before 2 PM</p> */}
                            </div>
                            <div className="price">
                              {/* <h4>Rp.{vehicleDetail.price}/day</h4> */}
                              <input
                                type="number"
                                className="form-control start-hour-btn card-text"
                                placeholder={`Rp ${vehicleDetail.price} /day`}
                                name="capacity"
                                onChange={handleChange}
                              />
                            </div>
                            <div className="container-fluid d-flex justify-content-center qty-box">
                              <button
                                onClick={subCounter}
                                type="button"
                                className="btn btn-light min-qty"
                              >
                                -
                              </button>
                              <div className="form-group">
                                <p className="form-control text-qty">
                                  {counter}
                                </p>
                              </div>
                              <button
                                onClick={addCounter}
                                type="button"
                                className="btn btn-warning plus-qty"
                              >
                                +
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
              </>
            ) : (
              <Loadingcomponent />
            )}
          </div>

          {/* buttonFooter */}
          <div
            className="container-fluid btn-detail-bottom"
            style={{ marginBottom: "30px" }}
          >
            <div className="row justify-content-center">
              <div className="col-sm-4">
                <Link to="/">
                  <button
                    type="button"
                    className="btn btn-dark btn-lg btn-block btn-chatAdmin"
                  >
                    Cancel
                  </button>
                </Link>
              </div>
              <div className="col-sm-4">
                <button
                  type="submit"
                  className="btn btn-warning btn-lg btn-block btn-reservation yellow-color"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </form>
      </Layout>
    </>
  );
};

export default Editvehicle;
