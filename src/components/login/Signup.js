/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import logo from "../../images/btn-google.png";
import "../../style.css";
import { useHistory } from "react-router-dom";
import { registerAuth } from "../../utils/https/auth";

const SignupComponent = (props) => {
  const history = useHistory(props.history);

  const registerHandler = (event) => {
    event.preventDefault();
    const body = {
      name: event.target.name.value,
      email_address: event.target.email.value,
      password: event.target.password.value,
    };
   registerAuth(body)
      .then((response) => {
        const registerResponse = response.data.result;
        console.log(registerResponse);
        history.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
      <div className="col-4 col-sm col-md col-lg right">
        <form onSubmit={registerHandler}>
          <div className="form-group form-group-index">
            <input
              name="name"
              type="text"
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
            <input
              name="password"
              type="text"
              className="form-control form-control-md sign-form"
              id="inputPassword"
              placeholder="Password"
            />
            <a type="button" className="forgot-password">
              Forgot password?
            </a>
          </div>
          <button
            type="submit"
            className="btn btn-warning btn-md btn-block btn-right yellow-color"
          >
            Signup
          </button>
          <div className="btn-wrapper">
            <a
              type="button"
              className="btn btn-light btn-md btn-block btn-right"
            >
              <img src={logo} alt="logo" />
              Signup Using Google
            </a>
          </div>
        </form>
      </div>
  );
};

export default SignupComponent;
