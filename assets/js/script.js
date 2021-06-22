
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
        timerInterval = setInterval(function() {
            if (this.time <= 0) {
                clearInterval(this.timerInterval);
                // TODO: End the game somehow?
            } else {
                this.time--;
                this.render();
            }
        }.bind(this), 1000); //.bind is necessary with setInterval
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

    clearAnswers();
    const startButton = addAnswer('Start!');
    startButton.addEventListener('click', initGame);
}

function initGame() {
    // Display the timer in the upper right
    timer.time = 99;
    timer.render();
    timer.start();

    // TODO: Change High Scores into Back To Start
    runGame();
}

function runGame() {
    const questionElement = document.querySelector('.question');
    const answersContainerElement = document.querySelector('answers-container');
    // TODO: Randomly order questions, but in order is ok for now

    // Controls whether or not answers can be clicked on
    // Becomes false when an answer is clicked to prevent selecting multiple answers
    let questionIsLive = true;

    // Loop through the questions
    for (let questionIndex = 0; questionIndex < questions.length; questionIndex++) {
        let question = questions[questionIndex];
        questionElement.textContent = question.text;
        // TODO: Shuffle answers, while keeping track of the correct one
        // For now, the answers are always in the same order
        clearAnswers();

        // Display answers
        for (let i = 0; i < question.answers.length; i++) {
            let currentAnswer = question.answers[i];
            let button = addAnswer(currentAnswer.text);
            // Add click event listeners to buttons
            // Aside: event delegation may not be possible here? Since we want the correct answer
            // to have different behavior than the incorrect answer.
            button.addEventListener('click', function() {
                if (questionIsLive){
                    if (currentAnswer.isCorrect){
                        handleCorrectAnswer(button);
                    } else {
                        handleWrongAnswer(button);
                    }
                    questionIsLive = false;
                }
            });
        }
        questionIsLive = true;
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