var currentInitials = localStorage.getItem("curentInitials");
var currentScore = localStorage.getItem("currentScore");
var submitButton = document.querySelector("#submitButton");
var allScores = localStorage.getItem("allScores");
console.log(currentScore);

// var testObject = [
//   { initials: "steve", score: 5 },
//   { initials: "bobby", score: 7 },
// ];
// localStorage.setItem("testObject", JSON.stringify(testObject));

// var allScores = localStorage.getItem("allScores");
// allScores = JSON.parse(allScores);

// if (allScores !== null) {
//   for (var i=0; i<allScores.length; i++) {

//   }
// }

var retrievedObject = JSON.parse(localStorage.getItem("allScores"));
console.log(retrievedObject);

var tbody = document.getElementById("tbody");

for (var i = 0; i < retrievedObject.length; i++) {
  var tr = "<tr>";
  tr += "<td>Name</td>" + "<td>" + retrievedObject[i].initials + "</td></tr>";
  tr += "<td>Score</td>" + "<td>" + retrievedObject[i].score + "</td></tr>";
  tbody.innerHTML += tr;
}
