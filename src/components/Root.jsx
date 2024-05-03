import React from "react";
import { useState } from "react";
import NavBar from "./NavBar";

import HomePage from "./HomePage";
import LoginPage from "./LoginPage";

export default function Root() {
  const [validUser, setValidUser] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const users = {
    "anv.sult@gmail.com": ["Anvar", "password"],
    "john@gmail.com": ["John", "123"],
  };

  function validateUser() {
    if (users[email][1] === password) {
      setValidUser(true);
      sessionStorage.setItem("userName", users[email][0]);
      sessionStorage.setItem("loggedIn", true);
    } else {
      alert("Invalid credentials");
    }
  }

  if (validUser || sessionStorage.getItem("loggedIn") === "true") {
    return (
      <>
        <NavBar setValid={setValidUser}></NavBar>
        <HomePage className="homePage" />
      </>
    );
  } else {
    return (
      <>
        <LoginPage
          prpSetEmail={setEmail}
          prpSetPassword={setPassword}
          prpValidate={validateUser}
        />
      </>
    );
  }
}
