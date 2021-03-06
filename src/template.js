// function that returns license badge
const renderLicenseBadge = license => {
  if (license === 'Apache') {
    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  } else if (license === 'Boost') {
    return '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)';
  } else if (license === 'Eclipse') {
    return '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)';
  } else if (license === 'GNU GPL v3') {
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
  } else if (license === 'IBM') {
    return '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)';
  } else if (license === 'ISC') {
    return '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)';
  } else if (license === 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  } else if (license === 'Mozilla') {
    return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
  } else if (license === 'SIL') {
    return '[![License: Open Font-1.1](https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg)](https://opensource.org/licenses/OFL-1.1)';
  } else if (license === 'Unlicense') {
    return '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)';
  } else if (license === 'WTFPL') {
    return '[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)';
  } else if (license === 'Zlib') {
    return '[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)';
  } else if (license === 'none') {
    return '';
  };
};

// function that returns license link
const renderLicenseLink = license => {
  if (license === 'Apache') {
    return '[Apache](https://opensource.org/licenses/Apache-2.0)';
  } else if (license === 'Boost') {
    return '[Boost](https://www.boost.org/LICENSE_1_0.txt)';
  } else if (license === 'Eclipse') {
    return '[Eclipse](https://opensource.org/licenses/EPL-1.0)';
  } else if (license === 'GNU GPL v3') {
    return '[GNU GPL v3](https://www.gnu.org/licenses/gpl-3.0)';
  } else if (license === 'IBM') {
    return '[IBM](https://opensource.org/licenses/IPL-1.0)';
  } else if (license === 'ISC') {
    return '[ISC](https://opensource.org/licenses/ISC)';
  } else if (license === 'MIT') {
    return '[MIT](https://opensource.org/licenses/MIT)';
  } else if (license === 'Mozilla') {
    return '[Mozilla](https://opensource.org/licenses/MPL-2.0)';
  } else if (license === 'SIL') {
    return '[SIL](https://opensource.org/licenses/OFL-1.1)';
  } else if (license === 'Unlicense') {
    return '[Unlicense](http://unlicense.org/)';
  } else if (license === 'WTFPL') {
    return '[WTFPL](http://www.wtfpl.net/about/)';
  } else if (license === 'Zlib') {
    return '[Zlib](https://opensource.org/licenses/Zlib)';
  } else if (license === 'none') {
    return '';
  };
}

// function that returns license section of readme
const renderLicenseSection = license => {
  if (license === 'none') {
    return '';
  } else {
    return `
  ## License
   
  This application is covered under the ${renderLicenseLink(license)} license.
    `;
  };
};

// function that generates readme template
module.exports = data => {
  return `
  # ${data.title} | ${renderLicenseBadge(data.license)}
  ## About the Project:
      
  ${data.description}
      
  ## Table of Contents
      
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribute](#contribute)
  - [Testing](#tests)
  - [Questions](#questions)
  <a name="installation"></a>
  ## Installation:
      
  ${data.installation}
  <a name="usage"></a>
  ## Usage Information:
      
  ${data.usage} 
  ${renderLicenseSection(data.license)}
  <a name="contribute"></a>
  ## How to Contribute:
      
  ${data.contributing}
  <a name="tests"></a>
  ## Tests:
      
  ${data.tests}
  <a name="questions"></a>
  ## Questions?
  Contact me via [Github](https://github.com/${data.github}) or Email: <${data.email}>

`;
}


