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
var timeInterval;

var questionPosition = 0;

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
    choices: [
      "Quotation marks",
      "Curly Brackets",
      "Parentheses",
      "Square Brackets",
    ],
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
  timeInterval = setInterval(function () {
    if (countDown <= 0) {
      endGame();
    } else {
      countDown -= 1;
      document.querySelector("#timer").innerHTML = "Timer: " + countDown;
    }
  }, 1000);
}

function showQuestion() {
  // var questionText;

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
  document.querySelector("#answer1").addEventListener("click", checkAnswer);
  document.querySelector("#answer2").addEventListener("click", checkAnswer);
  document.querySelector("#answer3").addEventListener("click", checkAnswer);
  document.querySelector("#answer4").addEventListener("click", checkAnswer);
}

function checkAnswer(event) {
  if (!questionAnswered == "button") return;
  var questionAnswered = this.textContent;
  var correctAnswer = questions[questionPosition].answerText;

  if (this.textContent !== correctAnswer) {
    if (countDown >= 15) {
      countDown -= 15;
      // console.log(answerText);
      document.querySelector("#wrong").classList.remove("hidden");
      document.querySelector("#correct").classList.add("hidden");
      questionDisplay++;
      questionPosition++;
      showNextQuestion();
    } else {
      endGame();
    }
  } else {
    // console.log("Correct!");
    document.querySelector("#correct").classList.remove("hidden");
    document.querySelector("#wrong").classList.add("hidden");
    questionDisplay++;
    questionPosition++;
    showNextQuestion();
  }
}

function showNextQuestion() {
  // for (var i = 0; i < questions.length; i++)

  if (questionPosition < questions.length) {
    showQuestion();
  } else {
    clearInterval(timeInterval);

    endGame();
  }
}

function endGame(event) {
  questionPosition = 0;

  document.querySelector("#question").classList.add("hidden");
  document.querySelector("#scoreCard").classList.remove("hidden");

  clearInterval(timeInterval);
  // saveUserInfo();
}

document.querySelector("#scoreCard").addEventListener("submit", saveUserInfo);

var userInputEl = document.querySelector("#fname");

function saveUserInfo(event) {
  event.preventDefault();
  var userName = userInputEl.value;
  var score = countDown;

  var nameScore = [
    {
      name: userName,
      score: score,
    },
  ];

  window.localStorage.setItem("nameScore", JSON.stringify(nameScore));
  location.href = "./score.html";
  // renderScore();
  // console.log(nameScore);
}

// function renderScore(event) {
//   event.preventDefault();
//   var scoreEl = document.querySelector("#score");
//   var userData = JSON.parse(localStorage.getItem("nameScore"));
//   var userDisplay = JSON.stringify("nameScore");
//   window.location.href = "./score.html";
//   if (userData !== null) {
//     scoreEl.textContent = `Your Score is: " + ${userDisplay}`;
//   } else {
//     return;
//   }

  
// }

//  var scoreEl = document.querySelector("#score");
//   scoreEl.textContent = `Your Score is: " + ${userDisplay}`;
// document.getElementById("player").innerHTML = userData.name
// document.getElementById("score").innerHTML = userData.score
// scoreEl.innerHTML = userData.score;
// creat an object
// tak whatever in ur local stogare //parse
// push new obj in ur array
// strinfigy
// move to ur high score page
//  console.log(nameScore);

// 

//var showNextQuestion = function (event) {
// event.preventDefault();
//}

//document.querySelector("#answer1").addEventListener("click",answerQuestion);
//document.querySelector("#answer2").addEventListener("click",answerQuestion);
//document.querySelector("#answer3").addEventListener("click",answerQuestion);
//document.querySelector("#answer4").addEventListener("click",answerQuestion);

// attach event listener to each answer button

// var questionContainer = document.querySelector("#question");

// questionContainer.addEventListener("click", function (event) {
//   var questionAnswered = event.target
//= event.target;

//   if (this.textContent !== questions[questionPosition].answerText) {
//     console.log(questions[questionPosition].answerText);
//     // console.log(this.textContent);

//     console.log(questionAnswered);
//     console.log(questionPosition);
//   }

//   var userAnswer = questionAnswered.dataset.textContent;

//   console.log(userAnswer);
//
// });

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
