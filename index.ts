import inquirer from "inquirer"; 
import chalk from "chalk";
console.log(chalk.bold.yellow.italic("********************* QUIZ TEST ********************"));

let answersOne = await inquirer.prompt(
    [
        {
            name : "q1",
            message : "What is TypeScript?",
            type : "list",
            choices : [" A JavaScript framework","B superset of JavaScrip","C database management system","D programming language"]
        }
       
    ]
)
if(answersOne.q1 == "B superset of JavaScrip") {
    console.log(chalk.bold.green(`${answersOne.q1}: Is The Correct Answer`));

}else{console.log(chalk.bold.red(`!Wrong Answer`))}
let answerTwo = await inquirer.prompt(
    [
        {
            name :"q2",
            message : "What extension is used for TypeScript files?",
            type :"list",
            choices:["a) .js","b) .ts","c) .txt","d) .html"]
        }
    ]
)
if (answerTwo.q2 == "b) .ts" ){
    console.log(chalk.bold.green(`${answerTwo.q2}: Is The Correct Answer `));
    
}else{
    console.log(chalk.red.bold(`!Wrong Answer`));
    
}
let answerThree = await inquirer .prompt(
    [
        {
            name: "q3",
            message :"How do you declare a variable in TypeScript?",
            type :"list",
            choices :["var","let","const","Both b and c"]
        }
    ]
)
if(answerThree.q3 == "Both b and c"){
    console.log(chalk.bold.green(`${answerThree.q3}: Is The Correct Answer`));
    
}else {
    console.log(chalk.red.bold(`!Wrong Answer`));
    
}
let q4 = " number, string, boolean, null, undefined"

let answerFour = await inquirer.prompt(
    [
        {
            name : "q4",
            type:"list",
            message :"What are the basic data types in TypeScript",
            choices : ["number, string, boolean, array","har, double, boolean, void"," number, string, boolean, null, undefined","int, float, string, bool"]
        }
    ]
)
if (answerFour.q4 == " number, string, boolean, null, undefined") {  
      console.log(chalk.bold.green(`${answerThree.q3}: Is The Correct Answer`));
    
}else {
    console.log(chalk.red.bold(`!Wrong Answer`));
    
}
let answerFive = await inquirer.prompt(
    [
        {
            name :"q5",
            type :"list",
            message : 'How do you define a function in TypeScript?',
            choices :["function myFunction() {}"," let myFunction = function() {}","const myFunction = () => {}"," All of the above"]
        }
    ]
)
if(answerFive.q5 == " All of the above"){ 
     console.log(chalk.bold.green(`${answerFive.q3}: Is The Correct Answer`));
    
}else {
    console.log(chalk.red.bold(` Wrong Answer`));
    
}