/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import logo from "../../images/btn-google.png";
import "../../style.css";
// import { useHistory } from "react-router-dom";
import { loginAction } from "../../redux/actions/auth";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class LoginComponent extends Component {
  //  history = useHistory(this.props.history);
  submitHandler = (event) => {
    event.preventDefault();
    const body = {
      email_address: event.target.email.value,
      password: event.target.password.value,
    };
    this.props.loginDispatch(body);
  };

  componentDidUpdate() {
    if (this.props.auth.isFulfilled === true) {
      localStorage["login-token"] = JSON.stringify(
        this.props.auth.userData.token
      );
      this.props.history.push("/");
    }
  }
  render() {
    return (
      <>
        <div className="col-4 col-sm col-md col-lg right">
          <form onSubmit={this.submitHandler}>
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
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginDispatch: (body) => {
      dispatch(loginAction(body));
    },
  };
};

// export default LoginComponent;
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(LoginComponent));

// loginAuth(body)
//   .then((response) => {
//     const token = response.data.result.token;
//     localStorage.setItem("login-token", JSON.stringify(token));
//     history.push("/");
//   })
//   .catch((error) => console.error(error));
