import React from "react";
import logo from "../assets/pylearnLogo.png";
// import 'bootstrap/dist/css/bootstrap.min.css';
import PagePythonDataTypes from './PagePythonDataTypes';
import PagePythonFunctions from './PagePythonFunctions';
import PagePythonLoops from './PagePythonLoops';
import Quiz from './Quiz'

export default function Home() {
  
  const developers = ["Ilian Eliakim Adeleke", "Anvar Sultanov", "Isaac Nachate"];

  function getPage(){

    switch (sessionStorage.getItem('page')){
      case 'functions': return <PagePythonFunctions />;
      case 'loops': return <PagePythonLoops />;
      case 'datatypes': return <PagePythonDataTypes />;
      case 'quiz': return <Quiz />;
      default: return (
        <div className="documentationPage">
        <h1>Welcome to PyLearn</h1>
        <p>
          PyLearn is a free online resource for learning Python programming. We
          provide tutorials, examples, and exercises to help you learn Python
          from scratch. Whether you are a beginner or an experienced programmer,
          PyLearn has something for everyone.
        </p>
        <h2>PyLearn is made by</h2>
        <ul>
          {developers.map((developer) => (
            <li key={developer}>{developer}</li>
          ))}
        </ul>
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
