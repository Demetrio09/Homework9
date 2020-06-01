const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");
const { questions } = require("./data.js")
inquirer.registerPrompt('suggest', require('inquirer-prompt-suggest'));

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
    return inquirer.prompt(questions);
};

const generateMarkdown = require("./generateMarkdown.js");

async function init() {
    console.log("Welcome to your good README Generator! Please fill out the questions bellow:");
    try {
        const answers = await promptUser();

        const mkdText = generateMarkdown(answers);

        await writeFileAsync("README.md", mkdText);

        console.log("Successfully created your README file!");
    } catch (err) {
        console.log(err);
    }
}

init();
