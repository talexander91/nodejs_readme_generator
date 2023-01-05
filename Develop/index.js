// TODO: Include packages needed for this application
const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of this project?",
  },
  {
    type: "input",
    name: "description",
    message: "Give a description of the project.",
  },
  {
    type: "input",
    name: "installation",
    message: "What command is used to install dependancies?",
    default: "npm i",
  },
  {
    type: "input",
    name: "usage",
    message: "What should be known about using the repo?",
  },
  {
    type: "list",
    name: "license",
    message: "What license should the project have?",
    choices: ["MIT", "Apache 2.0", "GPL 3.0", "None"],
  },
  {
    type: "input",
    name: "email",
    message: "What is your email?",
  },
  {
    type: "input",
    name: "github",
    message: "What is your GitHub Username?",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((inquirerResponse)=> {
    console.log("Generating README");
    writeToFile("README.md", generateMarkdown({...inquirerResponse}));
  });
}

// Function call to initialize app
init();
