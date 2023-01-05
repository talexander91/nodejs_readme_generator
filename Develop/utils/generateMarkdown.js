// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "none") {
    return `![GitHub License](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "none") {
    return `- [License](#license)`;
  }
  return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "none") {
    return `## License
    
    This project is under the ${license} license.`;
  }
  return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  #Description

  ${data.description}

  #Table of Contents

  - [Installation]
  - [Usage]
  ${renderLicenseLink(data.license)}
  - [Questions]

  ##Installation

  To Install dpendancies, run the command: ${data.installation}

  ##Usage

  ${data.usage}
  
  ${renderLicenseSection(data.license)}

  ##Questions

  If you have questions about this repo, you can contact me at:${
    data.email
  }. 
  You can find my github at [${data.github}](https://github.com/${data.github}/).



`;
}

module.exports = generateMarkdown;
