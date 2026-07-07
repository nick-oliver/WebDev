// While Loops
// let count = 0;
// while (count < 10) {
//     count++
//     console.log(count)
// }

// const SECRET = 'BabyHippo';

// let guess = prompt('enter the secret code...');
// while (guess !== SECRET) {
//     guess = prompt('WRONG!! Enter the secret code Again...');
// }
// console.log("YAY!! You found the Secret!!")

// While loop with a break
// let input = prompt("Hey, say something!!")
// while (true) {
//     input = prompt(input);
//     if (input.toLowerCase() === 'stop copying me') break;
// }
// console.log("ok, you win!")

//Guessing Game

// let maximum = parseInt(prompt("Enter the maximum number"));
// while (!maximum) {
//     maximum = parseInt(prompt("Enter a valid maximum number"));
// }
// const targetNum = Math.floor(Math.random() * maximum) + 1;

// let guess = prompt("Enter your first guess. (Type 'q' to quit)");
// let attempts = 1;

// while (parseInt(guess) !== targetNum) {
//     if (guess === "q") break;
//     guess = parseInt(guess);
//     if (guess > targetNum) {
//         guess = prompt("Too high!! Enter a new guess:")
//         attempts++;
//     } else if (guess < targetNum) {
//         guess = prompt("Too LOW! Emter a new guess")
//         attempts++;
//     } else {
//         guess = prompt("Invalid guess. Please enter a number or 'q' to quit");
//     }
// }
// if (guess === 'q') {
//     console.log("You quit without guessing the number")
// } else {
//     console.log(`You got it!! It took you ${attempts} guesses.`)
// }

// For... of 

const subreddits = ['cringe', 'books', 'chickens', 'cats', 'dogs', 'birds']

// //classic method
// for (let i = 0; i < subreddits.length; i++) {
//     console.log(`visit redit.com/r/${subreddits[i]}`)
// }

// using the for...of method

// for (let sub of subreddits) {
//     console.log(`visit redit.com/r/${sub}`)
// }

const seatingChart = [
    ['Kristen', 'Eric', 'Namita'],
    ['Geoffrey', 'Juanita', 'Antonio', 'Kevin'],
    ['Yuma', 'Sakura', 'Jack', 'Jill']
]

// classic method
// for (let i = 0; i < seatingChart.length; i++) {
//     const row = seatingChart[i];
//     for (let j = 0; j < row.length; j++) {
//         console.log(row[j])
//     }
// }

// For...of method

// for (let row of seatingChart) {
//     for (let student of row) {
//         console.log(student);
//     }
// }

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]; //DON'T CHANGE THIS LINE PLEASE!

// WRITE YOUR LOOP BELOW THIS LINE:

for (const num of numbers) {
    console.log(num * num);
}