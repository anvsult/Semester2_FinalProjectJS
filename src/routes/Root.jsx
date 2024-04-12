import React from "react";
import { useState, useRef } from "react";
import "./Root.css";

import HomePage from "../components/homePage/HomePage";
import LoginPage from "../components/loginPage/LoginPage";

export default function Root() {
  const [validUser, setValidUser] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const users = {
    "anv.sult@gmail.com": {username: "anvar", password: "password"},
    "john@gmail.com": {username: "john", password: "123"}
  }

  function validateUser() {
    if (users[email].password === password){
      setValidUser(true);
    } else {
      alert("Invalid credentials")
    };
  }

  return (validUser ? <HomePage /> : <LoginPage
        prpSetEmail={setEmail}
        prpSetPassword={setPassword}
        prpValidate={validateUser}
      />);
}
