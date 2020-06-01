module.exports = {
    questions: [
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
    ]
}