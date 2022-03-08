const Employee = require("../lib/Employee");

test('getRole() needs to be "Employee"', () => {
    const role = "Employee";
    const tester = new Employee("JD", 1, "test@test.com", 69);
    expect(tester.getRole()).toBe(role);
});

test('getId() needs to be a number', () => {
    const testId = 22;
    const tester = new Employee("JD", testId, "email@email.com", 69)
    expect(tester.getId()).toBe(testId);
});

test('name needs to be valid', () => {
    const nameTest = 'JD';
    const tester = new Employee(nameTest, 1, "test@test.com", 69)
    expect(tester.getName()).toBe(nameTest);
});

test('email is returned', () => {
    const testEmail = "jd@jd.com";
    const tester = new Employee("JD", 1, testEmail, 69);
    expect(tester.getEmail()).toBe(testEmail);
});

// tests to see if Employee is a created object
test("Employee is an object created", () => {
    const tester = new Employee;
    expect(typeof(tester)).toBe("object");
});