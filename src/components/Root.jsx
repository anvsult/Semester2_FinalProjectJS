import React from "react";
import { useState } from "react";
import NavBar from "./NavBar";

import HomePage from "./HomePage";
import LoginPage from "./LoginPage";

export default function Root() {
  const [validUser, setValidUser] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validCred, setValidCred] = useState(true);
  const [page, setPage] = useState("");

  const users = {
    "anv.sult@gmail.com": ["Anvar", "password"],
    "john@gmail.com": ["John", "123"],
  };

  function validateUser() {
    if (email === "") {
      setValidCred(false);
    } else if (users[email][1] === password) {
      setValidUser(true);
      sessionStorage.setItem("userName", users[email][0]);
      sessionStorage.setItem("loggedIn", true);
    } else {
      setValidCred(false);
    }
  }

  if (validUser || sessionStorage.getItem("loggedIn") === "true") {
    return (
      <>
        <NavBar></NavBar>
        <HomePage page={page} />
      </>
    );
  } else {
    return (
      <>
        <LoginPage
          prpSetEmail={setEmail}
          prpSetPassword={setPassword}
          prpValidate={validateUser}
          prpInvalidMessage={validCred ? " " : "Invalid credentials"}
        />
      </>
    );
  }
}
