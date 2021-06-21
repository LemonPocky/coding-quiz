// Object that is responsible for managing the timer of the game
const timer = {
    time: 0,
    timerInterval: 0,
    render: function() {
        let timerElement = document.querySelector('.timer');
        timerElement.textContent = 'Time: ' + this.time;
    },
    hide: function() {
        let timerElement = document.querySelector('.timer');
        timerElement.textContent = '';
    },
    start: function() {
        timerInterval = setInterval(function() {
            if (this.time <= 0) {
                clearInterval(this.timerInterval);
                // TODO: End the game somehow?
            } else {
                this.time--;
                this.render();
            }
        }.bind(this), 1000);
    }
}

function init() {
    showStart();
}

function showStart() {
    const welcomeText = document.querySelector('.question');
    welcomeText.textContent = 'Welcome to the JavaScript Code Quiz!\n\n'
        + 'Answer questions until time runs out! Incorrect answers will subtract time.\n'
        + 'Good luck!';

    clearAnswers();
    const startButton = addAnswer('Start!');
    startButton.addEventListener('click', initGame);
}

function initGame() {
    // Display the timer in the upper right
    timer.time = 99;
    timer.render();
    timer.start();

    const questionElement = document.querySelector('.question');
    questionElement.textContent = 'What is 2 + 3?'
    clearAnswers();
    addAnswer('2');
    addAnswer('5');
    addAnswer('40');
    addAnswer('9999');
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