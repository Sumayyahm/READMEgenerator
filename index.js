const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
      },
      {
        type: "input",
        name: "Description",
        message: "Write a description"
      },
      {
        type: "input",
        name: "Installation",
        message: "Provide installation instructions"
      },
      {
        type: "input",
        name: "Usage",
        message: "Describe the usage"
      },

      {
        type: "list",
        message: "Choose your license",
        name: "License",
        choices : [
            "MIT License",
            "GPL 3.0",
            "APACHE 2.0",
            "MS-PL",
            "WTFPL",
            "None"
        ]
      },
      {
        type: "input",
        name: "Author",
        message: "Who is the author"
      },
      {
        type: "input",
        name: "Contact",
        message: "How can a user contribute or report issues? Provide contact information"
      }
];

// function to write README file
function writeToFile(filename, data) {
    fs.writeFile(filename, data, function(err){
        if (err) {
            return console.log(err);
          }
        
          console.log("Successfully created a README.md");
    });
    
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
    .then(function(answers) {
        const readme = generateMarkdown(answers);
        writeToFile("README.md", readme);
    });


}

// function call to initialize program
init();
