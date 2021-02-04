import React, {useEffect} from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import "react-app-polyfill/ie9";
import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";

function App(location) {
  const [{}, dispatch] = useStateValue();

 
  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);



  return (
    // BEM
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <title>Amazon Sign-In</title>
            <Login />
          </Route>

          <Route path="/checkout">
            <title>Amazon Checkout</title>
            <Header />
            <Checkout />
          </Route>

          <Route path="/">
            <title>Amazon.com Online Shopping Website</title>
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
