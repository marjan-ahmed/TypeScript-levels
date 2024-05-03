// importing our built in module
import inquirer from "inquirer";

const questions = await inquirer.prompt([
    {
        name: "name",
        type: "input",
        message: "What is your name?"
    },
    {
        name: "age",
        type: "number",
        message: "How old are you?"
    }
]);

console.log(`Your name is ${questions.name}`);
console.log(`Your age is ${questions.age}`);