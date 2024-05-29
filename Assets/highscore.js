var highscoresButton = document.querySelector("view-highscores");

function printHighscores() {
    var highscores = JSON.parse(window.localStorage.getItem("highscores"))  || [];
    highscores.sort(function (a, b) {
        return b.score - a.score;
    })
};

function clearHighscores() {
    window.localStorage.removeItem("highscores");
    window.location.reload();
}
document.getElementById("clearHighscores").onclick = clearHighscores;

printHighscores();