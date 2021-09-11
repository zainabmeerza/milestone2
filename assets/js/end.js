

// Set variables 
const username = document.getElementById('username');
const saveScore = document.getElementById('save-score');
const finalScore = document.getElementById('final-score-total');
const mostRecentScore = localStorage.getItem('recentScore');
const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

// Max number of scores that can be displayed
const maxHighScores = 5;

// Disable the save score button if there is no value in the username
username.addEventListener('keyup', () => {
    saveScore.disabled = !username.value;
});

// Save the score to local storage
document.getElementById("save-score-form").addEventListener('submit', function (e) {
    e.preventDefault();
    saveScore.innerText = "Score saved";
    const score = {
        score: mostRecentScore,
        name: username.value
    };
    // Add the score to the highScores array, sort them in order and display the top 5
    highScores.push(score);

    highScores.sort((a, b) => {
        return b.score - a.score;
    });

    highScores.splice(maxHighScores);

    localStorage.setItem('highScores', JSON.stringify(highScores));
    /* window.location.assign('https://8000-yellow-weasel-tiu1kpfg.ws-eu16.gitpod.io/end.html');*/
    document.getElementById('quizContainer').style.display = "none";
    window.location.assign('#');

});

