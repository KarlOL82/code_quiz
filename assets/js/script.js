var timeEl = document.querySelector("#timer");
var countDown = 0;

var score = 0;

var questionPosition = 0;


var questions = [
  { q: "Which of the following is not a data type in Javascript?",
    choices: ["1. Boolean", "2. String", "3. Undefined", "4. Number"],
    a: "3. Undefined"
},

{   q: "What is the correct HTML element to place Javascript code inside of?",
    choices: ["1. <script>", "2. <div>", "3. <js>", "4. <Body>" ],
    a: "1. <script>",
},

{   q: "What punctutation does an array go inside of",
    choices: ["1. Quotation marks", "2. Curly Brackets", "3. Parentheses", "4. Square Brackets"],
    a: "4. Square Brackets"
},

{   q: "Which is the correct extension for a Javascript file?",
    choices: ["1. .js", "2. .java", "3. .jscript", "4. .script"],
    a: "1. .js"
},

{   q: "What index position is assigned to the first item in an array?",
    choices: ["1. 1", "2. x", "3. i", "4. 0"],
    a: "4. 0"
},
]
var currentQuestion = questions[questionPosition];



function startGame() {
    startTimer();
   document.querySelector(".intro").classList.add("hidden");
   document.querySelector("#question").classList.remove("hidden");
    writeAnswer();
}


 function startTimer() {

 }

function writeAnswer() {
  document.querySelector("#questionText").textContent = questions[0].q;
  document.querySelector("#answer1").textContent = questions[questionPosition].choices[0];
  document.querySelector("#answer2").textContent = questions[questionPosition].choices[1];
  document.querySelector("#answer3").textContent = questions[questionPosition].choices[2];
  document.querySelector("#answer4").textContent = questions[questionPosition].choices[3];
}

// function add event listener to each question 
// grab text from element "event.target.textContent"

document.querySelector("#startButton").addEventListener("click",startGame);
