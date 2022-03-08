const Manager = require("../lib/Manager");

test('getRole() needs to be "Manager"', () => {
    const role = "Manager";
    const tester = new Manager("JD", 1, "test@test.com", 69);
    expect(tester.getRole()).toBe(role);
});

test('getId() needs to be a number', () => {
    const testId = 22;
    const tester = new Manager("JD", testId, "email@email.com", 69)
    expect(tester.getId()).toBe(testId);
});

test('name needs to be valid', () => {
    const nameTest = 'JD';
    const tester = new Manager(nameTest, 1, "test@test.com", 69)
    expect(tester.getName()).toBe(nameTest);
});

test('office number is valid', () => {
    const testOffice = 100;
    const tester = new Manager("JD", 1, "test@test.com", testOffice);
    expect(tester.getOfficeNumber()).toBe(testOffice);
});

test('email is returned', () => {
    const testEmail = "jd@jd.com";
    const tester = new Manager("JD", 1, testEmail, 69);
    expect(tester.getEmail()).toBe(testEmail);
});