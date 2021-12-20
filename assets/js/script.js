var startButton = document.querySelector(".start-button"); //variable for start button
var timerElement = document.querySelector(".timer-count"); //variable for timer
var questionContainer = document.querySelector(".container"); //grabs the entire quiz container
var questionElCont = document.querySelector("#question");//grabs the question itself <div>

var answerButtons = document.querySelector("#ans-buttons"); //grabs the answer buttons (also grabs the answer...because of flex issue--could cause problems later)


var questionIndex; //This variable is for the index of questions when I go through them. It's set to undefined so it can be modified later.

var correctAnswer = 0; // Will need to use this to add time to the timer
var incorrectAnswer = 0; // Will need to use this to subtract time from the timer

// var currentQuestion = 0;  // positioning the questions
var question;


var timer; //For timer to be set later
var timerCount; //For timer to be set later

// These are my questions put into an array of objects for easy access.
var questions = [
    {
        question: "What does var mean?",
        options: [ 
            {answer: "variable", correct: true},
            {answer: "variation", correct: false},
           {answer: "variegation", correct: false,} 
]
    }
]

for (let i=0; i<questions.length; i++) {
    for(let j = 0; j < questions[i].length; j++) {
        console.log(questions[i][j]);
    }
}

//     {
//         question2: "What is an array?",
//         options: ["colorful gems", "something", "a way to store multiple data types"],
//         correct: "test test test"
//     }
// ];

// The startQuiz function is called when the start button is clicked
function startQuiz() {
questionIndex = 0; // position of question -- starts at first question
timerCount = 30; // establishes the starting timer count
startButton.disabled = true; // Used to prevent multiple start quiz clicks

// The nextQuestion function is called to bring the user to the next question.
nextQuestion()
}

// This function is used to move to the next question.
function nextQuestion() {
    //I call renderQuestions with arguments questions[questionIndex] to find the next question in the array.
    renderQuestions(questions[questionIndex]);
}


// This function displays the questions in the <div> container.
function renderQuestions(question) {
    questionElCont.textContent = question.question //questionElCont is the location where we are writing the first question.
    for(var i = 0; i < question.length; i++) {
        options = []
        var button = document.createElement('button')
        button.textContent = question.question
        answerButtons.appendChild(button);
        console.log(button)
    }
    // questions.options.forEach(answer => {
    //     var button = document.createElement('button')
    //     button.innerText = answer.answer
    //     if (answer.correct === true) {
    //         button.dataset.correct = answer.correct
    //     }
    //     button.addEventListener('click', selectAnswer)
    //     answerButtons.appendChild(button)
    // })
}

// function renderAnswers() {
//     for (i=0; i < questions.options.length; i++) {

    
//     answerButtons.textContent = questions.options
//     }
// }
// console.log(renderAnswers())



// Function for timer
function startTimer() {
    timerCount = 30; //Sets timer count
    timer = setInterval(function() { //This function starts the countdown.
        timerElement.textContent = timerCount + " seconds remaining...";
        timerCount--;
        if(timerCount === 0) { //Prevents negative timer.
            clearInterval(timer);
        }
    }, 1000); //Counts down by increments of 1 second.
    

}

startButton.addEventListener("click", startTimer); //Starts startTimer function on button click
startButton.addEventListener("click", startQuiz); //Starts startQuiz function on button click








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