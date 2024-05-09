import { useState } from "react";
import NavBar from "./NavBar";
import Questions from './Questions/QuestionD'

export default function dataTypes() {
  return (
    <>
    <div class="documentationPage">
      <div class="data">
        <h1>Data Types in Python</h1>

        <p>
          Python is a dynamically typed language, which means that you don't
          have to declare the data type of a variable explicitly. Python
          automatically determines the data type based on the value assigned to
          the variable.
        </p>

        <h2>Some common data types in Python include:</h2>

        <ul>
          <li>
            <code>Integer:</code> Integers are whole numbers, such as 1, 10, -5,
            etc. In Python, integers are represented by the int class.
          </li>

          <li>
            <code>Float:</code> Floats represent real numbers and are written
            with a decimal point, such as 3.14, -0.001, etc. In Python, floats
            are represented by the float class.
          </li>

          <li>
            <code>String:</code> Strings represent sequences of characters
            enclosed within single quotes ('') or double quotes (""). For
            example, 'hello', "world", etc. In Python, strings are represented
            by the str class.
          </li>

          <li>
            <code>List:</code> Lists are ordered collections of items enclosed
            within square brackets ([]), separated by commas. Lists can contain
            elements of different data types. For example, [1, 2, 'three', 4.5],
            etc. In Python, lists are represented by the list class.
          </li>

          <li>
            <code>Dictionary:</code> Dictionaries are unordered collections of
            key-value pairs enclosed within curly braces ({}) and separated by
            commas. Each key-value pair maps the key to its corresponding value.
            For example, {"name : John, age : 30"}, etc. In Python, dictionaries
            are represented by the dict class.
          </li>

          <li>
            <code>Boolean:</code> Booleans represent truth values, True or
            False. In Python, booleans are represented by the bool class.
          </li>

          <li>
            <code>None:</code> None is a special data type in Python that
            represents the absence of a value or a null value. In Python, None
            is represented by the NoneType class.
          </li>
        </ul>

        <p>
          These are just some of the basic data types in Python. Python also
          supports more complex data types and data structures, such as tuples,
          sets, and objects.
        </p>
      </div>
    </div>
    <Questions />
    </>
  );
}
