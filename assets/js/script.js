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
      
      document.querySelector("#wrong").classList.remove("hidden");
      document.querySelector("#correct").classList.add("hidden");
      questionDisplay++;
      questionPosition++;
      showNextQuestion();
    } else {
      endGame();
    }
  } else {
    
    document.querySelector("#correct").classList.remove("hidden");
    document.querySelector("#wrong").classList.add("hidden");
    questionDisplay++;
    questionPosition++;
    showNextQuestion();
  }
}

function showNextQuestion() {
  

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
  
}

