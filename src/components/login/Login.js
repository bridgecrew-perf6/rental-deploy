/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
// import navLogo from "../images/dot.svg";
import logo from "../../images/btn-google.png";
// import { Container } from "react-bootstrap";
import "../../style.css";
import axios from "axios";
import { useHistory } from "react-router-dom";

const LoginComponent = (props) => {
  const history = useHistory(props.history);

  const submitHandler = (event) => {
    event.preventDefault();
    const body = {
      email_address: event.target.email.value,
      password: event.target.password.value,
    };
    const URL = "http://localhost:8000/auth/SignIn";
    axios
      .post(URL, body)
      .then((response) => {
        const token = response.data.result.token;
        // const body = response.data.result.payload;
        // console.log(body.id);
        // console.log(response);
        localStorage.setItem("login-token", JSON.stringify(token));
        history.push("/");
      })
      .catch((error) => console.error(error));
  };

  return (
    <>
       <div className="col-4 col-sm col-md col-lg right">
        <form onSubmit={submitHandler}>
          <div className="form-group form-group-index">
            <input
              name="email"
              type="text"
              className="form-control form-control-md sign-form"
              placeholder="Enter email"
            />
            <input
              name="password"
              type="password"
              className="form-control form-control-md sign-form"
              placeholder="Password"
            />
            <a className="forgot-password">Forgot password?</a>
          </div>
          <a>
            <button
              type="submit"
              className="btn btn-warning btn-md btn-block btn-right yellow-color"
            >
              Login
            </button>
          </a>
          <div className="btn-wrapper ">
            <a className="btn btn-light btn-md btn-block btn-right">
              <img src={logo} />
              Login Using Google
            </a>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginComponent;
