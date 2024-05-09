import { useState } from "react";
import NavBar from "./NavBar";
import Questions from './Questions/QuestionL'

export default function Functions() {
  return (
    <>
    <div class="documentationPage">
      <div class="data">
        <h1>Loops in Python</h1>

        <p>
          In Python, loops are used to iterate over a sequence of elements or to
          execute a block of code repeatedly until a certain condition is met.
        </p>

        <h2>1. For Loop</h2>

        <p>
          The <code>for</code> loop in Python is used to iterate over a sequence
          (such as a list, tuple, string, or range) or any other iterable
          object. The syntax for a <code>for</code> loop is:
        </p>

        <pre>
          <code>
            for variable in sequence: # Code block to be executed # Indented by
            four spaces (or a tab)
          </code>
        </pre>

        <h3>Example:</h3>

        <pre>
          <code>
            fruits = ['apple', 'banana', 'cherry'] for fruit in fruits:
            print(fruit)
          </code>
        </pre>

        <h2>2. While Loop</h2>

        <p>
          The <code>while</code> loop in Python is used to execute a block of
          code repeatedly as long as a specified condition is true. The syntax
          for a <code>while</code> loop is:
        </p>

        <pre>
          <code>
            while condition: # Code block to be executed # Indented by four
            spaces (or a tab)
          </code>
        </pre>

        <h3>Example:</h3>

        <pre>
          <code>i = 1 while i = 5: print(i) i += 1</code>
        </pre>

        <h2>Loop Control Statements</h2>

        <p>
          Python provides several loop control statements that allow you to
          control the flow of loops:
        </p>

        <ul>
          <li>
            <strong>break:</strong> Terminates the loop prematurely.
          </li>
          <li>
            <strong>continue:</strong> Skips the rest of the current iteration
            and continues with the next iteration of the loop.
          </li>
          <li>
            <strong>pass:</strong> Does nothing and acts as a placeholder for
            code that will be added later.
          </li>
        </ul>

        <h3>Example:</h3>

        <pre>
          <code>for i in range(1, 10): if i == 5: break print(i)</code>
        </pre>

        <p>
          This code will print numbers from 1 to 4 and then terminate the loop
          when <code>i</code> becomes 5.
        </p>
      </div>
    </div>
    <Questions />
    </>
  );
}
