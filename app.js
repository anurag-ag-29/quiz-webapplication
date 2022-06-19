// CREATE A QUIZ CLASS
class Quiz {
    constructor(questions) {
        this.score = 0;
        this.questions = questions;
        this.questionIndex = 0;
    }

    getQuestionIndex() {
        return this.questions[this.questionIndex];
    }

    guess(answer) {
        if (this.getQuestionIndex().isCorrectAnswer(answer)) {
            this.score++;
        }
        this.questionIndex++;
    }

    isEnded() {
        return this.questionIndex === this.questions.length;
    }
}

// Create a question Class
class Question {
    constructor(text, choices, answer) {
        this.text = text;
        this.choices = choices;
        this.answer = answer;
    }

    isCorrectAnswer(choice) {
        return this.answer === choice;
    }
}

// NOW DISPLAY THE QUESTIONS
function displayQuestion() {
    if (quiz.isEnded()) {
        showScores();
    } else {
        // show question
        let questionElement = document.getElementById("question");
        questionElement.innerHTML = quiz.getQuestionIndex().text;

        // show options
        let choices = quiz.getQuestionIndex().choices;
        for (let i = 0; i < choices.length; i++) {
            let choiceElement = document.getElementById("choice" + i);
            choiceElement.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();
    }
};

// GUESS ANSWER
function guess(id, guess) {
    let button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        displayQuestion();
    }
};

// SHOW QUIZ PROGRESS
function showProgress() {
    let currentQuestionNumber = quiz.questionIndex + 1;
    let ProgressElement = document.getElementById("progress");
    ProgressElement.innerHTML =
        `Question ${currentQuestionNumber} of ${quiz.questions.length}`;
};

// SHOW SCORES
function showScores() {
    let quizEndHTML =
        `
    <h1>Quiz Completed</h1>
    <h2 id='score'> Your scored: ${quiz.score} of ${quiz.questions.length}</h2>
    <div class="quiz-repeat">
        <a href="index.html">Take Quiz Again</a>
    </div>
    `;
    let quizElement = document.getElementById("quiz");
    quizElement.innerHTML = quizEndHTML;
};

// create questions here
let questions = [
    new Question(
        "Hyper Text Markup Language Stands For?", ["JQuery", "XHTML", "CSS", "HTML"], "HTML"
    ),
    new Question(
        "Cascading Style sheet stands for?", ["HTML", "JQuery", "CSS", "XML"], "CSS"
    ),
    new Question(
        "Which is a JavaScript Framework?", ["React", "Laravel", "Django", "Sass"], "React"
    ),
    new Question(
        "Which is a backend language?", ["PHP", "HTML", "React", "All"], "PHP"
    ),
    new Question(
        "Which is best for Artificial intelligence?", ["React", "Laravel", "Python", "Sass"], "Python"
    ),
    new Question(
        "JavaScript is a ___ -side programming language.", ["Client", "Server", "Both", "None"], "Both"
    ),
    new Question(
        "Which of the following statements will show a message as well as ask for user input in a popup?", [" alert()", " prompt()", " confirm()", " message()"], " prompt()"
    ),
    new Question(
        "Which of the following is an event listener in JavaScript?", [" onclick", " blur", " click", " Click()"], " click"
    ),
    new Question(
        "Which of the following is the correct syntax to print a page using JavaScript?", ["  window.print();", " browser.print();", " navigator.print();", " document.print();"], "  window.print();"
    ),
    new Question(
        "Which of the following function of Array object returns a string representing the array and its elements?", ["toSource()", "sort()", "splice()", " toString()"], " toString()"
    ),
    new Question(
        "What keyword is used to check whether a given property is valid or not?", ["in", "is in", "exists", "lies"], "in"
    ),
    new Question(
        "When an operators value is NULL, the typeof returned by the unary operator is:", ["boolean", "undefined", "object", "integer"], "object"
    ),
    new Question(
        " What is the output of the following code snippet? \n print(NaN === NaN);", ["true", "undefined", "false", "error"], "false"
    ),
    new Question(
        " Which function is used to serialize an object into a JSON string in Javascript?", ["stringify()", "parse()", "convert()", "None of the above"], "stringify()"
    ),
    new Question(
        " Which of the following are closures in Javascript?", ["Variables", "Functions", "Objects", "All Of the above"], "All Of the above"
    ),
    new Question(
        " What keyword is used to declare an asynchronous function in Javascript?", ["async", "await", "setTimeout", "None Of the above"], "async"
    ),
    new Question(
        " How to stop an interval timer in Javascript?", ["clearInterval", "clearTimer", "intervalOver", "None Of the above"], "clearInterval"
    ),
    new Question(
        " Which object in Javascript doesn’t have a prototype?", ["Base Object", "All Objects have a prtotype", "None of the objects have a prototype", "None Of the above"], "Base Object"
    ),
    new Question(
        " Which of the following are not server-side Javascript objects?", ["Date", "FileUpload", "Function", "All Of the above"], "All Of the above"
    ),
    new Question(
        "What will be the output of the following code snippet? \n function test(...args) {\n console.log(typeof args);\n}\n test(12);", ["NaN", "Number", "Object", "Array"], "Object"
    )
];

// INITIALIZE quiz
let quiz = new Quiz(questions);

// display questions
displayQuestion();


// Add A CountDown for the Quiz
let time = 10;
let quizTimeInMinutes = time * 60 * 60;
let quizTime = quizTimeInMinutes / 60;

let counting = document.getElementById("count-down");

function startCountdown() {
    let quizTimer = setInterval(function() {
        if (quizTime <= 0) {
            clearInterval(quizTimer);
            showScores();
        } else {
            quizTime--;
            let sec = Math.floor(quizTime % 60);
            let min = Math.floor(quizTime / 60) % 60;
            counting.innerHTML = `TIME: ${min} : ${sec}`;
        }
    }, 1000);
}

startCountdown();