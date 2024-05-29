// DOM elements
var startButton = document.querySelector(".startButton");
var timerElement = document.querySelector(".timer");
var questionsEl = document.querySelector("#questions");
var submitButton = document.querySelector(".submit-score-button");
var quizBox = document.querySelector(".quizBox");
// var questions
var answerOptions = document.querySelector(".answerButtons");
var score = document.querySelector("#score");
var result = document.querySelector("#result");

var wins = 0;
var timer;
var timerCount;
// Set the current index for quiz questions to zero
var currentQuestionIndex = 0;

// Create buttons and append 
var option1 = document.createElement("button");
var option2 = document.createElement("button");
var option3 = document.createElement("button");
var option4 = document.createElement("button");

option1.classList.add("btn");
option2.classList.add("btn");
option3.classList.add("btn");
option4.classList.add("btn");

answerOptions.appendChild(option1);
answerOptions.appendChild(option2);
answerOptions.appendChild(option3);
answerOptions.appendChild(option4);

// Questions variable created which is an array of all questions and their answer
var questions = [
{question: 'How do we assign a value to a variable?',
 choice1: '+',
 choice2: '=',
 choice3: '%',
 choice4: '@',
 answer: '='
},
{question: 'What do primitive data types NOT include from the options available?',
 choice1: 'Undefined',
 choice2: 'String',
 choice3: 'Number',
 choice4: 'True',
 answer: 'True'
},
{question: 'What can be used to store groups of data in a single variable?',
 choice1: 'Arrays',
 choice2: 'Iterations',
 choice3: 'Methods',
 choice4: 'Scope',
 answer: "Arrays"
},
{question: 'How do you write a strict equality operator?',
 choice1: '===',
 choice2: '==',
 choice3: '&&',
 choice4: '||',
 answer: '==='
},
{question: 'Which is NOT true of console.log in JavaScript?',
 choice1: 'It is a built in function that allows you to output messages to the console.',
 choice2: 'It is a built in function that allows you to output values to the console.',
 choice3: 'It is commonly used for debugging.',
 choice4: 'It is used to print "Hello World!" to the console.',
 answer: 'It is used to print "Hello World!" to the console.'
}
];

var time = questions.length * 60;

function startGame() {
    isWin = false;
    timerCount = 60;
    // Prevents start button from being clicked when round is in progress
    startButton.disabled = true;
    // renderBlanks()
    startTimer()
    // questions()
    getQuestion();
}

// Function created to start timer 
function startTimer() {
    // Sets the timer
    timer = setInterval(function() {
        timerCount--;
        timerElement.textContent = timerCount;
        if (timerCount >= 0) {
            //Tests if win condition is met 
            if (isWin && timerCount > 0) {
                //Clears interval and stops timer 
                clearInterval(timer);
                winGame();
            }
        }
        //Tests if time has run out
        if (timerCount === 0) {
            // Clears interval
            clearInterval(timer);
            // loseGame();
            quizEnd();
        }
    }, 1000);
}

function quizEnd() {
    $("#questions").hide();

    if (questions[currentQuestionIndex] === 5 || time ===0) {
        clearInterval(timer); 
        showScore(); 
    }
}
function loseGame() {
    timerElement.textContent = "Game over!";
    loseCounter++
    startButton.disabled = false;
}
// Attach event listener to start button to call startGame function on click
startButton.addEventListener("click", startGame);

// Function to go through all the quiz questions
function getQuestion() {
   var currentQuestion = questions[currentQuestionIndex];
   
//    var titleEl = document.getElementsByClass(".quixBox");
//    titleEl.textContent = currentQuestion.title;
   
   quizBox.textContent = currentQuestion.question;

   // Make answer buttons visible, add text content and click event 
   answerOptions.classList.remove("visibility");

   option1.textContent = currentQuestion.choice1;
   option2.textContent = currentQuestion.choice2;
   option3.textContent = currentQuestion.choice3;
   option4.textContent = currentQuestion.choice4;
   
   option1.addEventListener("click", selectOption);
   option2.addEventListener("click", selectOption); 
   option3.addEventListener("click", selectOption);
   option4.addEventListener("click", selectOption);
}

function selectOption(event) {
    console.log("Is this quiz working?");
    var clicked = event.currentTarget.textContent;

    if (clicked === currentQuestionIndex.answer) {
        result.textContent = "That's correct!";
        wins++;
        score.textContent = "Score: " + wins;
    }
    else {
        result.textContent = "Incorrect";
        // getQuestion()
    } // Once all questions have been looped through end the game
    if (currentQuestionIndex === questions.length -1) {
        timeLeft = 0
    }
    else {
        currentQuestionIndex++
        getQuestion();
    }
}

//Display question and answer buttons
// var displayQuestion = function(index) {
//     questionEl.innerText = index.question
//     for (var i = 0; i < index.choices.length; i++) {
//         var answerbutton = document.createElement("button")
//         answerbutton.innerText = index.choices[i].choice
//         answerbutton.classList.add("btn")
//         answerbutton.classList.add("answerbtn")
//         answerbutton.addEventListener("click", answerCheck)
//         answerbuttonsEl.appendChild(answerbutton)
//     }
// };

//    var promptEL =
//    document.getElementbyClass ("question-words");
//    questionsEl.textContent = 
// //    currentQuestion.prompt; 
// //    choicesEl.innerHTML = ""; 
//    currentQuestion.options.forEach( 
//    function (choice, i) { 
//    let choiceBtn = 
//    document.createElement("button"); 
// })
// }




// Create a Quiz App with Timer, 2023