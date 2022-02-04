// TODO: Include packages needed for this application
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the name of your project? (Required)',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter the name of your project.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter a description of your project. (Required)',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Please enter a description of your project.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Enter installation instructions for your project. (Required)',
            validate: installationInput => {
                if (installationInput) {
                    return true;
                } else {
                    console.log('Please provide installation instructions.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Enter usage information for your project. (Required)',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter usage information.');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'contributingConfirm',
            message: 'Would you like to allow others to contribute to this project?',
            default: 'false'
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Enter instructions for contributors. (Required)',
            when: ({contributingConfirm}) => {
                if (contributingConfirm) {
                    return true;
                } else {
                    return false;
                }
            },
            validate: contributingInput => {
                if (contributingInput) {
                    return true;
                } else {
                    console.log('Please enter contributing instructions.');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'testsConfirm',
            message: 'Would you like to provide tests for your application?',
            default: false
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Write tests for your application with instructions on running them. If you have none, refer users to the "Usage" section above.',
            when: ({testsConfirm}) => {
                if (testsConfirm) {
                    return true;
                } else {
                    return false;
                }
            },
            validate: testsInput => {
                if (testsInput) {
                    return true;
                } else {
                    console.log('Please enter testing information.');
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'license',
            message: 'What license are you using for your project?',
            choices: ['Apache', 'Boost', 'Eclipse', 'GNU GPL v3', 'IBM', 'ISC', 'MIT', 'Mozilla', 'SIL', 'Unlicense', 'WTFPL', 'Zlib', 'none']
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub username? (Required)',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Please enter your GitHub username.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address? (Required)',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter your email address.');
                    return false;
                }
            }
        }
    ]);
};

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();

promptUser();
