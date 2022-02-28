// pulling from class Employee
const Employee = require('./Employee');

// Intern class that uses 'extends' and 'super'
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
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
        return "Intern"
    };
    getSchool() {
        return this.school;
    };
};

// Sending class Intern
module.exports = Intern;