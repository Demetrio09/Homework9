module.exports =
    function generateMarkdown(answers) {
        return `
# ${answers.userName}
![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)

Project URL: ${answers.projectURL}

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