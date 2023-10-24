const startButton = document.getElementById("start");
const nextButton = document.getElementById("next");
const quizContainer = document.getElementById("quiz");
const questionElement = document.getElementById("question");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");
const counterElement = document.getElementById("counter");
const timeGauge = document.getElementById("timer");
const scoreDiv = document.getElementById("scoreContainer");
const finalScore = document.getElementById("finalScore");
const progress = document.getElementById("progress");

const questions = [
    {
        question: "What is the primary purpose of JavaScript?",
        choices: ["A. To create and style web pages", "B. To enhance the performance of web servers", "C. To add interactivity and behavior to web pages", "D. To store and retrieve data from databases"],
        correct: "C",
    },
    {
        question: "What does the typeof operator return when used with a function?'?",
        choices: ["A. function", "B. object", "C. undefined", "D. string"],
        correct: "A",
    },
    {
        question: "Which keyword is used to declare a variable in JavaScript, which can be accessed globally?",
        choices: ["A. let", "B. var", "C. const", "D. global"],
        correct: "B",
    },
    {
        question: "What is the purpose of the addEventListener method in JavaScript?",
        choices: ["A. To perform mathematical operations", "B. To add an event handler function to an HTML element", "C. To create a new element in the DOM", "D. To retrieve data from a server"],
        correct: "B",
    },
    
];

let currentQuestionIndex = 0;
let timeLeft = 60; // Initial time in seconds
let score = 0;

startButton.addEventListener("click", startQuiz);
nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    renderQuestion();
    nextButton.style.display = "none";
});

function startQuiz() {
    startButton.style.display = "none";
    quizContainer.style.display = "block";
    setTime();
    renderQuestion();
}

function setTime() {
    const timerInterval = setInterval(function () {
        timeLeft--;
        counterElement.textContent = "Time: " + timeLeft;

        if (timeLeft <= 0 || currentQuestionIndex >= questions.length) {
            clearInterval(timerInterval);
            endQuiz();
        }
    }, 1000);
}

function renderQuestion() {
    if (currentQuestionIndex < questions.length) {
        const currentQuestion = questions[currentQuestionIndex];
        questionElement.textContent = currentQuestion.question;

        for (let i = 0; i < choicesElements.length; i++) {
            choicesElements[i].textContent = currentQuestion.choices[i];
        }

        nextButton.style.display = "block";
    } else {
        endQuiz();
    }
}

function checkAnswer(answer) {
    const currentQuestion = questions[currentQuestionIndex];
    if (answer === currentQuestion.correct) {
        score++;
    } else {
        timeLeft -= 10; // Penalize incorrect answer
    }
}

function endQuiz() {
    quizContainer.style.display = "none";
    finalScore.textContent = "YOUR FINAL SCORE IS: " + score;
    scoreDiv.style.display = "block";
}
