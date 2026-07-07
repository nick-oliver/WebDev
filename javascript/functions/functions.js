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

function rant(message) {
    console.log(`I hate ${message}`.toUpperCase())
    for (let i = 0; i < 3; i++) {
        rant();
    }
}
rant();

