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
        text: 'How can you print text to the console?',
        answers: [
            {
                text: 'console.print("hello")',
                isCorrect: false,
            },
            {
                text: 'window.console("hello")',
                isCorrect: false,
            },
            {
                text: 'console.log("hello")',
                isCorrect: true,
            },
            {
                text: 'document.log("hello")',
                isCorrect: false,
            },
        ]
    },
    {
        text: 'Which of the following are hoisted in JavaScript?',
        answers: [
            {
                text: 'Variable declarations',
                isCorrect: false,
            },
            {
                text: 'Variable initializations',
                isCorrect: false,
            },
            {
                text: 'Function declarations',
                isCorrect: false,
            },
            {
                text: 'Both A and C',
                isCorrect: true,
            },
            {
                text: 'Both A and B',
                isCorrect: false,
            }
        ]
    },
    {
        text: 'True or False: JavaScript objects contain only public and private properties.',
        answers: [
            {
                text: 'True',
                isCorrect: false,
            },
            {
                text: 'False',
                isCorrect: true,
            },
        ]
    },
    {
        text: 'Which keyword is used to declare a variable?',
        answers: [
            {
                text: 'var',
                isCorrect: false,
            },
            {
                text: 'let',
                isCorrect: false,
            },
            {
                text: 'const',
                isCorrect: false,
            },
            {
                text: 'A and B',
                isCorrect: false,
            },
            {
                text: 'All of the above',
                isCorrect: true,
            },
        ]
    },
    {
        text: 'Which array method is used to add an element to the end of an array?',
        answers: [
            {
                text: 'array.push()',
                isCorrect: true,
            },
            {
                text: 'array.pop()',
                isCorrect: false,
            },
            {
                text: 'array.shift()',
                isCorrect: false,
            },
            {
                text: 'array.splice()',
                isCorrect: false,
            },
        ]
    },
    {
        text: 'Why is variable shadowing considered a bad practice?',
        answers: [
            {
                text: 'It confuses the compiler by using shadow memory reserved for another variable.',
                isCorrect: false,
            },
            {
                text: 'The shadow() method, which is normally defined for all variables, can be accidentally overridden with unexpected behavior.',
                isCorrect: false,
            },
            {
                text: 'It is only a bad practice in web development; the Shadow object is reserved by the browser for special functions.',
                isCorrect: false,
            },
            {
                text: 'It can be confusing for developers because an expected global variable can be "shadowed" by a local variable with the same name.',
                isCorrect: true,
            },
        ]
    },
    {
        text: 'What is the purpose of window.localStorage?',
        answers: [
            {
                text: 'It allows the window to store local variables for use in another webpage.',
                isCorrect: false,
            },
            {
                text: 'It stores data in the browser to be saved between sessions.',
                isCorrect: true,
            },
            {
                text: 'It allows for the caching of webpages to quicken load times.',
                isCorrect: false,
            },
            {
                text: 'It\'s used when the window.globalStorage is full and the browser requires more memory to run.',
                isCorrect: false,
            },
        ]
    },
    {
        text: 'What is the best way to do strict comparison in JavaScript?',
        answers: [
            {
                text: 'a === b',
                isCorrect: true,
            },
            {
                text: 'a == b',
                isCorrect: false,
            },
            {
                text: 'a = b',
                isCorrect: false,
            },
        ]
    },
    {
        text: 'True or false: JavaScript requires an internet connection to run.',
        answers: [
            {
                text: 'True',
                isCorrect: false,
            },
            {
                text: 'False',
                isCorrect: true,
            },
        ]
    },
]