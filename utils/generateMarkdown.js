// function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}
  
  ## Description
    ${data.Description}
  
  
  ## Table of Contents
   * [Installation](#Installation)
   * [Usage](#usage)
   * [License](#license)
   * [Author](#author)
   * [Contribution/Questions](#contribution/questions)
    
  # Installation
    ${data.Installation}
  
  # Usage
    ${data.Usage}
  
  # License
    ${data.License}
  
  # Author
    ${data.Author}
  
  # Contribution/Questions
    ${data.Contact}
    `;
  }
  
  module.exports = generateMarkdown;
  