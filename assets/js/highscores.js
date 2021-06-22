function renderPage() {
    clearScores();
    let scores = loadScores();
    showScores(scores);
    addResetButton();
} 

function clearScores() {
    document.querySelector('.highscores-container').innerHTML = '';
}

function loadScores() {
    // Get the array of high scores from local storage
    // Return empty array if getItem returns null
    return JSON.parse(localStorage.getItem('highscores') || '[]');
}

function showScores(scores) {
    // Score object is in the form of
    // let score = {
    //     name: name,
    //     score: score,
    // }
    const scoresContainer = document.querySelector('.highscores-container');
    for (let i = 0; i < scores.length; i++) {
        const scoreElement = document.createElement('div');
        const score = scores[i];
        scoreElement.classList.add('option', 'highscore');
        scoreElement.textContent = score.name + ' : ' + score.score;

        // Add the newly created answer to the list of answers
        scoresContainer.appendChild(scoreElement);
    }

}

// Adds a reset button that will delete all high scores
function addResetButton() {
    const scoresContainer = document.querySelector('.highscores-container');
    const resetButton = document.createElement('button');
    resetButton.classList.add('submit-button');
    resetButton.textContent = 'Reset High Scores';
    resetButton.addEventListener('click', function() {
        // Confirm if high scores should be deleted first
        if ( confirm('Are you sure you want to reset all high scores?') ) {
            localStorage.clear();
            // Refresh the page after scores are cleared
            renderPage();
        }
    });
    scoresContainer.appendChild(resetButton);
}

renderPage();