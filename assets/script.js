var startButton = document.querySelector("#start");
var timeleftEl = document.querySelector("#timeleft");

duration = 60;

function startTimer() {
  //start the timer
  var count = 0;
  timer = setInterval(function () {
    count++;
    var remainingSeconds = duration - count;
    //show the time left
    timeleftEl.textContent = remainingSeconds + " seconds";
    //say something when time gets to 0
    if (count >= 5) {
      questionsDiv.textContent =
        "That's it! " +
        "You got " +
        score +
        "/" +
        questions.length +
        "correct :)";
    }
  }, 1000);
  render(questionIndex);
  //add if loop to end game when timer hits 0
  if (duration <= 0) {
    clearInterval;
  }
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
  //   questionsDiv.innerHTML = "";
  ulCreate.innerHTML = "";
  //loop through question array contents
  for (var i = 0; i < questions.length; i++) {
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
      duration = duration - 10;
    }
  }
  //proceed to next question
  questionIndex++;
  //check if questions are exhausted
  if (questionIndex >= questions.length) {
    createDiv.textContent =
      "That's it! " +
      "You got " +
      score +
      "/" +
      questions.length +
      "correct :)";
  } else {
    render(questionIndex);
  }
}
