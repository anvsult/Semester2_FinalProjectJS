
import React, { useState } from "react";
import Button from "react-bootstrap/Button";

const QuestionF = () => {
    const [question1, setQuestion1] = useState("");
    const [question2, setQuestion2] = useState("");
    const [question3, setQuestion3] = useState("");

    function handleSubmit() {
        const q1Element = document.getElementById("question1");
        const q2Element = document.getElementById("question2");
        const q3Element = document.getElementById("question3");

        const validQuestion1 = new RegExp(
            '[Dd]ef'
        )
        const validQuestion2 = new RegExp(
            '[Rr]eturn'
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
            <p>
                1. To define a function in Python, use the{" "}
                <input
                    type="text"
                    id="question1"
                    style={{ width: "35px" }}
                    onChange={(e) => setQuestion1(e.target.value)}
                />{" "}
                keyword, followed by the function name and parentheses.{" "}
            </p>
            <p>
                2. Functions in Python return a value using the {" "}
                <input
                    type="text"
                    id="question2"
                    style={{ width: "50px" }}
                    onChange={(e) => setQuestion2(e.target.value)}
                />{" "}
                statement; if this statement is absent, the function returns {" "}

                <input
                    type="text"
                    id="question3"
                    style={{ width: "47px" }}
                    onChange={(e) => setQuestion3(e.target.value)}
                />{" "}
                by default
            </p>
            <Button onClick={() => handleSubmit()}>Submit</Button>
        </div>
    );
};

export default QuestionF;
/* ///////////////////////////Regex other version////////////////////

import React, { useState, useEffect } from "react";
import '../../Question/Question.css'
import { data1 } from "../../../assets/data1";

const QuestionF = () => {
    const [index, setIndex] = useState(2);
    const [question, setQuestion] = useState(data1[index]);
=
    const escapeRegExp = (string) => {
        return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); 
    };

    const checkAns = (field, e, ans) => {
        const regex = new RegExp(`^\\s*${escapeRegExp(question[field])}\\s*$`, 'i');
        if (regex.test(ans)) {
            e.target.classList.remove("wrong");
            e.target.classList.add("correct");
        } else {
            e.target.classList.add("wrong");
        }
    };

    return (
        <div className="container">
            <p>{question.question}<br />{question.question1} <br /> {question.question2}<br />
                1. <input type="text" onChange={(e) => checkAns('field1', e, e.target.value)} /> <br />
                2. <input type="text" onChange={(e) => checkAns('field2', e, e.target.value)} /><br />
                3. <input type="text" onChange={(e) => checkAns('field3', e, e.target.value)} />
            </p>
        </div>
    );
}

export default QuestionF;*/