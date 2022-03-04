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
            {
                type: "input",
                name: "managerName",
                message: "What is your Manager's name you'd like to add?",
                validate: nameInput => {
                    if (!nameInput == ""){
                        return true;
                    } return "Please enter atleast a letter"
                }
            }
        ])
} 

// make functions/prompts for Manager, Engineer, and Intern
// make sure unique id's and email's if possbile with Regx 

// make sure to push to teamMembers and idArr arrays after prompts with .then 

teamCreate;