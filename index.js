// pulling employee's into this js
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
// modules 
const path = require('path');
const inquirer = require("inquirer");
const fs = require("fs")


const teamMembers = [];
const idArr = [];

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
} 

// make functions/prompts for Manager, Engineer, and Intern
// make sure unique id's and email's if possbile with Regx 

// make sure to push to teamMembers and idArr arrays after prompts with .then 

teamCreate;