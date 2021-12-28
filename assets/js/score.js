function displayHighScores () {   
        var lastScore = JSON.parse(localStorage.getItem("highscores"));
        if (lastScore !== null) {
            document.querySelector("#newHighScore").textContent = "The user " + lastScore.initials +
            " received a score of " + lastScore.currentTime
    }



    }

displayHighScores();


