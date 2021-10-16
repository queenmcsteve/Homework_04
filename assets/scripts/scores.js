var currentInitials = localStorage.getItem("curentInitials");
var currentScore = localStorage.getItem("currentScore");
var submitButton = document.querySelector("#submitButton");
var allScores = localStorage.getItem("allScores");
console.log(currentScore);

// Object for testing
// var testObject = [
//   { initials: "steve", score: 5 },
//   { initials: "bobby", score: 7 },
// ];
// localStorage.setItem("testObject", JSON.stringify(testObject));

//pull allScore from local storage
var retrievedObject = JSON.parse(localStorage.getItem("allScores"));
console.log(retrievedObject);

var tbody = document.getElementById("tbody");
//add each object in allScores as a line to the table
for (var i = 0; i < retrievedObject.length; i++) {
  var tr = "<tr>";
  tr += "<td>Name</td>" + "<td>" + retrievedObject[i].initials + "</td></tr>";
  tr += "<td>Score</td>" + "<td>" + retrievedObject[i].score + "</td></tr>";
  tbody.innerHTML += tr;
}
