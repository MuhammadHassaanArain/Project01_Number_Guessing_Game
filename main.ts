#! /usr/bin/env node
import inquirer from "inquirer";
let number : number = Math.floor(Math.random()*5 +1);
const answer = await inquirer.prompt([
{
    name:"guessedNumber",
    type:"number",
    message:"Guess a number between 1 to 5",
}]);
if (answer.guessedNumber===number){console.log("Congratulations you just guessed the correct one !")}
else{console.log("incorret number Try Again")};
if (answer.guessedNumber != number ){console.log(`Correct answer was ${number}`)};