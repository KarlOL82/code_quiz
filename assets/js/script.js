var timeEl = document.querySelector("#timer");
var countDown = 0;
var currentQuestion = questions[questionPosition];
var score = 0;


var questionPosition = 0;
var questions = [
  { q1: "Which of the following is not a data type in Javascript?",
    choices1: ["1. Boolean", "2. String", "3. Undefined", "4. Number"],
    a1: "3. Undefined"
},

{   q2: "What is the correct HTML element to place Javascript code inside of?",
    choices2: ["1. <script>", "2. <div>", "3. <js>", "4. <Body>" ],
    a2: "1. <script>",
},

{   q3: "What punctutation does an array go inside of",
    choices3: ["1. Quotation marks", "2. Curly Brackets", "3. Parentheses", "4. Square Brackets"],
    a3: "4. Square Brackets"
},

{   q4: "Which is the correct extension for a Javascript file?",
    choices4: ["1. .js", "2. .java", "3. .jscript", "4. .script"],
    a4: "1. .js"
},

{   q5: "What index position is assigned to the first item in an array?",
    choices5: ["1. 1", "2. x", "3. i", "4. 0"],
},
]



//function(startGame)