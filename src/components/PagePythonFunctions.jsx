import { useState } from "react";
import NavBar from "./NavBar";
import Questions from "./Questions/QuestionF";

export default function PagePythonFunctions() {
  return (
    <>
      <div className="documentationPage">
        <h1>Functions in Python</h1>

        <p>
          In Python, a function is a block of reusable code that performs a
          specific task. Functions provide a way to modularize code, making it
          easier to read, understand, and maintain.
        </p>

        <h2>Defining a Function</h2>

        <p>
          To define a function in Python, you use the <code>def</code> keyword
          followed by the function name and parentheses, optionally followed by
          parameters enclosed within the parentheses. The syntax for defining a
          function is as follows:
        </p>

        <pre>
          <code>
            {`
def function_name(parameters):
  # Function body
  # Code block
  # Indented by four spaces (or a tab)
  # Function logic goes here
`}
          </code>
        </pre>

        <h2>Calling a Function</h2>

        <p>
          To call or invoke a function in Python, you simply write the function
          name followed by parentheses, optionally passing arguments within the
          parentheses if the function expects parameters.
        </p>

        <pre>
          <code>function_name(arguments)</code>
        </pre>

        <h2>Return Statement</h2>

        <p>
          A function can return a value using the <code>return</code> statement.
          The <code>return</code> statement terminates the function and returns
          the specified value to the caller. If no <code>return</code> statement
          is encountered, the function returns <code>None</code> by default.
        </p>

        <h2>Function Examples</h2>

        <p>Here are some examples of functions in Python:</p>

        <pre>
          <code>
            {
`def add(x, y):
  return x + y

def greet(name):
  return "Hello, " + name + "!"

def is_even(num):
  if num % 2 == 0:
    return True
  else:
    return False

def factorial(n):
  if n == 0:
    return 1
  else:
    return n * factorial(n-1)
    
    `}
          </code>
        </pre>

        <p>
          These are just a few examples of functions in Python. Functions can be
          simple or complex, and they can accept zero or more parameters and
          return zero or more values.
        </p>
      </div>
      <Questions />
    </>
  );
}
