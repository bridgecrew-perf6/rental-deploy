import React, { Component } from "react";
import { Layout, Header } from "../../components";
import { Button, Form, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../style.css";

class ForgotPassword extends Component {
  render() {
    return (
      <Layout>
        <Header />
        <div className="main-child">
          <div className="justify-content-center wrapper">
            <Link to="/login">
              <Button className="btn-light btn-lg btn-block btn-back-content">
                <i className="bi bi-chevron-left"></i>Back
              </Button>
            </Link>
            <Col xs lg="10" className="m-auto">
              <h1 className="title-header-lg align-center mx-auto justify-content-center">
                Do’t worry, we got your back!
              </h1>
              <Form>
                <Col xs lg="6" className="mx-auto">
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control
                      className="form-control form-control-md sign-form"
                      type="email"
                      placeholder="Enter email"
                    />
                  </Form.Group>
                  <Form.Group>
                    <Button
                      variant="warning"
                      className="btn btn-warning btn-md btn-block btn-right yellow-color"
                    >
                      Send Link
                    </Button>
                  </Form.Group>
                  <Form.Text className="title-header-sm">
                    You will receive a link to reset your password. If you
                    haven’t received any link, click Resend Link
                  </Form.Text>
                </Col>
              </Form>
            </Col>
          </div>
        </div>
      </Layout>
    );
  }
}

export default ForgotPassword;
