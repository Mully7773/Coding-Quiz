var startButton = document.querySelector(".start-button"); //variable for start button
var timerElement = document.querySelector(".timer-count"); //variable for timer
var quizQuestion = document.querySelector(".main"); //variable for quiz section


var correctAnswer = 0;
var incorrectAnswer = 0;
var currentQuestion = 0;  // positioning the questions
var question;


var timer;
var timerCount;

var questions = [
    {
        question1: "What does var mean?",
        options: ["variable", "variation", "variegation"],
        correct: "variable"
    },
    {
        question2: "What is an array?",
        options: ["colorful gems", "something", "a way to store multiple data types"],
        correct: "test test test"
    }
];
console.log(questions);

// The startQuiz function is called when the start button is clicked
function startQuiz() {
// var question = document.createElement("p");
timerCount = 10;
startButton.disabled = true;
renderQuestions();//Need to find a way to bring up questions
// document.body.appendChild(quizQuestion);
}


function renderQuestions() {
    quizQuestion.textContent = questions[0]
}


function startTimer() {
    timerCount = 10;
    timer = setInterval(function() {
        timerElement.textContent = timerCount + " seconds remaining...";
        timerCount--;
        if(timerCount === 0) {
            clearInterval(timer);
        }
    }, 1000);
    

}
// startQuiz();

startButton.addEventListener("click", startTimer);
startButton.addEventListener("click", startQuiz);








// var index = 0;
// var currentImage;

// var images = [
//   "https://picsum.photos/300/200",
//   "https://picsum.photos/300/201",
//   "https://picsum.photos/300/202",
//   "https://picsum.photos/300/203"
// ];

// carousel.style.backgroundImage = "url('https://picsum.photos/300/200')";

// function navigate(direction) {
//   index = index + direction;
//   if (index < 0) { 
//     index = images.length - 1; 
//   } else if (index > images.length - 1) { 
//     index = 0;
//   }
//   currentImage = images[index];  //I would do questions[index]
//   carousel.style.backgroundImage = "url('" + currentImage + "')";
// }