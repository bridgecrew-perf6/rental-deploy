/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import logo from "../../images/btn-google.png";
import "../../style.css";
import { Link, useNavigate } from "react-router-dom";
import { loginAction } from "../../redux/actions/auth";
import { connect } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loadingbtn from "../../components/loading/LoadingBtn";

const LoginComponent = (props) => {
  const [isFetching, setIsFetching] = useState(false);
  let navigate = useNavigate();
  const [icon, setIcon] = useState("bi bi-eye");
  const [type, setType] = useState("password");
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
    if (type === "password") {
      setIcon("bi bi-eye-slash");
      setType("text");
    } else {
      setIcon("bi bi-eye");
      setType("password");
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const body = {
      email: event.target.email.value,
      password: event.target.password.value,
    };
    props.loginDispatch(body);
  };
  useEffect(() => {
    if (props.auth.isFulfilled === true) {
      // localStorage["login-token"] = JSON.stringify(props.auth.userData.token);
      // localStorage["user"] = JSON.stringify(props.auth.userData.user);
      toast.info("Login Success");
      setTimeout(() => {
        navigate("/");
      }, 1000);
    }
    if (props.auth.isPending === true) {
      setIsFetching(true);
    }
    if (props.auth.isRejected === true) {
      toast.error("Wrong Email/Password");
    }
  });
  // const notify = () => {
  //   toast.info("Login success", {
  //     position: "top",
  //   });
  // };

  return (
    <>
      <div className="col-4 col-sm col-md col-lg right">
        <form onSubmit={submitHandler}>
          <div className="form-group form-group-index">
            <input
              name="email"
              type="email"
              className="form-control form-control-md sign-form"
              placeholder="Enter email"
              // validations={[requiredField]}
            />
            <div>
              <input
                name="password"
                type={(passwordShown ? "text" : "password", type)}
                // type="password"
                className="form-control form-control-md sign-form"
                placeholder="Password"
                // validations={[requiredField]}
              />
              <i onClick={togglePasswordVisiblity} className={icon}></i>{" "}
            </div>
            <Link to={"/forgot-password"}>
              <a className="forgot-password">Forgot password?</a>
            </Link>
          </div>
          <div>
            <button
              type="submit"
              className="btn btn-warning btn-md btn-block btn-right yellow-color"
              // onClick={notify}
            >
              {isFetching ? <Loadingbtn /> : "Login"}
            </button>
            <ToastContainer />
          </div>
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

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginDispatch: (body) => {
      dispatch(loginAction(body));
      console.log(body);
    },
  };
};

// export default LoginComponent;
export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);

// loginAuth(body)
//   .then((response) => {
//     const token = response.data.result.token;
//     localStorage.setItem("login-token", JSON.stringify(token));
//     history.push("/");
//   })
//   .catch((error) => console.error(error));
