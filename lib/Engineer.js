// pulling from class Employee
const Employee = require('./Employee');

// Engineer class that uses 'extends' and 'super'
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    };
    // don't know if these 3 need to be here other than role and school
    getName() {
        return this.name;
    };
    getId() {
        return this.id;
    };
    getEmail() {
        return this.email;
    };
    getRole() {
        return "Engineer"
    };
    getGithub() {
        return this.github;
    };
};

// Sending class Intern
module.exports = Engineer;