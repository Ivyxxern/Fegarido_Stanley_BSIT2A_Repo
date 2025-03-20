var randomLoc = Math.floor(Math.random() * 5);

var location1 = randomLoc;
var location2 = location1 + 1;
var location3 = location2 + 1;

let guess;
let hits = 0;
let guesses = 0;

let isSunk = false;

while(!isSunk) {
    guess = prompt("Ready!, Aim, Fire! (Enter a number 0-6)");

    if (guess == null) {
        alert("Thank you for playing!");
        break;
    }

    
}