// pulling from class Employee
const Employee = require('./Employee');

// Manager class that uses 'extends' and 'super'
class Manager extends Employee{
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    };
    // don't know if these 3 need to be here other than role and officeNumber
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
        return "Manager"
    };
    getOfficeNumber() {
        return this.officeNumber;
    };
};

// Sending class Manager 
module.exports = Manager