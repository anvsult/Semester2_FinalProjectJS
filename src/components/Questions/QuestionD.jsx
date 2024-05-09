import React, { useState } from "react";
import Button from "react-bootstrap/Button";

const QuestionD = () => {
  const [question1, setQuestion1] = useState("");
  const [question2, setQuestion2] = useState("");
  const [question3, setQuestion3] = useState("");

  function handleSubmit() {
    const q1Element = document.getElementById("question1");
    const q2Element = document.getElementById("question2");
    const q3Element = document.getElementById("question3");

    const validQuestion1 = new RegExp(
        '[Ii]nteger'
    )
    const validQuestion2 = new RegExp(
        '[Dd]ictionary'
    )
    const validQuestion3 = new RegExp(
        '[Nn]one'
    )
    
    q1Element.className = validQuestion1.test(question1) ? 'correct' : 'wrong';
    q2Element.className = validQuestion2.test(question2) ? 'correct' : 'wrong';
    q3Element.className = validQuestion3.test(question3) ? 'correct' : 'wrong';
  }

  return (
    <div className="questions">
        <h3>To consolidate</h3>
      <p>
        1. This data type represents whole numbers, such as 1, 10, -5, etc., and
        is represented by an {" "}
        <input
          type="text"
          id="question1"
          style={{ width: "60px" }}
          onChange={(e) => setQuestion1(e.target.value)}
        />{" "}
        in Python.{" "}
      </p>
      <p>
        2. A {" "}
        <input
          type="text"
          id="question2"
          style={{ width: "80px" }}
          onChange={(e) => setQuestion2(e.target.value)}
        />{" "}
        is an unordered collections of key-value pairs, where each key-value pair
        maps the key to its corresponding value.
      </p>
      <p>
        3.
        <input
          type="text"
          id="question3"
          style={{ width: "47px" }}
          onChange={(e) => setQuestion3(e.target.value)}
        />{" "}
        is a special data type in Python that represents the absence of a value
        or a null value.
      </p>

      <Button onClick={() => handleSubmit()}>Submit</Button>
    </div>
  );
};

export default QuestionD;
