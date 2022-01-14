import React, { Component } from 'react';
import '../../style.css';
import {Layout, Navigation} from '../../components';
import profileImage from "../../images/edward.png";

class Profile extends Component {
    render() {  
        return (
       <Layout>
           <Navigation />
            <div className="profile-section">
            <div className="container-fluid">

                <div className="card profile-card">
                    <div className="container-fluid profile-picture">
                        <img src={profileImage} className="card-img-top img-thumbnail profile-pic" alt="profileImg" />
                        <button className="btn btn-primary btn-edit-profile"><i className="bi bi-pencil"></i></button>
                    </div>
                    <div className="card-body">
                        <h1 className="display-6">Andrew</h1>
                        <p className="card-text text-muted profile-text email">samanthadoe@mail.com </p>
                        <p className="card-text text-muted profile-text phone-number">+62833467823</p>
                        <p className="card-text text-muted profile-text start-date">Has been active since 2013</p>
                    </div>
                    <div className="container radio-btn-profile radio-yellow">
                        <div className="form-check form-check-inline radio-btn-styling">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                            <label className="form-check-label" for="flexRadioDefault1">
                                Female
                            </label>
                        </div>
                        <div className="form-check form-check-inline radio-btn-styling">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                            <label className="form-check-label" for="flexRadioDefault2">
                            Male
                            </label>
                        </div>
                    </div>
                </div>

            </div>

            <div className="container-fluid profile-wrapper">
                <form>
                    <h1 className="profile-title-heading">Contacs</h1>
                    <div className="mb-3 profile-input">
                        <label for="exampleInputEmail" className="form-label">Email address :</label>
                        <input type="email" className="form-control" id="inputEmail" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3 profile-input">
                        <label for="einputAddress" className="form-label">Address :</label>
                        <input type="text" className="form-control" id="inputAddress" />
                    </div>
                    <div className="mb-3 profile-input">
                        <label for="inputMobileNumber" className="form-label">Mobile number :</label>
                        <input type="text" className="form-control" id="inputMobileNumber" />
                    </div>

                    <h1 className="profile-title-heading">Identify</h1>
                    <div className="row g-lg-3 align-items-center identify-input">
                        <div className="col-auto col-md-5 profile-input profile-input-Identify">
                            <label for="inputUserName" className="form-label">display name :</label>
                            <input type="text" className="form-control" id="inputUserName" placeholder="username" />
                        </div>
                        <div className="col-auto col-md-5 profile-input profile-input-Identify">
                            <label for="dob" className="form-label">DD/MM/YY :</label>
                            <input type="date" className="form-control" id="dob" />
                        </div>
                    </div>
                </form>

                <div className="container-fluid btn-profile-bottom">
                    <div className="row justify-content-center">
                        <div className="col-sm">
                            <button type="button" className="btn btn-dark btn-lg btn-block profile-save">Save Changes</button>
                        </div>
                        <div className="col-sm">
                            <button type="button" className="btn btn-warning btn-lg btn-block profile-password yellow-color">Edit Password</button>
                        </div>
                        <div className="col-sm">
                            <button type="button" className="btn btn-light btn-cancel">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
       </Layout>
        );
    }
}

export default Profile;