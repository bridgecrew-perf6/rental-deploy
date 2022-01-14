import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Home,
  Vehicle,
  Detail,
  Login,
  Profile,
  SignUp,
  VehicleType,
  ChatNav,
  Notfound,
  ForgotPassword,
  ReservationComponent,
  ReservPayment,
  ChatPage,
  ChatDetail,
  Payment,
  History,
} from "./pages";
// import { Footer } from "./components";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";

class App extends React.Component {
  state = {
    token: "",
  };

  componentDidMount() {
    const token = JSON.parse(localStorage.getItem("login-token"));
    if (!token) {
      return;
    }
    this.setState({
      token,
    });
  }
  render() {
    const accessToken = JSON.parse(localStorage.getItem("login-token"));
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route
              exact
              path="/login"
              render={() => {
                return <Login />;
              }}
            />
            <Route path="/forgot-password" component={ForgotPassword} />
            <Route path="/signup" component={SignUp} />
            <Route path="/profile" component={Profile} />
            <Route exact path="/vehicle" component={Vehicle} />
            <Route path="/vehicle-all" component={VehicleType} />
            <Route path="/vehicle-detail" component={Detail} />
            <Route
              path="/pay-reservation"
              render={(routeProps) => {
                if (!accessToken)
                  return <Redirect from="/pay-reservation" to="/login" />;
                return <ReservationComponent {...routeProps} />;
              }}
            />
            <Route path="/go-payment" component={ReservPayment} />
            <Route path="/payment" component={Payment} />
            <Route path="/chat-message" component={ChatNav} />
            <Route path="/chat" component={ChatPage} />
            <Route path="/chat-detail" component={ChatDetail} />
            <Route path="/history" component={History} />
            <Route
            exact
              path="/"
              render={(props) => {;
                return <Home {...props} />;
              }}
            />
            <Route path="*" component={Notfound} />
          </Switch>
          {/* <Footer /> */}
        </Router>
      </Provider>
    );
  }
  // {/* <Route exact path='/login'
  // render={(props) => {
  //   if (accessToken)
  //   return <Redirect from="/login" to="/" />;
  //   return <Login {...props} />;
  // }}/>  */}
}


export default App;

