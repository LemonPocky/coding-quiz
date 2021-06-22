// Array of question objects
// Question object template:
// (This looks a lot like JSON -hinthint-)
//{
//  text: '',
//  answers: [
//      {
//          text: '',
//          isCorrect: true,
//      },
//      {
//          text: '',
//          isCorrect: false,
//      },
//      ...
//  ]
//}

questions = [
    {
        text: 'What is 2 + 3?',
        answers: [
            {
                text: '5',
                isCorrect: true,
            },
            {
                text: '0',
                isCorrect: false,
            },
            {
                text: '50',
                isCorrect: false,
            },
            {
                text: '9999',
                isCorrect: false,
            },
        ]
    },
    {
        text: 'Which of the following are hoisted in JavaScript?',
        answers: [
            {
                text: 'Variable declarations',
                isCorrect: true,
            },
            {
                text: 'Variable initializations',
                isCorrect: false,
            },
            {
                text: 'Function declarations',
                isCorrect: true,
            },
            {
                text: 'Function expressions',
                isCorrect: false,
            },
            {
                text: 'None of the above',
                isCorrect: false,
            }
        ]
    },
]