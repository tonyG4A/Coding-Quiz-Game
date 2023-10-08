var questions = [
    {
        title: "whick choice is a semantic element?",
        choices:["div","span","header","class"],
        answer: "header"
    },
    {
        title: "what is the full form of CSS?",
        choices:["Coloured Special Sheets","Color and Style Sheet","Cascading Style Sheets","Color Some Stuff"],
        answer: "Casacading Style Sheets"
    },
    {
        title: "What keyword do we use to define variable in JavaScript?",
        choices:["div","for","var","none of the above"],
        answer: "var"
    },
    {
        title: "commonly used data types DO NOT include?",
        choices:["strings","booleans","alerts","numbers"],
        answer: "alerts"
    },
    {
        title: "which choice is a looping structure in JavaScript?",
        choices:["var","if","for","const"],
        answer: "for"
    },
];

var choiceEL = document.querySelector("#choice")
var cuurentTime = document.querySelector("timer-counter")
var timer = document.querySelector("start-timer")
var secondsLeft = 50
var penalty = 10
var score = 0

timer.addEventListener("click", function () {
    
}