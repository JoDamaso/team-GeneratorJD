const Employee = require("../lib/Employee");

// tests to see if Employee is a created object
test("Employee is an object created", () => {
    const tester = new Employee;
    expect(typeof(tester)).toBe("object");
});