 
 var userData;
 renderScore();

function renderScore(event) {
    // location.href = "./score.html";
    var scoreEl = document.querySelector("#score");
    var userData = JSON.parse(localStorage.getItem("nameScore"));
    var userDisplay = JSON.stringify("nameScore");
    window.location.href = "./score.html";
    if (userData !== null) {
      scoreEl.textContent = `Your Score is:  + ${userDisplay}`;
    } else {
      return;
    }
  
    
  }

  