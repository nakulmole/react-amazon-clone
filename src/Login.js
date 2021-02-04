import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();

    if (email.length < 1) {
      alert("Enter your E-mail address to login..");
    } else if (password.length < 1) {
      alert("Enter your Password to login..");
    } else {
      auth
        .signInWithEmailAndPassword(email, password)
        .then((auth) => {
          history.push("/");
        })
        .catch((error) => alert(error.message));
    }
  };

  const register = (e) => {
    e.preventDefault();
    if (email.length < 1) {
      alert("Enter your E-mail address to create your account.");
    } else if (password.length < 1) {
      alert("Enter your Password address to create your account.");
    } else {
      auth
        .createUserWithEmailAndPassword(email, password)
        .then((auth) => {
          // it successfully created a new user with email and password
          if (auth) {
            history.push("/");
          }
        })
        .catch((error) => alert(error.message));
    }
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="//upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/175px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>

      <div className="login__container">
        <h1>Sign-In</h1>
        <form>
          <h5>Email</h5>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="login__signInButton"
            onClick={signIn}
          >
            Sign In
          </button>
        </form>
        <p>
          By Signing In, You agree to Amazon Fake Clone's Conditions of Use and
          Privacy Notice.
        </p>
      </div>
      <hr className="login__horLine" />
      <div class="login__newToAmzn">
        <span>New to Amazon?</span>
      </div>
      <span className="login_regBtnSpan">
        <button onClick={register} className="login__registerButton">
          Create your Amazon account
        </button>
      </span>
    </div>
  );
}

export default Login;
