const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");
inquirer.registerPrompt('suggest', require('inquirer-prompt-suggest'));

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
        const { suggested } = await inquirer.prompt({
            type: 'suggest',
            name: 'kittenName',
            message: 'Enter a name for your kitten:',
            suggestions: ['MIT', 'EPL', 'CDDL', 'BSD', 'Ms-PL', 'GPL', 'Other'],
        });
        console.log(`what you have typed ${userName}, ${email}, ${url}, ${projectName}, ${description}, ${license}, ${command}!`);

        fs.writeFileSync("README.md", generateMarkdown(), function (err) {
            if (err) throw err;
        })

    } catch (err) {
        console.log(err);
    }
};