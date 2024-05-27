// DOM elements
var startButton = document.querySelector(".startButton");
var timerElement = document.querySelector(".timer");

var questionsEl = document.querySelector("#questions");
var submitButton = document.querySelector(".submit-score-button");

// Questions variable created which is an array of all questions and their answer
var questions = [
{question1: 'How do we assign a value to a variable?',
 choice1: '+',
 choice2: '=',
 choice3: '%',
 choice4: '@',
 answer: '='
},
{question2: 'What do primitive data types NOT include from the options available?',
 choice1: 'Undefined',
 choice2: 'String',
 choice3: 'Number',
 choice4: 'True',
 answer: 'True'
},
{question3: 'What can be used to store groups of data in a single variable?',
 choice1: 'Arrays',
 choice2: 'Iterations',
 choice3: 'Methods',
 choice4: 'Scope',
 answer: "Arrays"
},
{question4: 'How do you write a strict equality operator?',
 choice1: '===',
 choice2: '==',
 choice3: '&&',
 choice4: '||',
 answer: '==='
},
{question5: 'Which is NOT true of console.log in JavaScript?',
 choice1: 'It is a built in function that allows you to output messages to the console.',
 choice2: 'It is a built in function that allows you to output values to the console.',
 choice3: 'It is commonly used for debugging.',
 choice4: 'It is used to print "Hello World!" to the console.',
 answer: 'It is used to print "Hello World!" to the console.'
}
];

var time = questions.length * 60;

// function startQuiz () {
//     time = setInterval (
//         clockTick,
//         1000
//     );
// }

function startGame() {
    isWin = false;
    timerCount = 10;
    // Prevents start button from being clicked when round is in progress
    startButton.disabled = true;
    renderBlanks()
    startTimer()
}

// Start the quiz when the 'Start Quiz' button is clicked
// startBtn.onclick = startQuiz;
// Attach event listener to start button to call startGame function on click
startButton.addEventListener("click", startGame);

// Calls init() so that it fires when page opened
init();

// function getQuestion () {
//    var currentQuestion = questions[currentQuestionIndex];
//     
//    var promptEL =
//    document.getElementbyClass ("question-words");
//    promptEl.textContent = 
//    currentQuestion.prompt; 
//    choicesEl.innerHTML = ""; 
//    currentQuestion.options.forEach( 
//    function (choice, i) { 
//    let choiceBtn = 
//    document.createElement("button"); 
// }




// Create a Quiz App with Timer, 2023