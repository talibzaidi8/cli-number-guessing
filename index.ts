#! /usr/bin/env node

import inquirer from "inquirer";



const randomNumber = Math.floor(Math.random()*6 + 1);


const answer = await inquirer.prompt([
   { 
    name:"userGuessednumber",
    type:"number",
    message:"please guess a number between 1 to 6:", 

   },

]);
if(answer.userGuessednumber===randomNumber){
console.log("Congtratulation! you guessed right number.");
}else{
console.log("you guessed wrong number");
}

