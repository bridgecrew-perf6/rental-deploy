import React from 'react'
import "../../style.css";
import smCricle from '../../images/sm-cicle-home-testimonial.png';
import imgRate from "../../images/rate.png";
import testimonialPicture from "../../images/edward.png";
import circleTestimonial from '../../images/circle-home-testimonial.png';
import plusTestimonialPicture from "../../images/plus-home-testimonial.png";

function Testimonial() {
    return (
        <div>
            <div className="container-fluid testimonial">
          <div>
            <img
              src={smCricle}
              className="sm-xplus"
              alt="plus"
            />
          </div>
          <h1 className="home-title">Testimonials</h1>
          <div className="row testimonial-row-wrapper">
            <div className="col-sm col-md-5 testimonial-rate-info">
              <img src={imgRate} alt="rate" />
              <p className="card-text">
                ”It was the right decision to rent vehicle
                <br />
                here, I spent less money and enjoy the
                <br />
                trip. It was an amazing experience to
                <br />
                have a ride for wildlife trip!”
              </p>
              <h5 className="card-title">Edware</h5>
              <h6 className="card-subtitle mb-2 text-muted">Founder Circle</h6>
            </div>
            <div className="col-sm col-md-5 testimonial-rate-image">
              <img
                src={testimonialPicture}
                className="testimonial-picture"
                alt="founder"
              />
              <div>
                <img
                  src={circleTestimonial}
                  className="xplus"
                  alt="icon-xplus"
                />
              </div>
              <div>
                <img
                  src={plusTestimonialPicture}
                  className="bg-circle"
                  alt="bg-circle"
                />
              </div>
              <div className="testimonial-button">
                <button
                  type="button"
                  className="btn btn-lg btn-outline-secondary prev-testimonial-button"
                >
                  <i className="bi bi-arrow-left-circle testimonial-icon"></i>
                </button>
                <button
                  type="button"
                  className="btn btn-lg btn-outline-dark next-testimonial-button"
                >
                  <i className="bi bi-arrow-right-circle testimonial-icon"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        </div>
    )
}

export default Testimonial;
