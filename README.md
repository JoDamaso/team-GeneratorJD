# team-GeneratorJD
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)

## Description
My incentive to build this project was to further my knowledge of node.js. With also wanting to understand more OOP(Object-Oriented-Programming). There are also tests that I have ran
using an npm module Jest.

### Table of Contents 
 - [Installation](#installation)
 - [Usage](#usage)
 - [Preview](#preview)
 - [License](#license)
 - [Credits](#credits)
 - [Questions](#questions)
 - [User Story](#user-story)
    - [Acceptance Criteria](#acceptance-criteria)
---
## Installation 
 1. Locate the **Green** 'Code' button towards the top of the repo. Copy the SSH key, clone down the repo to your machine.
 ```
  git clone <INSERT_SSH_KEY_HERE> 
  ```
 2. Install the dependencies that were used.
 ```
  npm install
 ```
 3. From there, you'll be able to run the command **'node index.js'** inside the terminal.

## Usage 
  - Run the command inside the terminal, **'node index.js'**.
  - You will then be prompted with question pertaining to your employee's.
  - After the questions have been fufilled, a **'team.html'** will be generated.
  - From there you can view you inputted answers with cards pertaining to your team members.
  - Aside from being homework from my Bootcamp, it's soley meant to be benchmark to where I am at in this current moment of coding!

## Preview
![Preview](https://media.discordapp.net/attachments/763615031438606337/950639195465084948/unknown.png?width=919&height=469)

## License 
This project is under the license of **ISC**.

## Credits
UT Austin Coding Boot Camp https://techbootcamps.utexas.edu/coding/ <br>
Dominque Akers https://github.com/Dommy99 <br>
Inquirer https://www.npmjs.com/package/inquirer <br>
Jest https://www.npmjs.com/package/jest <br>

## Questions
If you have questions about this project, please email me at darryldamaso@gmail.com. If you'd like to see more of my projects, you can see them here - https://github.com/jodamaso.

---
## User Story
```
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles
```

## Acceptance Criteria 
```
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
```