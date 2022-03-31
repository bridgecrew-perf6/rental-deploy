import React, { useState, useEffect } from "react";
import "../../style.css";
import { Layout, Navigation } from "../../components";
// import profileImage from "../../images/edward.png";
import { getUsers, editUsers } from "../../utils/https/user";
// import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
// import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Profile = () => {
  const token = useSelector((state) => state.auth.userData.token);

  const [user, setUser] = useState([]);
  const [image, setImage] = useState(null);
  const [imgPrev, setImagePrev] = useState(null);
  const [imageShow, setImageShow] = useState(null);

  useEffect(() => {
    const getUserProfile = () => {
      getUsers(token)
        .then((res) => {
          console.log(res);
          setUser(res.data.result[0]);
          setImageShow(res.data.result[0].image);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getUserProfile();
  }, []);

  console.log("img", imageShow);
  const imgpreview = `${process.env.REACT_APP_HOST}/${imageShow}`;
  console.log("imgurl", imgpreview);

  const [data, setData] = useState({
    // id: "",
    name: "",
    username: "",
    email: "",
    address: "",
    mobile_number: "",
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
    e.preventDefault();
    console.log("fomradta token : ", token);
    let body = new FormData();
    body.append("name", data.name);
    body.append("username", data.username);
    body.append("email", data.email);
    body.append("address", data.address);
    body.append("mobile_number", data.mobile_number);

    if (image) body.append("image", image);

    console.log("body data : ", body);
    editUsers(body, token)
      .then((response) => {
        console.log("resposnse pos req", body);
        toast.info("Update Success");
        console.log(response);
      })
      .catch((err) => {
        console.log(err, err.message);
        toast.error("Update failed");
      });
  };

  return (
    <Layout>
      <Navigation />
      <ToastContainer />

      <div className="profile-section">
        <div className="container-fluid">
          {/* <form onSubmit={sub}></form> */}
          <div className="card profile-card">
            <div className="container-fluid profile-picture">
              {image &&
              (
                <img
                  src={`${process.env.REACT_APP_HOST}/${imageShow}`}
                  className="card-img-top img-thumbnail profile-pic addWidth"
                  alt="profileImg"
                />
              ) !== null ? (
                <img
                  src={imgPrev}
                  className="card-img-top img-thumbnail profile-pic addWidth"
                  alt="profileImg"
                />
              ) : (
                <img
                  src={`${process.env.REACT_APP_HOST}/${imageShow}`}
                  className="card-img-top img-thumbnail profile-pic addWidth"
                  alt="profileImg"
                  onError={({ currentTarget }) => {
                    console.log(currentTarget);
                    currentTarget.onerror = null;
                    currentTarget.src = require("../../images/defaultVehicle.png");
                  }}
                />
              )}
              {/* <img
                src={profileImage}
                className="card-img-top img-thumbnail profile-pic"
                alt="profileImg"
              /> */}
              <div className="btn-edit-profile">
                <input
                  type="file"
                  id="file"
                  className="change-promo-img-btn img-edit-promo "
                  onChange={(e) => handleImage(e)}
                  {...data}
                />
                <label
                  htmlFor="file"
                  className="input-file-edit-btn change-promo-img-btn"
                >
                  <i className="bi bi-pencil"></i>
                </label>
              </div>
              {/* <button className="btn btn-primary btn-edit-profile">
                <i className="bi bi-pencil"></i>
                <input
                  type="file"
                  id="file"
                  className="change-promo-img-btn img-edit-promo"
                  onChange={(e) => handleImage(e)}
                  {...data}
                />
              </button> */}
            </div>
            <div className="card-body">
              <h1 className="display-6">
                {" "}
                {`${user.name}` !== "" ? `${user.name}` : `${user.username}`}
              </h1>
              <p className="card-text text-muted profile-text email">
                {" "}
                {`${user.email}` !== null ? `${user.email}` : "-"}
              </p>
              <p className="card-text text-muted profile-text phone-number">
                +
                {`${user.mobile_number}` !== null
                  ? `${user.mobile_number}`
                  : "-"}
              </p>
              <p className="card-text text-muted profile-text start-date">
                Has been active since 2013
              </p>
            </div>
            <div className="container radio-btn-profile radio-yellow">
              <div className="form-check form-check-inline radio-btn-styling">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <label className="form-check-label">Female</label>
              </div>
              <div className="form-check form-check-inline radio-btn-styling">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                />
                <label className="form-check-label">Male</label>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid profile-wrapper">
          <form onSubmit={handleSubmit}>
            <h1 className="profile-title-heading">Contacs</h1>
            <div className="mb-3 profile-input">
              <label className="form-label">Email address :</label>
              <input
                type="email"
                className="form-control"
                id="inputEmail"
                aria-describedby="emailHelp"
                name="email"
                onChange={handleChange}
              />
            </div>
            <div className="mb-3 profile-input">
              <label className="form-label">Address :</label>
              <input
                type="text"
                className="form-control"
                id="inputAddress"
                name="address"
                onChange={handleChange}
              />
            </div>
            <div className="mb-3 profile-input">
              <label className="form-label">Mobile number :</label>
              <input
                type="text"
                className="form-control"
                id="inputMobileNumber"
                name="mobile_number"
                onChange={handleChange}
              />
            </div>

            <h1 className="profile-title-heading">Identify</h1>
            <div className="row g-lg-3 align-items-center identify-input">
              <div className="col-auto col-md-5 profile-input profile-input-Identify">
                <label className="form-label">display name :</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputUserName"
                  placeholder="username"
                  name="username"
                  onChange={handleChange}
                />
              </div>
              <div className="col-auto col-md-5 profile-input profile-input-Identify">
                <label className="form-label">DD/MM/YY :</label>
                <input type="date" className="form-control" id="dob" />
              </div>
            </div>

            <div className="container-fluid btn-profile-bottom">
              <div className="row justify-content-center">
                <div className="col-sm">
                  <button
                    type="submit"
                    className="btn btn-dark btn-lg btn-block profile-save"
                  >
                    Save Changes
                  </button>
                </div>
                <div className="col-sm">
                  <button
                    type="button"
                    className="btn btn-warning btn-lg btn-block profile-password yellow-color"
                  >
                    Edit Password
                  </button>
                </div>
                <div className="col-sm">
                  <button type="button" className="btn btn-light btn-cancel">
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
