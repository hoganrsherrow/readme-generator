// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const { title, description, installation, usage, license, contribution, tests, githubUsername, email} = data;
  //console.log(`${title} is described by "${description}".`);
    return `# ${title}

## Description
${description}

## Table of Contents
 - [Installation](#installation)
 - [Usage](#usage)
 - [License](#license)
 - [Contributing](#contributing)
 - [Tests](#tests)
 - [Questions](#Questions)

## Installation
${installation}

## Usage
${usage}

## License
${license}

## Contributing
${contribution}
## Tests
${tests}
## Questions
 * For any further questions, you may reach out by emailing [${email}](${email}).
 * [@${githubUsername}](www.https://github.com/${githubUsername})`;
}

module.exports = generateMarkdown;