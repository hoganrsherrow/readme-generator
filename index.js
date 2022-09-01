// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const createFile = require('./utils/create-file.js');
// TODO: Create an array of questions for user input
const promptUser = () => {
    return inquirer.prompt([{
            type: 'input',
            name: 'title',
            message: 'What is the title of your application?',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter a title for your application.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please provide a description of your application.',
            validate: description => {
                if (description) {
                    return true;
                } else {
                    console.log('Please enter a description.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Please provide your installation instructions',
            validate: installation => {
                if (installation) {
                    return true;
                } else {
                    console.log('Please input installation instructions');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please provide usage instructions for your application',
            validate: usage => {
                if (usage) {
                    return true;
                } else {
                    console.log('Please input usage instructions');
                }
            }
        },
        {
            type: 'list',
            name: 'license',
            message: 'Please choose your distribution license.',
            choices: ['MIT', new inquirer.Separator(), 'GNU AGPLv3', new inquirer.Separator(), 'Apache 2.0', new inquirer.Separator(), 'Mozilla Public License']
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Please enter your contribution guidelines',
            validate: contribution => {
                if (contribution) {
                    return true;
                } else {
                    console.log('Please input your contribution guidlines.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Please provide testing information',
            validate: tests => {
                if (tests) {
                    return true;
                } else {
                    console.log('Please input testing information for your application.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'githubUsername',
            message: 'Please provide your Github username.',
            validate: githubUsername => {
                if (githubUsername) {
                    return true;
                } else {
                    console.log('Please input your Github username.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please provide your email address',
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log('Please provide your email address.');
                    return false;
                }
            }
        }
    ])
};

// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
//function init() {}
promptUser()
    .then(generateMarkdown)
    .then(createFile);
// Function call to initialize app
// init();