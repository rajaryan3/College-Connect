import React, { useState } from "react";
import axios from "axios";
import "../styles/Login.css";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [userObj, setUserObj] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = async(e) => {
    e.preventDefault();
    // console.log(email);
    // console.log(password);

    const obj = {
      mail: email,
      password: password,
    };

    console.log(obj);

    try {
      const response = await axios.post("http://localhost:8000/login", obj, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.data.status === true) {
        setIsLoggedIn(true);
        // console.log(response.data.user);
        sessionStorage.setItem("curr_user", JSON.stringify(response.data.user));
        // document.getElementById('loginDocId').style.display = "none";
        // document.getElementById("registerDocId").style.display = "none";

        window.location.href = 'http://localhost:3000';
      } else {
        alert(response.data.errorMessage);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Fill correct credentials!");
    }
  }

  if (isLoggedIn) {
    return null;
  }

  return (
    <>
      <div className="container-login">
        <h1 className="heading">Welcome to College Connect</h1>

        <form className="form-login" onSubmit={handleSubmit}>
          <h1>Login</h1>

          <label htmlFor="email"></label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="College Email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="password"></label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {/* <span>Forgot Password</span> */}
          <button className="bluebutton" type="submit">
            Login
          </button>
          <a
            href="http://localhost:3000/register"
            style={{ textAlign: "center", textDecoration: "none" }}
            className="bluebutton"
          >
            Don't have an account? Register Here.
          </a>
        </form>
      </div>
    </>
  );
};

export default Login;
