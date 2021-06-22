
// Object that is responsible for managing the timer of the game
const timer = {
    time: 0,
    timerInterval: 0,
    wrongPenalty: 10,

    render: function() {
        let timerElement = document.querySelector('.timer');
        timerElement.textContent = 'Time: ' + this.time;
    },

    hide: function() {
        let timerElement = document.querySelector('.timer');
        timerElement.textContent = '';
    },

    start: function() {
        this.timerInterval = setInterval(function() {
            if (this.time <= 1) {
                clearInterval(this.timerInterval);
                this.time = 0;
                this.render();
                // Ends the game when time is 0
                endGame();
            } else {
                this.time--;
                this.render();
            }
        }.bind(this), 1000); //.bind is necessary with setInterval
    },

    stop: function() {
        clearInterval(this.timerInterval);
    },

    // Subtract from time for an incorrect answer
    penalty: function() {
        if (this.time <= this.wrongPenalty) {
            this.time = 0;
        } else {
            this.time -= this.wrongPenalty;
        }
        this.render();
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

    // Change upper left link into High Scores

    clearAnswers();
    const startButton = addAnswer('Start!');
    startButton.addEventListener('click', runGame);
}

function runGame() {
    // Display the timer in the upper right
    timer.time = 22;
    timer.render();
    timer.start();

    // TODO: Change High Scores link into Back To Start

    // TODO: Randomly order questions
    // In order is okay for now

    // Display questions starting from 0
    displayQuestion(0);
}

function displayQuestion(index) {
    if (index >= questions.length) {
        endGame();
        return;
    }

    // Controls whether or not answers can be clicked on
    // Becomes false when an answer is clicked to prevent selecting multiple answers
    let questionIsLive = false;
    const questionElement = document.querySelector('.question');
    const answersContainerElement = document.querySelector('answers-container');

    const question = questions[index];
    questionElement.textContent = question.text;
    clearAnswers();

    // Display answers
    for (let i = 0; i < question.answers.length; i++) {
        const currentAnswer = question.answers[i];
        const button = addAnswer(currentAnswer.text);
        // Add click event listeners to buttons
        // Aside: event delegation may not be possible here? Since we want the correct answer
        // to have different behavior than the incorrect answer.
        button.addEventListener('click', function () {
            if (!questionIsLive) {
                return;
            }

            if (currentAnswer.isCorrect) {
                handleCorrectAnswer(button);
            } else {
                handleWrongAnswer(button);
            }
            questionIsLive = false;
            
            // Call for the next question
            setTimeout(() => {
                // But only if there's still time left
                if (timer.time > 0) {
                    displayQuestion(index + 1);
                }
            }, 1000);
        });
    }

    // Let answers be clickable
    questionIsLive = true;
}

function endGame() {
    const questionElement = document.querySelector('.question');

    clearAnswers();
    timer.stop();

    let score = timer.time;
    if (score > 0) {
        questionElement.textContent = 'Game over!\n\n'
            + 'Final score: ' + score;
    } else {
        questionElement.textContent = "Time's up!\n\n"
            + 'Better luck next time...';
    }
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

function handleCorrectAnswer(button) {
    button.style.backgroundColor = 'green';
}

function handleWrongAnswer(button) {
    button.style.backgroundColor = 'red';

    // Subtract time penalty
    timer.penalty();
}

// Helper function that randomly shuffles an array's order
// https://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}

init();