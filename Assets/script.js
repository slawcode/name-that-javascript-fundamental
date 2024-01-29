var startButton = document.querySelector(".start-button");
var timerElement = document.querySelector(".timer");

var questionsEl = document.querySelector("#questions");
var submitButton = document.querySelector(".submit-score-button");

prompt: 'How do we assign a value to a variable?',
options: [   
    "1. +",
    "2. =",
    "3. %",
    "4. @",
],
answer: "myFunction()",

/*  Question 2: What do primitive data types not include from the options available?
    A) Undefined
    B) String
    C) Number 
    D) True / Typeof

    Question 3: What can be used to store groups of data in a single variable?
    A) Arrays
    B) Iterations
    C) Methods
    D) Scope

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

var time = questions.length * 60;

functions startQuiz () {
    time = setInterval (
        clockTick,
        1000
    );
}