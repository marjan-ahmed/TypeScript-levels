import inquirer from "inquirer";

const bmiFinder = await inquirer.prompt([
    {
        name: "userWeight",
        type: "number",
        message: "Enter your Weight (Kg):"
    },
    {
        name: "userHeight",
        type: "number",
        message: "Enter your Height:"
    }
]);

const calculate = bmiFinder.userWeight / bmiFinder.userHeight ** 2;
console.log(calculate);