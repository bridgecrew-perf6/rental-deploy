/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import logo from "../../images/btn-google.png";
import "../../style.css";
import { Link, useNavigate } from "react-router-dom";
import { registerAuth } from "../../utils/https/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loadingbtn from "../loading/LoadingBtn";

const SignupComponent = (props) => {
  let navigate = useNavigate();
  const [isFetching, setIsFetching] = useState(false);

  const [icon, setIcon] = useState("bi bi-eye-slash");
  const [type, setType] = useState("password");
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
    if (type === "password") {
      setIcon("bi bi-eye");
      setType("text");
    } else {
      setIcon("bi bi-eye-slash");
      setType("password");
    }
  };

  const registerHandler = (event) => {
    event.preventDefault();
    const body = {
      name: event.target.name.value,
      email: event.target.email.value,
      password: event.target.password.value,
    };
    registerAuth(body)
      .then((response) => {
        const registerResponse = response.data.result;
        console.log(registerResponse);
        setTimeout(() => {
          navigate("/login");
        }, 3000);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // useEffect(() => {
  //   if (props.auth.isPending === true) {
  //   }
  // });
  const notify = () => {
    setIsFetching(true);
    toast.info("Account Created Successfully, Please Login", {
      position: "top",
    });
  };

  return (
    <div className="col-4 col-sm col-md col-lg right">
      <form onSubmit={registerHandler}>
        <div className="form-group form-group-index">
          <input
            name="name"
            type="text"
            // value=name
            className="form-control form-control-md sign-form"
            id="inputUsername"
            placeholder="Username"
          />
          <input
            name="email"
            type="email"
            className="form-control form-control-md sign-form"
            id="inputEmail"
            aria-describedby="emailHelp"
            placeholder="Enter Email"
          />
          <div>
            <input
              name="password"
              type={(passwordShown ? "text" : "password", type)}
              className="form-control form-control-md sign-form"
              id="inputPassword"
              placeholder="Password"
            />
            <div className="showpsdRegis">
              <i onClick={togglePasswordVisiblity} className={icon}></i>{" "}
            </div>
          </div>
          <Link to={"/forgot-password"}>
            <a className="forgot-password">Forgot password?</a>
          </Link>
        </div>
        <button
          type="submit"
          className="btn btn-warning btn-md btn-block btn-right yellow-color"
          onClick={notify}
        >
          {isFetching ? <Loadingbtn /> : "SignUp"}
        </button>
        <ToastContainer />

        <div className="btn-wrapper">
          <a type="button" className="btn btn-light btn-md btn-block btn-right">
            <img src={logo} alt="logo" />
            Signup Using Google
          </a>
        </div>
      </form>
    </div>
  );
};

export default SignupComponent;
