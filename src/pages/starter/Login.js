import React, { Component } from "react";
import { Layout, Header, LoginComponent } from "../../components";
import "../../style.css";
import navLogo from "../../images/dot.svg";
import { Link } from "react-router-dom";

class Login extends Component {
  render() {
    return (
      <Layout>
        <Header />
        <div className="main-child">
          <div className="row justify-content-center wrapper">
            <div className="col-4 col-sm col-md col-lg left">
              <h1 className="title-header-lg">
                Let's Explore <br /> The World
              </h1>
              <p className="title-header-sm">Don't have an account ?</p>
              <Link to="/Signup">
                <button type="button" className="btn btn-lg btn-block btn-left">
                  Sign Up
                </button>
              </Link>
            </div>

            <div className="col-1 col-md-1 dot-svg">
              <img src={navLogo} alt="dotSvg" />
            </div>
            <LoginComponent />
          </div>
        </div>
      </Layout>
    );
  }
}

export default Login;
