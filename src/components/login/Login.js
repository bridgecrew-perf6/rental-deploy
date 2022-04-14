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

  const initialValues = { email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setFormErrors(validate(formValues));
    // setIsSubmit(true);
    const body = {
      email: event.target.email.value,
      password: event.target.password.value,
    };
    props.loginDispatch(body);
  };

  useEffect(() => {
    // console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      // console.log(formValues);
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length <= 2) {
      errors.password = "Password must be more than 2 characters";
    }
    // } else if (values.password.length > 10) {
    //   errors.password = "Password cannot exceed more than 10 characters";
    // }
    return errors;
  };

  useEffect(() => {
    if (props.auth.isFulfilled === true) {
      // localStorage["login-token"] = JSON.stringify(props.auth.userData.token);
      // localStorage["user"] = JSON.stringify(props.auth.userData.user);
      toast.info("Login Success");
      setTimeout(() => {
        navigate("/");
      }, 1000);
      setIsFetching(false);
    }
    if (props.auth.isPending === true) {
      setIsFetching(true);
    }
    if (props.auth.isRejected === true) {
      toast.error("Wrong Email/Password");
      setIsFetching(false);
    }

    // const hasError = props.auth.err.status === 401;
    // if (props.loginAction === Error) {
    //   const error = new Error("This is an error"); // I want to set my message that I obtained from the controller here.
    //   throw error;
    // }
    // return response;

    // checkStatus();

    // if (props.auth.err.status === 401) {
    //   toast.error("Wrong Email/Password");
    //   setIsFetching(false);
    // }
  }, [props.auth]);

  // const notify = () => {
  //   toast.info("Login success", {
  //     position: "top",
  //   });
  // };

  return (
    <>
      {/* {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div>successfully</div>
      ) : (
        <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
      )} */}
      <div className="col-4 col-sm col-md col-lg right">
        <form onSubmit={submitHandler}>
          <div className="form-group form-group-index">
            <input
              name="email"
              type="text"
              className="form-control form-control-md sign-form"
              placeholder="Enter email"
              value={formValues.email}
              onChange={handleChange}
            />
            <p
              style={{
                width: "50%",
                color: "#B20600",
                textAlign: "center",
                margin: "auto",
                backgroundColor: "#DFDFDE",
              }}
            >
              {formErrors.email}
            </p>
            <div>
              <input
                name="password"
                type={(passwordShown ? "text" : "password", type)}
                // type="password"
                className="form-control form-control-md sign-form"
                placeholder="Password"
                value={formValues.password}
                onChange={handleChange}
              />
              <div className="showpsd">
                <i onClick={togglePasswordVisiblity} className={icon}></i>{" "}
              </div>
              <p
                style={{
                  width: "50%",
                  color: "#B20600",
                  textAlign: "center",
                  margin: "auto",
                  backgroundColor: "#DFDFDE",
                }}
              >
                {formErrors.password}
              </p>
            </div>
            <Link to={"/forgot-password"}>
              <p className="forgot-password">Forgot password?</p>
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
