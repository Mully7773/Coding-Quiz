var startButton = document.querySelector(".start-button"); //variable for start button
var timerElement = document.querySelector(".timer-count"); //variable for timer
var questionContainer = document.querySelector(".container"); //grabs the entire quiz container
var questionElCont = document.querySelector("#question");//grabs the question itself <div>
var submitForm = document.querySelector("#form"); // grabs the form
var answerButtons = document.querySelector("#ans-buttons"); //grabs the answer buttons (used to grab the answer...because of flex issue--could cause problems later)
var initials = document.querySelector("#initial").value
var submitButton = document.querySelector("#submission");



var questionIndex; //This variable is for the index of questions when I go through them. It's set to undefined so it can be modified later.


var timer; //For timer to be set later
var timerCount; //For timer to be set later


var questions = [
    {
        question: "What does var mean?",
        options: [ 
            {answer: "variable", correct: true},
            {answer: "variation", correct: false},
           {answer: "variegation", correct: false,},
           {answer: "variety", correct: false}
]
    },

    {
        question: "What do we call this text style: myFunction?",
        options: [ 
            {answer: "snake case", correct: false},
            {answer: "dog case", correct: false},
           {answer: "camel case", correct: true,},
           {answer: "bird case", correct: false}
]
    }

]



function startQuiz() {
questionIndex = 0; // position of question -- starts at first question
timerCount = 30; // establishes the starting timer count
startButton.disabled = true; // Used to prevent multiple start quiz clicks
questionContainer.classList.remove("hidden")
// The nextQuestion function is called to bring the user to the next question.
nextQuestion()
}

// This function is used to move to the next question.
function nextQuestion() {
    //I call renderQuestions with arguments questions[questionIndex] to find the next question in the array.
    if (questionIndex === questions.length) {
        questionContainer.classList.add("hidden");
        submitForm.classList.remove("hidden");
        clearInterval(timer);
    }
    renderQuestions(questions[questionIndex]);
}


// This function displays the questions in the <div> container.
function renderQuestions(question) {
    questionElCont.textContent = question.question
    while (answerButtons.firstChild){    //the while loop loops as long as some condition is true
        answerButtons.removeChild(answerButtons.firstChild)
      }
    question.options.forEach(answer => {
        var button = document.createElement('button') //creates a button for every option
        button.textContent = answer.answer //adds text to option
        
        button.addEventListener('click', selectAnswer) //makes buttons clickable
        button.classList.add('button') //adds the first styles to the buttons
        answerButtons.appendChild(button)
    })
}

    function selectAnswer(event) {
        var userChoice = event.target.textContent;
        var correctOption = questions[questionIndex].options.filter(function(option) {
            return option.correct
        })[0].answer;
        if (userChoice !== correctOption) {
            timerCount -= 5;
        }
        questionIndex++;
        nextQuestion();
    }

   // Local Storage
//     function store(){
//         var initials = document.querySelector("#initial").value.trim();
//         var currentTime = timerCount

//         var userInitial = {
//             currentTime: currentTime,
//             initials: initials,
//         }
//         console.log(userInitial);
//         window.localStorage.setItem(initials, JSON.stringify(userInitial));
//         // window.location.href = "highscores.html";
//         }
  

//     function retrieve() {
//         var initials = document.querySelector("#initial").value;
//         var records = window.localStorage.getItem(initials);
//         // console.log(records)
//         // console.log(records.currentTime)
//         var pg = document.createElement("p");
//         var information = document.createTextNode(records);
//         pg.appendChild(information);
//         var element = document.querySelector("#retrieve");
//         element.appendChild(pg);
//     }

// submitForm.addEventListener("submit", function(event){
  
//     event.preventDefault();
//     store();
//     // newWindow(); 

//     //NOTE: The function above opens my new window, but I was unable to get the scores posted here...I apologize.


//     retrieve()
// })

function newWindow() {
    window.location.href = "highscores.html";
//     var initials = document.querySelector("#initial").value;
// window.localStorage.getItem(initials)
}


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


submitButton.addEventListener("click", function(event) {
    event.preventDefault();

    var initials = document.querySelector("#initial").value;
    var currentTime = timerCount

    var highscores = {


        initials: initials,
        currentTime: currentTime
        
    };

    var highscore = localStorage.setItem("highscores", JSON.stringify(highscores));

    renderScores()
});

var finalButton = document.querySelector("#displayHighScores");



function renderScores() {
    var lastScore = JSON.parse(localStorage.getItem("highscores"));
    if (lastScore !== null) {
        document.querySelector(".message").textContent = lastScore.initials +
        " received a score of " + lastScore.currentTime
    }
}

// finalButton.addEventListener("click", function(event) {
//     renderScores(event);
// })
// finalButton.addEventListener("click", renderScores);


startButton.addEventListener("click", startTimer); //Starts startTimer function on button click
startButton.addEventListener("click", startQuiz); //Starts startQuiz function on button click