import React from "react";
import Navigation from "./main/Nav";
import Footer from "./main/Footer";
import Header from "./main/Header";
import LoginComponent from "./login/Login";
import SignupComponent from "./login/Signup";
import Card from "./vehicle/Card";
import DetailVehicle from "./vehicle/Detail";
import ReservationComponent from "./vehicle/Reservation";
import ReservPayComp from "./vehicle/ReservPayComp";
import Testimonial from "./homeComponent/Testimonial";
import PopularHome from "./homeComponent/PopularHome";
import Bike from "./vehicelCategory/Bike";
import Cars from "./vehicelCategory/Cars";
import Motorbike from "./vehicelCategory/Motorbike";
import Navvisit from "./main/NavVisit";
import Vehiclepostcomponent from "./AdminPost/VehiclePostComponent";

const Layout = (props) => (
  <>
    {props.children}
    <Footer />
  </>
);

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
  PopularHome,
  Navvisit,
  ReservationComponent,
  ReservPayComp,
  Vehiclepostcomponent,
  Bike, Cars, Motorbike
};
