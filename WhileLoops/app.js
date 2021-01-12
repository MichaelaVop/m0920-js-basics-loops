// ==============================================
//Our very while loop
// ==============================================
// let count = 1;
// while(count <= 10){
//     console.log(count);
//     count++;
// }

// ==============================================
//Another use case of while loop
// ==============================================
// const SECRET = 'dumbotaco';

// let guess = prompt('Enter the secret code....');
// while(guess.toLowerCase() !== SECRET) {
//     guess = prompt('Enter the secret code....');
// }
// console.log('CONGRATS! YOU GOT THE SECRET!');

// ==============================================
//Intro to BREAK
// ==============================================

// let input = prompt("Hey, say something");

// while(true){
//     input = prompt(input);
//     if(input.toLowerCase() === 'stop copying me'){
//         break;
//     }
// }
// console.log("OK YOU WIN!");

// for (let i = 0; i < 1000; i++){
//     console.log(i);
//     if(i === 100) break;
    
// }


// ==============================================
//Guess the number GAME
// ==============================================

let maximum = parseInt(prompt("Enter a maximum number!"));

while(!maximum){
    maximum = parseInt(prompt("Enter a valid number"));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;

let guess = parseInt(prompt("Enter your first guess!"));
let attempts = 1;

while(parseInt(guess) !== targetNum){
    if(guess === 'q') break;
    attempts++;
    if(guess > targetNum){
        guess = prompt("Too high! Try again!");
    }else{
        guess = prompt("Too low! Try again!");
    }
}

if(guess === 'q'){
    console.log("OK, YOU QUIT");
}else{
    console.log("CONGRATS! YOU WON!");
    console.log(`You got it! It took you ${attempts} guesses.`);
}