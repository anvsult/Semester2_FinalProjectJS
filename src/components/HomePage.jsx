import React from "react";
import logo from "../assets/pylearnLogo.png";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {

  return (
    <div className="homePage">
      
      <header>
        <img src={logo} alt="Website Logo" className="logo" />
        <p className="h1 m">Welcome to My Website!</p>
      </header>

      <main>
        <p>This is a simple React home page component.</p>
      </main>
    </div>
  );
}
