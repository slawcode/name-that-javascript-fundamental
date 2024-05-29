var highscoresButton = document.querySelector("view-highscores");

// Function created to retrieve high scores from local storage
function printHighscores() {
    console.log("Show me this is working, please!");
    var highscores = JSON.parse(window.localStorage.getItem("scores"))  || [];
    highscores.sort(function (a, b) {
        return b.score - a.score;
    })
};

// Function created to clear the high scores from the page 
function clearHighscores() {
    window.localStorage.removeItem("highscores");
    window.location.reload();
}
document.getElementById("clearHighscores").onclick = clearHighscores;

printHighscores();