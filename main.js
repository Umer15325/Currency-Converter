#! /usr/bin/env node
// CURRENCY CONVERTER
// npx converter_15325
// Modules
import inquirer from "inquirer";
import chalk from "chalk";
// Code
const currencies = {
    USD: 1,
    EUR: 0.93,
    GBP: 0.80,
    PKR: 281.08,
    CNH: 7.26121,
    INR: 83.39,
    MYR: 4.73
};
let usersCurrency = await inquirer.prompt([
    {
        name: "users",
        message: chalk.cyan("Select the currency you have:"),
        type: "list",
        choices: ["USD", "EUR", "GBP", "PKR", "CNH", "INR", "MYR"]
    },
    {
        name: "convert_to",
        message: chalk.cyan("Select the currency in which you want to convert:"),
        type: "list",
        choices: ["USD", "EUR", "GBP", "PKR", "CNH", "INR", "MYR"]
    },
    {
        name: "amount",
        message: chalk.cyan("Enter your amount:") + " ",
        type: "number"
    }
]);
let fromCurrency = currencies[usersCurrency.users];
let toCurrency = currencies[usersCurrency.convert_to];
let inputAmount = usersCurrency.amount;
let baseAmount = inputAmount / fromCurrency;
let convertedAmount = baseAmount * toCurrency;
console.log(" ");
console.log(chalk.bgRed.greenBright(`${inputAmount} ${usersCurrency.users} in ${usersCurrency.convert_to} is equal to ${convertedAmount}`));
