import React from "react";
import Navigation from "./main/Nav";
import Footer from "./main/Footer";
import Header from "./main/Header";
import LoginComponent from "./login/Login";
import SignupComponent from "./login/Signup";
import Card from "./vehicle/Card";
import DetailVehicle from "./vehicle/Detail";
import Testimonial from "./homeComponent/Testimonial";
import PopularHome from "./homeComponent/PopularHome";

const Layout = (props) => <div>{props.children}</div>;

export {
  Layout,
  Header,
  Navigation,
  Footer,
  LoginComponent,
  SignupComponent,
  Card,
  DetailVehicle,
  Testimonial,
  PopularHome
};
