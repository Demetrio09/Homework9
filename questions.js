const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");
inquirer.registerPrompt('suggest', require('inquirer-prompt-suggest'));

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
    return inquirer
        .prompt([
            {
                type: "input",
                message: "What is your GitHub username?",
                name: "userName"
            },
            {
                type: "input",
                message: "What is your email?",
                name: "email"
            },
            {
                type: "input",
                message: "the URL to your project?",
                name: "projectURL"
            },
            {
                type: "input",
                message: "What is your project's name?",
                name: "projectName"
            },
            {
                type: "input",
                message: "Please write a short description of your project:",
                name: "description"
            },
            {
                type: "suggest",
                message: "What kind of license should your project have?",
                suggestions: ['MIT', 'EPL', 'CDDL', 'BSD', 'Ms-PL', 'GPL', 'Other'],
                name: "license"
            },
            {
                type: "suggest",
                message: "What command should be run to install dependencies?",
                suggestions: ["npm i"],
                name: "dependenciesCommand"
            },
            {
                type: "suggest",
                message: "What command should be run tests",
                suggestions: ["npm test"],
                name: "testsCommand"
            },
            {
                type: "input",
                message: "What does the user need to know about using the repo?",
                name: "repoInfo"
            },
            {
                type: "input",
                message: "What does the user need to know about contributing to the repo?",
                name: "contributing"
            }
        ]);
}

function generateMarkdown(answers) {
    return `
# ${answers.userName}
![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)${answers.projectURL}

## Description
${answers.description}

## Table of Contents

* [Instalation](#instaltion)

* [Usage](#usage)

* [License](#License)

* [Contriburing](#contributing)

* [Tests](#tests)

* [Questions](#questions)

## Instalation
To install necessary dependencies, run the following command:

\`\`\`
${answers.dependenciesCommand}
\`\`\`

## Usage
${answers.repoInfo}

## License
This project is licensed under the ${answers.license} license.

## Contributing
${answers.contributing}

## Tests
To run tests, run the following command:

\`\`\`
${answers.testsCommand}
\`\`\`

## Questions
If you have any questions about the repo, open an issue or contact [${answers.userName}](undefined) directly at [${answers.email}](undefined).`;
}

async function init() {
    console.log("Welcome to your good README Generator! Please fill out the questions bellow:");
    try {
        const answers = await promptUser();

        const mkdText = generateMarkdown(answers);

        await writeFileAsync("README.md", mkdText);

        console.log("Successfully generated your README file!");
    } catch (err) {
        console.log(err);
    }
}

init();
