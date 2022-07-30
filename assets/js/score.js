// This js file displays the score page
var userData;
renderScore();

function renderScore() {
  var scoreEl = document.querySelector("#scoreList");
  var userData = JSON.parse(localStorage.getItem("nameScore"));
  document.querySelector("#scoreList").classList.remove("hidden");

  for (var i = 0; i < userData.length; i++) {
    var userDisplay = `Name: ${userData[i].name} | Score: ${userData[i].score}`;
    if (userData[i] !== null) {
      var createLi = document.createElement("li");
      createLi.textContent = `${userDisplay}`;
      scoreEl.appendChild(createLi);
    } else {
      return;
    }
  }
}
// Event listener for button to clear the score page
document.querySelector("#clearBtn").addEventListener("click", clearScore);
// Clears the saved scores when button is clicked
function clearScore() {
  document.querySelector(".scoreContainer").classList.add("hidden");
  window.localStorage.clear();
}
