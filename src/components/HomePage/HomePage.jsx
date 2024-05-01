import React from "react";
import NavBar from "../navBar/NavBar";
import logo from "../../assets/pylearnLogo.png";

export default function Home() {

  return (
    <div className="home-page">
      <NavBar />
      <header>
        <img src={logo} alt="Website Logo" className="logo" />
        <h1>Welcome to My Website!</h1>
      </header>

      <main>
        <p>This is a simple React home page component.</p>
      </main>
    </div>
  );
}
