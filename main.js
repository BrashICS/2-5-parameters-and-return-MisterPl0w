/**
 * 
 * 2.5 - Function Parameters and Return
 * ICS3 - Mr. Brash 🐿️
 * 
 * Read README.md and YOUR_Task.md 
 * 
 * The line below forces JavaScript to follow certian rules. Leave it there.
 * For more info: www.w3schools.com/js/js_strict.asp
**/ 

'use strict';

function roll_dice(qty, sides) {
    let answer = randInt(1, sides) + randInt(1, sides) + randInt(1, sides) + randInt(1, sides)
    return answer;
}

function randInt(min, max) {
    let rnd = Math.floor(Math.random() * (max - min + 1)) + min;
    return rnd;
}