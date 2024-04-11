import React, { Children } from "react";
import {useState} from 'react'
import "./Root.css";

import HomePage from "../components/HomePage/HomePage";
import LoginPage from "../components/LoginPage/LoginPage";

export default function Root() {
  const [validUser, setValidUser] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let users = {
    anvar: { email: "anv.sult@gmail.com", pwd: "password" },
    john: { email: "john@gmail.com", pwd: "123" },
  };

  function validateUser() {
    for (const user in users) {
      if (users[user].email === email && users[user].pwd === password) {
        setValidUser(true);
        break;
      }
    }
  }

  if (!validUser) {
    return (
      <LoginPage
        prpEmail={email}
        prpSetEmail={setEmail}
        prpPassword={password}
        prpSetPassword={setPassword}
        prpValidate={validateUser} 
      />
    );
  } else {
    return (
      <HomePage/>
    );
  }
}
