

import React, { useState } from "react";
import Button from "react-bootstrap/Button";

const QuestionL = () => {
    const [question1, setQuestion1] = useState("");
    const [question2, setQuestion2] = useState("");
    const [question3, setQuestion3] = useState("");

    function handleSubmit() {
        const q1Element = document.getElementById("question1");
        const q2Element = document.getElementById("question2");

        const validQuestion1 = new RegExp(
            ':'
        )
        const validQuestion2 = new RegExp(
            'i'
        )

        q1Element.className = validQuestion1.test(question1) ? 'correct' : 'wrong';
        q2Element.className = validQuestion2.test(question2) ? 'correct' : 'wrong';
    }

    return (
        <div className="questions">
            <p>
                fruits = ['apple', 'banana', 'cherry'] <br/>
                &nbsp;&nbsp;for i in fruits
                {" "}
                <input
                    type="text"
                    id="question1"
                    style={{ width: "15px" }}
                    onChange={(e) => setQuestion1(e.target.value)}
                />{" "}<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;print(

                <input
                    type="text"
                    id="question2"
                    style={{ width: "15px" }}
                    onChange={(e) => setQuestion2(e.target.value)}
                />)  
            </p>

            <Button onClick={() => handleSubmit()}>Submit</Button>
        </div>
    );
};

export default QuestionL;
///////////////////////////Regex other version////////////////////
/*
import React, { useState, useEffect } from "react";
import '../../Question/Question.css'
import { data1 } from "../../../assets/data1";

const QuestionL = () => {
    const [index, setIndex] = useState(0);
    const [question, setQuestion] = useState(data1[index]);


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

export default QuestionL;*/

