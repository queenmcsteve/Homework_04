var startButton = document.querySelector("#start");
var timeleftEl = document.querySelector("#timeleft");
var questionsDiv = document.getElementById("questionsDiv");
var enterInitials = document.getElementById("enter-initials");
//hide initials entry box
enterInitials.style.display = "none";

var remainingSeconds = "";
function startTimer() {
  //disable the button
  startButton.disabled = true;
  //start the timer
  score = 0;
  questionIndex = 0;
  currentscore.textContent = score;
  duration = 60;
  var count = 0;
  timeleftEl.textContent = duration + " seconds";
  timer = setInterval(function () {
    count++;
    var remainingSeconds = duration - count;
    //show the time left
    timeleftEl.textContent = remainingSeconds + " seconds";
    //end the game when time gets to 0
    if (remainingSeconds <= 0) {
      finished();
    }
  }, 1000);
  render(questionIndex);
}

startButton.addEventListener("click", startTimer);

//declare stuff
var questionIndex = 0;
var ulCreate = document.createElement("ul");
var score = 0;

var questions = [
  {
    title: "What is the answer?",
    choices: ["option 1", "option 2", "option 3", "option 4"],
    answer: "option 1",
  },
  {
    title: "What is the question?",
    choices: ["option 1", "option 2", "option 3", "option 4"],
    answer: "option 2",
  },
  {
    title: "What is the point of it all?",
    choices: ["option 1", "option 2", "option 3", "option 4"],
    answer: "option 4",
  },
  {
    title: "Where is my mind?",
    choices: ["option 1", "option 2", "option 3", "option 4"],
    answer: "option 3",
  },
];

//Render the question
function render(questionIndex) {
  //clear existing data
  questionsDiv.innerHTML = "";
  ulCreate.innerHTML = "";
  //loop through question array contents
  for (var i = 0; i <= questions.length; i++) {
    var userQuestion = questions[questionIndex].title;
    var userChoices = questions[questionIndex].choices;
    questionsDiv.textContent = userQuestion;
  }
  // create new list item for each option
  userChoices.forEach(function (newItem) {
    var listItem = document.createElement("li");
    listItem.textContent = newItem;
    questionsDiv.appendChild(ulCreate);
    ulCreate.appendChild(listItem);
    listItem.addEventListener("click", compare);
  });
}

//compare selected option against correct answer
function compare(event) {
  var element = event.target;

  if (element.matches("li")) {
    var createDiv = document.createElement("div");
    createDiv.setAttribute("id", "createDiv");
    //correct
    if (element.textContent == questions[questionIndex].answer) {
      score++;
      console.log("right! " + score);
      currentscore.textContent = score;
    }
    //incorrect
    else {
      duration = duration - 15;
    }
  }
  //proceed to next question
  questionIndex++;
  console.log(questionIndex);
  console.log(questions.length);
  //check if questions are exhausted
  if (questionIndex >= questions.length) {
    finished();
  } else {
    render(questionIndex);
  }
}

//function to end the game
function finished() {
  questionsDiv.style.display = "none";
  console.log(timer);
  clearInterval(timer);

  score = score + timer;
  const scoreDiv = document.getElementById("scoreDiv");
  var scoretitle = document.createElement("h1");
  scoretitle = "That's it! You got " + score;
  scoreDiv.textContent = scoretitle;
  startButton.disabled = false;
  localStorage.setItem("currentScore", score);
  //display input box for initials
  enterInitials.style.display = "inline-block";
}

function submitScore() {
  initials = document.getElementById("initials").value;
  var userScore = [{ initials: initials, score: score }];
  console.log(userScore);
  localStorage.setItem("userScore", JSON.stringify(userScore));
}
submitButton.addEventListener("click", submitScore);
