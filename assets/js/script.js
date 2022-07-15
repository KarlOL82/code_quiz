var countDown = 60;
var timeDisplay = document.getElementById("timer");
var score = 0;
var startButton = document.getElementById("#startButton");
var questionPosition = 0;
var questionDisplay = document.getElementById("questionText");
var btn1 = document.getElementById("answer1");
var btn1 = document.getElementById("answer2");
var btn1 = document.getElementById("answer3");
var btn1 = document.getElementById("answer4");
var timeInterval ;
//var correctAnswer = questions[questionPosition].answerText;

var questions = [
  {
    questionText: "Which of the following is NOT a data type in Javascript?",
    choices: ["Boolean", "String", "Undefined", "Number"],
    answerText: "Undefined",
  },

  {
    questionText:
      "What is the correct HTML element to place Javascript code inside of?",
    choices: ["<script>", "<div>", "<js>", "<Body>"],
    answerText: "<script>",
  },

  {
    questionText: "What punctutation does an array go inside of",
    choices: ["Quotation marks", "Curly Brackets", "Parentheses", "Square Brackets",],
    answerText: "Square Brackets",
  },

  {
    questionText: "Which is the correct extension for a Javascript file?",
    choices: [".js", ".java", ".jscript", ".script"],
    answerText: ".js",
  },

  {
    questionText:
      "What index position is assigned to the first item in an array?",
    choices: ["1", "x", "i", "0"],
    answerText: "0",
  },
];
var currentQuestion = questions[questionPosition];
document.querySelector("#startButton").addEventListener("click", startGame);

function startGame() {
    questionPosition = 0;
  startTimer();
  document.querySelector(".intro").classList.add("hidden");
  document.querySelector("#question").classList.remove("hidden");
  showQuestion();
}

function startTimer() {
  timeInterval= setInterval(function () {
    if (countDown <= 0) {
      endGame();
    } else {
      countDown -= 1;
      document.querySelector("#timer").innerHTML = countDown;
    }
  }, 1000);
}

function showQuestion() {
  document.querySelector("#questionText").textContent =
    questions[questionPosition].questionText;
  document.querySelector("#answer1").textContent =
    questions[questionPosition].choices[0];
  document.querySelector("#answer2").textContent =
    questions[questionPosition].choices[1];
  document.querySelector("#answer3").textContent =
    questions[questionPosition].choices[2];
  document.querySelector("#answer4").textContent =
    questions[questionPosition].choices[3];
    document.querySelector("#answer1").addEventListener("click",checkAnswer)
    document.querySelector("#answer2").addEventListener("click",checkAnswer)
    document.querySelector("#answer3").addEventListener("click",checkAnswer)
    document.querySelector("#answer4").addEventListener("click",checkAnswer)
}

function checkAnswer(){
    console.log(this.textContent );
    if (this.textContent !== questions[questionPosition].answerText) {
        console.log("wrong");
    }
}
function showNextQuestion() {
  //for (var i = 0; i < questions.length; i++)
  if (questions.length <= 5) {
    questionDisplay++;
    questionPosition++;
    //console.log(questions[questionPosition].questionText);
    showQuestion();
  } else {
    endGame();
  }
}

//var showNextQuestion = function (event) {
// event.preventDefault();
//}

//document.querySelector("#answer1").addEventListener("click",answerQuestion);
//document.querySelector("#answer2").addEventListener("click",answerQuestion);
//document.querySelector("#answer3").addEventListener("click",answerQuestion);
//document.querySelector("#answer4").addEventListener("click",answerQuestion);

// attach event listener to each answer button

var questionContainer = document.querySelector("#question");

questionContainer.addEventListener("click", function (event) {
  
  var questionAnswered = event.target;
  
  if (!questionAnswered.matches("button")) return;

  if (this.textContent !== questions[questionPosition].answerText) {
    console.log(questions[questionPosition].answerText);
    console.log(this.textContent);
    countDown -= 15;
    console.log(questionAnswered);
    console.log(questionPosition);
  }

  var userAnswer = questionAnswered.dataset.index;

  console.log(userAnswer);
  showNextQuestion();
});

function endGame() {
    questionPosition = 0;
  clearInterval(timeInterval);
  var score = countDown;
  location.href = "./score.html";
  document.querySelector("#score").textContent = score;
  console.log("#score");
}

//function answerQuestion() {

//var questionAnswered = this.getAttribute("data-index");
//var userAnswer = questionAnswered.dataset.index;
//};

// grab text from element "event.target.textContent"

// stringify name and scorekey/value (score = )
//var data = [
//   {initials:"Initials", score:"Score"}
//]

//localStorage.getItem(data)
