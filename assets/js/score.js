 
 var userData;
 renderScore();

// function renderScore(event) {
//     // location.href = "./score.html";
//     var scoreEl = document.querySelector("#score");
//     var userData = JSON.parse(localStorage.getItem("nameScore"));
//     var userDisplay = JSON.stringify("nameScore");
//     window.location.href = "./score.html";
//     if (userData !== null) {
//       scoreEl.textContent = `Your Score is:   ${userDisplay}`;
//         // scoreEl.textContent = userData.name;
//         // scoreEl.textContent = userData.score;

//     } else {
//       return;
//     }
  
    
//   };

function renderScore() {
    var scoreEl = document.querySelector(".score");
    var userData = JSON.parse(localStorage.getItem("nameScore"));

    for (var i = 0; i < userData.length; i++) {
      var userDisplay = `Name: ${userData[i].name} | Score: ${userData[i].score}`;
      if (userData[i] !== null) {
        // scoreEl.textContent = userDisplay;
        scoreEl.textContent += `${userDisplay}`;
      } else {
        return;
      }
    }
}  