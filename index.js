#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from 'chalk-animation';
async function welcome() {
    let name = chalkAnimation.rainbow("\nwelcom to Initiate a transaction\n");
    await new Promise((resolve) => {
        setTimeout(resolve, 1000);
    });
    name.stop();
}
await welcome();
let myBalance = 10000;
let myPin = 2244;
let pinAnswer = await inquirer.prompt([{
        name: "Pin",
        type: "number",
        message: "Enter your pin",
    }]);
if (pinAnswer.Pin === myPin) {
    console.log("Correct pin code!!!");
    let OperationAns = await inquirer.prompt([{
            name: "Operation",
            type: "list",
            message: "Please select an option",
            choices: ["WithDraw", "CheckBalance", "FastCash"],
        }
    ]);
    if (OperationAns.Operation === "WithDraw") {
        let amountAns = await inquirer.prompt([{
                name: "Amount",
                type: "number",
                message: "Enter your Amount",
            }]);
        myBalance -= amountAns.Amount;
        if (amountAns.Amount > myBalance) {
            console.log("Insufficient Balance");
        }
        else {
            console.log(`your remaining balance is ${myBalance}`);
        }
    }
    else if (OperationAns.Operation === "CheckBalance") {
        console.log(`Your balance is ${myBalance}`);
    }
    else if (OperationAns.Operation === "FastCash") {
        let fastCashAns = await inquirer.prompt([{
                name: "Fastcash",
                type: "list",
                message: "Please select your amount",
                choices: [5000, 10000, 15000, 20000],
            }]);
        myBalance -= fastCashAns.Fastcash;
        if (fastCashAns.Fastcash > myBalance) {
            console.log("Insufficient Balance");
        }
        else {
            console.log(`your remaining balance is ${myBalance}`);
        }
    }
}
else {
    console.log("Incorrect pin code");
}
console.log(chalk.greenBright.bold("\nThanks for using this ATM\n"));
