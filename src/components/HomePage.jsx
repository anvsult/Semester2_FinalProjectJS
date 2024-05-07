import React from "react";
import logo from "../assets/pylearnLogo.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './NavBar';
import PagePythonDataTypes from './PagePythonDataTypes';
import PagePythonFunctions from './PagePythonFunctions';
import PagePythonLoops from './PagePythonLoops';

export default function Home() {

  function getPage(){
    if (sessionStorage.getItem("page") === "functions") {
      return <PagePythonFunctions />
    } else if (sessionStorage.getItem("page") === "loops") {
      return <PagePythonLoops />
    } else if (sessionStorage.getItem("page") === "datatypes") {
      return <PagePythonDataTypes />
    } else {
      return (
        <div className="documentationPage">
        <h1>Welcome to PyLearn</h1>
        <p>
          PyLearn is a free online resource for learning Python programming. We
          provide tutorials, examples, and exercises to help you learn Python
          from scratch. Whether you are a beginner or an experienced programmer,
          PyLearn has something for everyone.
        </p>
        </div>
      )
    }
  }
  
  return (
    <>
    <div className="homePage">
      
      <header>
        <img src={logo} alt="Website Logo" className="logo" />
      </header>

      <main>
        {getPage()}

      </main>
    </div>
    </>
  );
}
