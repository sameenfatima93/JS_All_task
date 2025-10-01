const jsQuestions = [
    "Which variable can be both redeclared and updated?",
    "Which method shows a browser popup with only an OK button?",
    "Which method shows a browser popup asking for user input?",
    "What is the purpose of === ? (strict equality/ non-strict equality",
    "What is the operator for 'remainder' or 'modulus'?(Type in-words)",
    "What is the term for the '++' operator?",
    "What is the term for the '--' operator?",
    "What data structure is created with square brackets `[]`?",
    "Which array method adds an item to the end? (push/pop)",
    "Which array method removes an item from the beginning?",
    "Which loop is best for iterating a specific number of times? (for/while)",
    "What keyword instantly terminates a loop?",
    "What is the result of `typeof []`?",
    "What is the index of the first item in an array?"
];
const jsAnswers = [
    "var",
    "alert",
    "prompt",
    "strict equality",
    "percentage",
    "increment",
    "decrement",
    "array",
    "push",
    "shift",
    "for",
    "break",
    "object",
    "0"
];
var score = 0
for (var i = 0; i < jsQuestions.length; i++){
    var userAns = prompt(jsQuestions[i])
    if (userAns && userAns.toLowerCase() === jsAnswers[i]) {
        alert("Correct ans")
        score++
    } else {
        console.log(jsQuestions[i], jsAnswers[i]);
        
        alert("Wrong! The Correct Answer was " + jsAnswers[i])
    }
}
console.log(score);