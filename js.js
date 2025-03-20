// var passengers = [
//     { name: "Jane Doloop", paid: true, ticket: "coach" },
//     { name: "Dr. Evel", paid: true, ticket: "firstclass" },
//     { name: "Sue Property", paid: false, ticket: "firstclass" },
//     { name: "John Funcall", paid: true, ticket: "economy" },
//   ];


//   function createDrinkOrder(passenger) {
//   var orderFunction;
//   if (passenger.ticket === "firstclass") {
//     orderFunction = function () {
//       console.log("Would you like a cocktail or wine?");
//     };
//   } else if (passenger.ticket === "economy") {
//     orderFunction = function () {
//       console.log("Your choice is cola or water or wine.");
//     };
//   } else {
//     orderFunction = function () {
//       console.log("Your choice is cola or water.");
//     }; 
//   }
//   return orderFunction;
//   }

// function createDinnerOrder(passenger) {
//   var dinnerFunction;

//   if (passenger.ticket === "firstclass") {
//     dinnerFunction = function () {
//       console.log("Would you like a chicken or pasta?");
//     };
//   } else if (passenger.ticket === "economy") {
//     dinnerFunction = function () {
//       console.log("Your choice is appetizers or a cheese plate");
//     };
//   } else {
//     dinnerFunction = function () {
//       console.log("Your choice is nuts or crackers.");
//     };
//   }

//   return dinnerFunction;
// }


// function serveCustomer(passenger) {
//   var getDrinkOrderFunction = createDrinkOrder(passenger);
//   var getDinnerOrderFunction = createDinnerOrder(passenger);
//   getDrinkOrderFunction();
//   getDinnerOrderFunction();
// }

// function servePassengers(passengers) {
//   for (var i = 0; i < passengers.length; i++) {
//     serveCustomer(passengers[i]);
//   }
// }
// servePassengers(passengers);