
var countDown = 60;
var timeDisplay = document.getElementById("timer")
var score = 0;
var startButton = document.getElementById("#startButton");
var questionPosition = 0;
var questionDisplay = document.getElementById("questionText");
var btn1 = document.getElementById("answer1");
var btn1 = document.getElementById("answer2");
var btn1 = document.getElementById("answer3");
var btn1 = document.getElementById("answer4");
//var correctAnswer = questions[questionPosition].answerText;

var questions = [
{   questionText: "Which of the following is NOT a data type in Javascript?",
    choices: ["1. Boolean", "2. String", "3. Undefined", "4. Number"],
    answerText: "3. Undefined"
},

{   questionText: "What is the correct HTML element to place Javascript code inside of?",
    choices: ["1. <script>", "2. <div>", "3. <js>", "4. <Body>" ],
    answerText: "1. <script>",
},

{   questionText: "What punctutation does an array go inside of",
    choices: ["1. Quotation marks", "2. Curly Brackets", "3. Parentheses", "4. Square Brackets"],
    answerText: "4. Square Brackets"
},

{   questionText: "Which is the correct extension for a Javascript file?",
    choices: ["1. .js", "2. .java", "3. .jscript", "4. .script"],
    answerText: "1. .js"
},

{   questionText: "What index position is assigned to the first item in an array?",
    choices: ["1. 1", "2. x", "3. i", "4. 0"],
    answerText: "4. 0"
},
]
var currentQuestion = questions[questionPosition];
document.querySelector("#startButton").addEventListener("click",startGame);



function startGame() {
    startTimer();
    document.querySelector(".intro").classList.add("hidden");
    document.querySelector("#question").classList.remove("hidden");
    showQuestion();
    
}



function startTimer() {
    
    
     setInterval(function() {

        if (countDown <=0)  {
            endGame();
        } else {
            
            countDown -=1
            document.querySelector("#timer").innerHTML = countDown
        }   
    
    }, 1000)
};


function showQuestion() {
  document.querySelector("#questionText").textContent = questions[questionPosition].questionText;
  document.querySelector("#answer1").textContent = questions[questionPosition].choices[0];
  document.querySelector("#answer2").textContent = questions[questionPosition].choices[1];
  document.querySelector("#answer3").textContent = questions[questionPosition].choices[2];
  document.querySelector("#answer4").textContent = questions[questionPosition].choices[3];
};

function showNextQuestion() {
    //for (var i = 0; i < questions.length; i++) {
    if (questions[questionPosition].length < 5) {
    questionDisplay++;
    questionPosition++;
    //console.log(questions[questionPosition].questionText); 
    showQuestion();
    } //else endGame()
    
};

//var showNextQuestion = function (event) {
   // event.preventDefault();
//}

//document.querySelector("#answer1").addEventListener("click",answerQuestion);
//document.querySelector("#answer2").addEventListener("click",answerQuestion);
//document.querySelector("#answer3").addEventListener("click",answerQuestion);
//document.querySelector("#answer4").addEventListener("click",answerQuestion);

// attach event listener to each answer button


var questionContainer = document.querySelector("#question")


questionContainer.addEventListener("click", function(event) {
    if (this.textContent!== questions[questionPosition].answerText) {
        countDown -= 15;
    }
    showNextQuestion();
    var questionAnswered = event.target;
    if(!questionAnswered.matches("button")) return;
    
    var userAnswer = questionAnswered.dataset.index;
     
    console.log(userAnswer)
});

function endGame() {
    clearInterval(countDown);
}

//function answerQuestion() {

    
 //var questionAnswered = this.getAttribute("data-index");
 //var userAnswer = questionAnswered.dataset.index;
//};


 

// grab text from element "event.target.textContent"





// stringify name and scorekey/value (score = )
var data = [
    {initials:"Initials", score:"Score"}
]

localStorage.getItem(data)

