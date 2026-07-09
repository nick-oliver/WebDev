// let die1 = Math.floor(Math.random() * 6) + 1;
// let die2 = Math.floor(Math.random() * 6) + 1;
// let die3 = Math.floor(Math.random() * 6) + 1;
// let die4 = Math.floor(Math.random() * 6) + 1;
// let die5 = Math.floor(Math.random() * 6) + 1;
// let die6 = Math.floor(Math.random() * 6) + 1;

//we want to make a function that will allow us to input variables and run lines multiple times
//Define a function

// function funcName() {
//     //enter actions
// }

// function grumpus() {
//     console.log('ugh, you again!!');
//     console.log('for the last time');
//     console.log('Leave me alone!');
// }

// grumpus()

// function singSong() {

//     console.log("DO");
//     console.log("RE");
//     console.log("MI");
// }
// singSong()
// singSong()

// functions that accept input

// function greet(firstName) {
//     console.log(`Hey there ${firstName}`)
// }

// function rant(message) {
//     for (let i = 0; i < 3; i++) {
//     console.log(`I hate ${message}`.toUpperCase())
//     }
// }

// multi input functions

// function greet(firstName, lastName) {
//     console.log(`Hey there ${firstName} ${lastName[0]}. `)
// }

// function repeat(str, numTimes) {
//     let result = ' ';
//     for (let i = 0; i < numTimes; i++) {
//         result += str;
//     }
//     console.log(result);
// }

// Exercise - roll of dice - got the right results, but not in the form they wanted
// function isSnakeEyes(numberOfDice, sides = 6) {
//     const die1 = (Math.floor(Math.random() * sides) + 1);
//     const die2 = (Math.floor(Math.random() * sides) + 1);
//     console.log(`isSnakeEyes(${die1}, ${die2})`);
//     if (die1 && die2 === 1) {
//         console.log(`isSnakeEyes(${die1}, ${die2}) Snake Eyes`);
//     }
//     else {
//         console.log(`isSnakeEyes(${die1}, ${die2}) not Snake Eyes`);
//     }
// }
// This is the form they want

function isSnakeEyes(die1, die2) {
    if (die1 === 1 && die2 === 1) {
        console.log('Snake Eyes!');
    } else {
        console.log('Not Snake Eyes!');
    }
}
