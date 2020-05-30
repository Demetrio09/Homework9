const fs = require("fs");
const answers = require("./questions.js");

const { userName } = answers;
const { email } = answers;
const { projectURL } = answers;
const { projectName } = answers;
const { description } = answers;
const { license } = answers;
const { dependenciesComand } = answers;
const { testsCommand } = answers;
const { repoInfo } = answers;
const { contributing } = answers;

function generateMarkdown(answers) {
  return `
  # -user input / Title ${userName}
  ![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)https://github.com/Demetrio09/Project-1

  ## Description
  ${description}
  -user input
  
  ## Table of Contents
  
  * [Instalation](#instaltion)
  
  * [Usage](#usage)
  
  * [License](#License)
  
  * [Contriburing](#contributing)
  
  * [Tests](#tests)
  
  * [Questions](#questions)
  
  ## Instalation
  To install necessary dependencies, run the following command:
  
  \```
  npm i / user input
  \```
  
  ## Usage
  [user input]
  
  ## License
  This project is licensed under the /-user input/ license.
  
  ## Contributing
  [user input - shoot me a text]
  
  ## Tests
  To run tests, run the following command:
  
  \```
  npm test [-user input]
  \```
  
  ## Questions
  If you have any questions about the repo, open an issue or contact [-user input /username](undefined) directly at [${email}-user input / email](undefined).
`;
};

const readmeTxt = generateMarkdown(answers);

console.log(readmeTxt);

fs.writeFile("read.txt", readmeTxt, function (err) {
  if (err) throw err
})

// async function init() {
//   console.log("hi")
//   try {
//     const answers = await promptUser;

//     const readme = generateMarkdown(answers);

//     await writeFileAsync("index.html", readme);

//     console.log("Successfully wrote to index.html");
//   } catch(err) {
//     console.log(err);
//   }
// }

// init();