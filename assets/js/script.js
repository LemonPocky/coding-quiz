function init() {
    showStart();
}

function showStart() {
    const questionElement = document.querySelector('.question');
    questionElement.textContent = 'Welcome to the JavaScript Code Quiz!\n\n'
        + 'Answer questions until time runs out! Incorrect answers will subtract time.\n'
        + 'Good luck!';

    clearAnswers();
    addAnswer('Start!');
}

// Helper function that creates answer buttons
// Returns the newly created button element
function addAnswer(answerText) {
    const answers = document.querySelector('.answers-container');
    // Index represents which number (1st, 2nd, etc) this answer is
    const index = answers.childElementCount + 1;
    const answer = document.createElement('button');
    answer.classList.add('option', 'answer');
    answer.dataset.index = index;
    answer.textContent = answerText;
    
    // Add the newly created answer to the list of answers
    answers.appendChild(answer);
    return answer;
}

// Removes answer choices from the screen
function clearAnswers() {
    document.querySelector('.answers-container').innerHTML = '';
}

init();