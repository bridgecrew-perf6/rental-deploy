/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { Layout, Navigation, PopularHome, Testimonial } from "../../components"; 
import "../../style.css";
import homebg from "../../images/home-bg.png";

class Home extends Component {
  
  componentDidMount() {
    const token = localStorage.getItem("login-token");
    this.setState({
      userToken: JSON.parse(token),
    });
  }
  render() {
    // const token = JSON.parse(localStorage.getItem("login-token"));
    // if (!token) return <Redirect to="/login" />;
    return (
      <Layout>
        <Navigation />
        <div className="banner-content">
          <div className="container-fluid main-child-home">
            <img src={homebg} className="img-fluid-home" alt="bg" />
            <div className="container-fluid bg-pass-home">
              <div>
                <h1 className="title-header-lg">
                  Explore and <br />
                  Travel
                </h1>
                <p className="title-header-sm">Vehicle Finder</p>
                <div>
                  <hr className="hr-home" />
                </div>
              </div>

              <div className="explore-btn-section">
                <div className="container-fluid dropdown-wrapper">
                  <div className="btn-group">
                    <button
                      className="btn btn-light dropdown-toggle btn-dropdown-group"
                      type="button"
                      id="defaultDropdown"
                      data-bs-toggle="dropdown"
                      data-bs-auto-close="true"
                      aria-expanded="false"
                    >
                      Location
                      <span className="dropdown-span-icon">
                        <i className="bi bi-chevron-down"></i>
                      </span>
                    </button>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="defaultDropdown"
                    >
                      <li>
                        <a className="dropdown-item">Menu item</a>
                      </li>
                      <li>
                        <a className="dropdown-item">Menu item</a>
                      </li>
                      <li>
                        <a className="dropdown-item">Menu item</a>
                      </li>
                    </ul>
                  </div>

                  <div className="btn-group">
                    <button
                      className="btn btn-light dropdown-toggle btn-dropdown-group"
                      type="button"
                      id="defaultDropdown"
                      data-bs-toggle="dropdown"
                      data-bs-auto-close="true"
                      aria-expanded="false"
                    >
                      Type
                      <span className="dropdown-span-icon">
                        <i className="bi bi-chevron-down"></i>
                      </span>
                    </button>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="defaultDropdown"
                    >
                      <li>
                        <a className="dropdown-item">Menu item</a>
                      </li>
                      <li>
                        <a className="dropdown-item">Menu item</a>
                      </li>
                      <li>
                        <a className="dropdown-item">Menu item</a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="container-fluid dropdown-wrapper">
                  <div className="btn-group">
                    <button
                      className="btn btn-light dropdown-toggle btn-dropdown-group"
                      type="button"
                      id="defaultDropdown"
                      data-bs-toggle="dropdown"
                      data-bs-auto-close="true"
                      aria-expanded="false"
                    >
                      Payment
                      <span className="dropdown-span-icon">
                        <i className="bi bi-chevron-down"></i>
                      </span>
                    </button>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="defaultDropdown"
                    >
                      <li>
                        <a className="dropdown-item">Menu item</a>
                      </li>
                      <li>
                        <a className="dropdown-item">Menu item</a>
                      </li>
                      <li>
                        <a className="dropdown-item">Menu item</a>
                      </li>
                    </ul>
                  </div>

                  <div className="btn-group">
                    <button
                      className="btn btn-light dropdown-toggle btn-dropdown-group"
                      type="button"
                      id="defaultDropdown"
                      data-bs-toggle="dropdown"
                      data-bs-auto-close="true"
                      aria-expanded="false"
                    >
                      Date
                      <span className="dropdown-span-icon">
                        <i className="bi bi-chevron-down"></i>
                      </span>
                    </button>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="defaultDropdown"
                    >
                      <input type="date" className="form-control" id="dob" />
                    </ul>
                  </div>
                </div>
                <button
                  className="btn btn-warning btn-explore yellow-color"
                  type="button"
                >
                  Explore
                </button>
              </div>
            </div>
          </div>
        </div>
        <PopularHome />
        <Testimonial />
      </Layout>
    );
  }
}

export default Home;
