import { useState, useEffect } from "react";
import "./App.css";
const questions = {

  HTML: [
    
    ["HTML Full Form?", "Hyper Text Markup Language", "High Text"],

    ["<a> tag use?", "Link create", "Image"],

    ["Largest heading?", "<h1>", "<h6>"],

    ["Image tag?", "<img>", "<image>"],

    ["List tag?", "<ul>", "<ol>"],

    ["Form tag?", "<form>", "<formdata>"],

    ["Line break tag?", "<br>", "<lb>"],

    ["Table row tag?", "<tr>", "<td>"],

    ["Email input type?", "email", "text"],

    ["Comment syntax?", "<!-- -->", "//"],

  ],



  CSS: [

    ["CSS Full Form?", "Cascading Style Sheets", "Color"],

    ["Color property?", "color", "font-color"],

    ["ID selector symbol?", "#", "."],

    ["Class selector?", ".", "#"],

    ["Background color?", "background-color", "bg"],

    ["Font size property?", "font-size", "text-size"],

    ["Inside space?", "padding", "margin"],

    ["Outside space?", "margin", "padding"],

    ["Flexbox use?", "Layout design", "Color"],

    ["Rounded corners?", "border-radius", "round"],

  ],



  "Node.js": [

    ["Node.js is?", "JS Runtime", "Framework"],

    ["Node.js engine?", "V8", "Chrome"],

    ["Start project?", "npm init -y", "npm create"],

    ["Install Express?", "npm i express", "npm get"],

    ["Run file?", "node server.js", "run server"],

    ["fs module?", "File System", "Fast Server"],

    ["Port means?", "Gate number", "File name"],

    ["require() use?", "Module import", "Styling"],

    ["npm Full Form?", "Node Package Manager", "New Package"],

    ["app.listen() use?", "Start server", "Close file"],

  ],



  "React.js": [

    ["React is?", "UI Library", "Language"],

    ["React made by?", "Facebook", "Google"],

    ["JSX means?", "JS XML", "JS Syntax"],

    ["State Hook?", "useState", "useData"],

    ["Props are?", "Read-only", "Editable"],

    ["useEffect for?", "Side effects", "Styling"],

    ["Component is?", "Reusable UI", "Database"],

    ["Key prop use?", "Identify list", "Style list"],

    ["Virtual DOM?", "Fast updates", "Storage"],

    ["Create React app?", "npx create-react-app", "npm react"],

  ],

};



function App() {

  const [name, setName] = useState("");

  const [loggedIn, setLoggedIn] = useState(false);

  const [subject, setSubject] = useState("");

  const [questionNo, setQuestionNo] = useState(0);

  const [score, setScore] = useState(0);

  const [selected, setSelected] = useState(null);

  const [timer, setTimer] = useState(15);

  const [completed, setCompleted] = useState(false);



  useEffect(() => {

    if (!subject || completed) return;



    setTimer(15);



    const interval = setInterval(() => {

      setTimer((old) => {

        if (old <= 1) {

          clearInterval(interval);

          nextQuestion();

          return 15;

        }

        return old - 1;

      });

    }, 1000);



    return () => clearInterval(interval);

  }, [subject, questionNo, completed]);



  const startQuiz = (sub) => {

    setSubject(sub);

    setQuestionNo(0);

    setScore(0);

    setSelected(null);

    setCompleted(false);

  };



  const nextQuestion = () => {

    const current = questions[subject][questionNo];



    if (selected === 0) {

      setScore((old) => old + 1);

    }



    if (questionNo === 9) {

      let finalScore = score;



      if (selected === 0) {

        finalScore = score + 1;

      }



      setScore(finalScore);

      setCompleted(true);

      return;

    }



    setQuestionNo((old) => old + 1);

    setSelected(null);

    setTimer(15);

  };



  const restart = () => {

    setName("");

    setLoggedIn(false);

    setSubject("");

    setQuestionNo(0);

    setScore(0);

    setSelected(null);

    setCompleted(false);

  };



  return (

    <div className="page">

      <div className="quiz-box">



        <h1>SSO QUIZ APP</h1>



        {loggedIn && (

          <h2 className="welcome">Welcome {name}!</h2>

        )}





        {!loggedIn && (

          <div>

            <input

              type="text"

              placeholder="Enter Your Name"

              val

              ue={name}

              onChange={(e) => setName(e.target.value)}

            />



            <br/><br/>



            <button

              className="login"

              onClick={() => {

                if (!name.trim()) {

                  alert("Name Enter Chey");

                  return;

                }

                setLoggedIn(true);

              }}

            >

              LOGIN

            </button>

          </div>

        )}



        {/* SUBJECT*/ }

        {loggedIn && !subject && (

          <div>

            <h2>Select Subject (10Q Each)</h2>



            <button onClick={() => startQuiz("HTML")}>

              HTML - 10

            </button>



            <button onClick={() => startQuiz("CSS")}>

              CSS - 10

            </button>



            <button onClick={() => startQuiz("Node.js")}>

              Node.js - 10

            </button>



            <button onClick={() => startQuiz("React.js")}>

              React.js - 10

            </button>

          </div>

        )}



        {/*QUIZ*/}

        {subject &&

           !completed && (

          <div className="quiz">



            <div className="question-header">

              <h3>

                Q{questionNo + 1}/10:{" "}

                {questions[subject][questionNo][0]}

              </h3>



              <div className="timer">

                {timer}

              </div>

            </div>



            <div className="options">



              <label>

                <input

                  type="radio"

                  name="answer"

                  checked={selected === 0}

                  onChange={() => setSelected(0)}

                />

                {questions[subject][questionNo][1]}

              </label>



              <label>

                <input

                  type="radio"

                  name="answer"

                  checked={selected === 1}

                  onChange={() => setSelected(1)}

                />

                {questions[subject][questionNo][2]}

              </label>



            </div>



            <button

              className="next"

              onClick={nextQuestion}

            >

              NEXT

            </button>



            <span className="score">

              Score: {score}

            </span>

          </div>

        )}



        {/* RESULT */}

        {completed && (

          <div>

            <h2 className="completed">Completed!</h2>



            <h2>

              Final Score: {score}/10

            </h2>



            <h3>

              {name} - Well Done!

            </h3>



            <button

              className="login"

              onClick={restart}

            >

              Restart Quiz

            </button>

            </div>

        )}

          </div>

          </div>

        );

      }

      export default App;

  