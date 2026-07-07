// Logical AND
// const password = prompt("Enter Your Password");
// if (password.length >= 6 && password.indexOf(' ') === -1) {
//     console.log("Valid Password")
// } else {
//     console.log("Incorrect Password")
// }

// Logical OR
// 0-5 Free
// 5-10 $10
// 10-65 $20
// 65+ free

// const age = 43

// if (age >= 0 && age < 5 || age >= 65) {
//     console.log("Free")
// } else if (age >= 5 && age < 10) {
//     console.log("$10")
// } else if (age >= 10 && age < 65) {
//     console.log("$20")
// } else {
//     console.log("Invalid Age Entered")
// }

// Logical NOT

// let firstName = prompt("enter your first name");
// if (!firstName) {
//     console.log("you must enter your first name-TRY AGAIN")
// } else {
//     console.log("thanks for entering your first name")
// }

// ANOTHER EXAMPLE - embellish for additional responses
// const age = 68;
// if (!(age >= 0 && age < 5 || age > 65)) {
//     console.log("You are not a baby or a senior")
// }

// SWITCH STATEMENT - NOT USED ROUTINELY
// Standard if and else if statement
// const day = 4;
// if (day === 1) {
//     console.log("Monday")
// }
// else if (day === 2) {
//     console.log("Tuesday")
// }
// else if (day === 3) {
//     console.log("Wednesday")
// }
// else if (day === 4) {
//     console.log("Thursday")
// }
// else if (day === 5) {
//     console.log("Friday")
// } else {
//     console.log("I don't know that")
// }

// Written as a switch statement

const day = 7;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
    case 7:
        console.log("Weekend!!")
        break;
    default:
        console.log("I have no idea");
}