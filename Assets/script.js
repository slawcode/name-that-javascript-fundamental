var startButton = document.querySelector(".start-button");
var timerElement = document.querySelector(".timer");

var questionsEl = document.querySelector("#questions");
var submitButton = document.querySelector(".submit-score-button");

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
{question: 'Properties are made up of key-value pairs. What are objects a collection of?',
 choice1: 'Arrays',
 choice2: 'Iterations',
 choice3: 'Methods',
 choice4: 'Scope',
 answer: 'Arrays'
},
/*  

    Question 4: Properties are made up of key-value pairs. What are objects a collection of?
    A) Variables
    B) Strings
    C) Properties / Key-value pairs 
    D) Console logs

    Question 5: What do we use/console.log to access a value stored in a variable?
    A) Typeof
    B) Value
    C) Variable's name
    D) Length
*/
}
];
var time = questions.length * 60;

functions startQuiz () {
    time = setInterval (
        clockTick,
        1000
    );
}
function get Question () {
    var currentQuestion =
    questions[currentQuestionIndex];
    var promptEL =
    document.getElementbyClass (
        "question-words"
    );
    promptEl.textContent = 
        currentQuestion.prompt; 
    choicesEl.innerHTML = ""; 
    currentQuestion.options.forEach( 
        function (choice, i) { 
            let choiceBtn = 
                document.createElement( 
                    "button"
                ); 
}
// (Create a Quiz App with Timer, 2023).