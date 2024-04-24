import inquirer from "inquirer";
const bmiFinder = await inquirer.prompt([
    {
        name: "userWeight",
        type: "number",
        message: "Enter your weight (Kg):"
    },
    {
        name: "userHeight",
        type: "number",
        message: "Enter your height:"
    }
]);
const calculate = bmiFinder.userWeight / bmiFinder.userHeight ** 2;
console.log(calculate);
