// pulling employee's into this js
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
// modules 
const path = require('path');
const inquirer = require("inquirer");
const fs = require("fs")

// empty array's we push to after creating a team member
const teamMembers = [];
const idArr = [];

// start of our functions
function teamCreate () {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'members',
                message: 'Which member would you like to add to your team?',
                choices: ["Manager", "Engineer", "Intern", "I would not like to choose anymore members!"]
            }
        ]).then(employeeChoice => {
            switch (employeeChoice.members) {
                case "Manager":
                    addManager();
                    break;
                    case "Engineer":
                        addEngineer();
                        break;
                        case "Intern":
                            addIntern();
                            break;
            }
        });
};

function addManager() {
    inquirer
        .prompt([
            {  // manager name 
                type: "input",
                name: "managerName",
                message: "What is your Manager's name you'd like to add?",
                validate: nameInput => {
                    if (!nameInput == ""){
                        return true;
                    } else {
                        console.log("Please enter atleast a letter");
                        return false;
                    } 
                }
            },
            { // manager ID
                type: "input",
                name: "managerId",
                message: "What is your Manager's ID Number?",
                // validate with reg expression
            },
            { // manager office number
                type: "input",
                name: "managerRoomNumber",
                message: "What is your Manager's office number?",
                // validate with reg expression
            },
            { // manager email
                type: "input",
                name: "managerEmail",
                message: "What is your Manager's email?",
                validate: emailInput => {
                    if (!emailInput == "") {
                        return true;
                    } else {
                        console.log("Please input an email for your Manager");
                        return false;
                    }
                }
            }
        ]).then (inputs => {
            const manager = new Manager(inputs.managerName, inputs.managerId, inputs.managerEmail, inputs.managerRoomNumber);
            teamMembers.push(manager);
            idArr.push(inputs.managerId);
            teamCreate();
        })
};

function addEngineer() {
    inquirer
        .prompt([
            {  // engineer name 
                type: "input",
                name: "engineerName",
                message: "What is your Engineer's name you'd like to add?",
                validate: nameInput => {
                    if (nameInput !== ""){
                        return true;
                    } else {
                        console.log("Please enter atleast a letter");
                        return false;
                    } 
                }
            },
            { // Engineer ID
                type: "input",
                name: "engineerId",
                message: "What is your Engineer's ID Number?",
                // validate with reg expression
            },
            { // Engineer github
                type: "input",
                name: "engineerGithub",
                message: "What is your Engineer's github account?",
                validate: nameInput => {
                    if (!nameInput == "") {
                        return true;
                    } else {
                        console.log("Please enter the Engineer's github account");
                        return false;
                    }
                }
            },
            { // Engineer email
                type: "input",
                name: "engineerEmail",
                message: "What is your Engineer's email?",
                validate: emailInput => {
                    if (emailInput !== "") {
                        return true;
                    } else {
                        console.log("Please input an email for your Engineer");
                        return false;
                    }
                }
            }
        ]).then (inputs => {
            const engineer = new Engineer(inputs.engineerName, inputs.engineerId, inputs.engineerEmail, inputs.engineerGithub);
            teamMembers.push(engineer);
            idArr.push(inputs.engineerId);
            teamCreate();
        })
};

function addIntern() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "internName",
                message: "What is your Intern's name you'd like to add?",
                validate: nameInput => {
                    if (nameInput !== ""){
                        return true;
                    } else {
                        console.log("Please enter atleast a letter");
                        return false;
                    } 
                }
            },
            {
                type: "input",
                name: "internId",
                message: "What is your Intern's ID?",
                //validate with reg expression
            },
            {
                type: "input",
                name: "internSchool",
                message: "What school does your Intern currently attend?",
                validate: nameInput => {
                    if (nameInput !== "") {
                        return true;
                    } else {
                        console.log("Please enter what school your intern goes to")
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "internEmail",
                message: "What is your Intern's email?",
                validate: emailInput => {
                    if (emailInput !== "") {
                        return true;
                    } else {
                        console.log("Please input an email for your Intern");
                        return false;
                    }
                }
            }
        ]).then (inputs => {
            const intern = new Intern(inputs.internName, inputs.internId, inputs.internEmail, inputs.internSchool);
            teamMembers.push(intern);
            idArr.push(inputs.internId);
            teamCreate();
        });
};

teamCreate;