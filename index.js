// let timer = document.getElementById('timer');
// let startBtn = document.getElementById('start');
// let pauseBtn = document.getElementById('pause');

// let seconds = 0;

// function updateTime() {
//     seconds++;
//     timer.textContent = `${seconds}  sec`;
// }

// startBtn.addEventListener('click', () => {
//     interval = setInterval(updateTime, 1000);
//     startBtn = true;
//     pauseBtn = false;
// });

// pauseBtn.addEventListener('click', () => {
//     clearInterval(interval);
//     startBtn = false;
//     pauseBtn = true;
// });

// var scores = [
//   60, 50, 60, 58, 54, 54, 58, 50, 52, 54, 48, 69, 34, 55, 51, 52, 44, 51, 69,
//   64, 66, 55, 52, 61, 46, 31, 57, 52, 44, 18, 41, 53, 55, 61, 51, 44,
// ];

// var highScore = 0;

// for (var i = 0; i < scores.length; i++) {
//     console.log(scores[i])

// if  (scores[i] > highScore) {
//     highScore = scores[i];
// }
// }

// console.log("Bubbles tests: " + scores.length);
// console.log("Highest bubble score: " + highScore)

// var bestSolutions = [];
// for (var i = 0; i < scores.length; i++) {
//  if (scores[i] == highScore) {
//  bestSolutions.push(i);
//  }
// }

// console.log("Solutions with the highest score: " + bestSolutions);

// function printAndGetHighScore(scores) {
//     var highScore = 0;
//     var output;
//     for (var i = 0; i < scores.length; i++) {
//     output = "Bubble solution #" + i + " score: " + scores[i];
//     console.log(output);
//     if (scores[i] > highScore) {
//     highScore = scores[i];
//     }
//     }
//     return highScore;
//    }

//    var highScore = printAndGetHighScore(scores);
//    console.log("Bubbles tests: " + scores.length);
//    console.log("Highest bubble score: " + highScore);

//    function getBestResults(scores, highScore) {
//     var bestSolutions = [];
//     for (var i = 0; i < scores.length; i++) {
//     if (scores[i] == highScore) {
//     bestSolutions.push(i);
//     }
//     }
//     return bestSolutions;
//     }

//     var bestSolutions = getBestResults(scores, highScore);
//     console.log("Solutions with the highest score: " + bestSolutions);

// var costs = [
//   0.25, 0.27, 0.25, 0.25, 0.25, 0.25, 0.33, 0.31, 0.25, 0.29, 0.27, 0.22, 0.31,
//   0.25, 0.25, 0.33, 0.21, 0.25, 0.25, 0.25, 0.28, 0.25, 0.24, 0.22, 0.2, 0.25,
//   0.3, 0.25, 0.24, 0.25, 0.25, 0.25, 0.27, 0.25, 0.26, 0.29,
// ];

// function getMostCostEffectiveSolution(scores, costs, highScore) {
//   var cost = 100;
//   var index;
//   for (var i = 0; i < scores.length; i++) {
//     if (scores[i] == highScore) {
//       if (cost > costs[i]) {
//         index = i;
//         cost = costs[i];
//       }
//     }
//   }
//   return index;
// }

// var mostCostEffective = getMostCostEffectiveSolution(scores, costs, highScore);
// console.log(
//   "Bubble Solution #" + mostCostEffective + " is the most cost effective"
// );

// var passengers = [
//   { name: "Jane Doloop", paid: true, ticket: "coach" },
//   { name: "Dr. Evel", paid: true, ticket: "firstclass" },
//   { name: "Sue Property", paid: false, ticket: "firstclass" },
//   { name: "John Funcall", paid: true, ticket: "economy" },
// ];

//      function checkPaid(passengers) {
//         for (var i = 0; i < passengers.length; i++) {
//         if (!passengers[i].paid) {
//         return false;
//         }
//         }
//         return true;
//        }

//        console.log(checkPaid(passengers));

//     function printPassengers(passengers) {
//         for (var i = 0; i < passengers.length; i++) {
//         console.log(passengers[i].name);
//         }
//        }
//        printPassengers(passengers);

// function processPassengers(passengers, testFunction) {
//     for (var i = 0; i < passengers.length; i++) {
//         if (testFunction(passengers[i])) {
//             return false;
//         }
//     }
//     return true;
//  }

//  function printPassenger(passenger) {
//     console.log(passenger.name, passenger.paid ? "paid" : "unpaid");
// }

// // processPassengers(passengers, printPassenger);
// function createDrinkOrder(passenger) {
//     var orderFunction;

//     if (passenger.ticket === "firstclass") {
//         orderFunction = function() {
//             console.log("Would you like a cocktail or wine?");
//         };
//     } else {
//         orderFunction = function() {
//             console.log("Your choice is cola or water.");
//         };
//     }
//     return orderFunction;
//  }
let output = document.getElementById("output");
let requestButton = document.getElementById("request");
let restartButton = document.getElementById("restart");

async function FetchData() {
  let response = await fetch("http://localhost:8090/api/init");
  let json = await response.json();
  return json;
}

requestButton.addEventListener("click", async () => {
    let data = await FetchData();
    output.innerText = JSON.stringify(data, null, 2);
});

async function resetData() {
  let reset = await fetch("http://localhost:8090/api/restart");
}
restartButton.addEventListener("click", async () => {
  let data = await resetData();
  output.innerText = ""
});



