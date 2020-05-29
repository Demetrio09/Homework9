const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");
const generateMarkdown = require(".generateMarkdown.js");

genereteReadme();

async function genereteReadme() {
    try {
        const { userName } = await inquirer.prompt({
            message: "What is your GitHub username?",
            name: "userName"
        });
        const { email } = await inquirer.prompt({
            message: "What is your email?",
            name: "email"
        });
        const { url } = await inquirer.prompt({
            message: "the URL to your project?",
            name: "url"
        });
        const { projectName } = await inquirer.prompt({
            message: "What is your project's name?",
            name: "projectName"
        });
        const { description } = await inquirer.prompt({
            message: "Please write a short description of your project",
            name: "description"
        });
        const { license } = await inquirer.prompt({
            type: "autocomplete",
            message: "What kind of license should your project have?",
            name: "license"
        });
        const { command } = await inquirer.prompt({
            type: "autocomplete",
            message: "What command should be run to install dependencies?",
            name: "command"
        });
        console.log(`what you have typed ${userName}, ${email}, ${url}, ${projectName}, ${description}, ${license}, ${command}!`);

        generateMarkdown(userName, email, url, projectName, description, license, command);

    } catch (err) {
        console.log(err);
    }
};