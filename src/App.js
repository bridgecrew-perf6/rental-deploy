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
            {/* <Route exact path='/login'
            render={(props) => {
              if (accessToken)
                return <Redirect from="/login" to="/" />;
              return <Login {...props} />;
            }}/>  */}
            <Route path="/forgotpassword" component={ForgotPassword} />
            <Route path="/signup" component={SignUp} />
            <Route path="/profile" component={Profile} />
            <Route path="/vehicle" component={Vehicle} />
            <Route path="/vehicle-type" component={VehicleType} />
            <Route path="/detail" component={Detail} />
            <Route
              path="/payreservation"
              render={(routeProps) => {
                if (!accessToken)
                  return <Redirect from="/payreservation" to="/login" />;
                return <ReservationComponent {...routeProps} />;
              }}
            />
            <Route path="/payment" component={Payment} />
            <Route path="/gopayment" component={ReservPayment} />
            <Route path="/chatmessage" component={ChatNav} />
            <Route path="/chat" component={ChatPage} />
            <Route path="/chatdetail" component={ChatDetail} />
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
}

export default App;
