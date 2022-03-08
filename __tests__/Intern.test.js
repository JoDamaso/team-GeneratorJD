const Intern = require('../lib/Intern');

test('getRole() needs to be "Intern"', () => {
    const role = "Intern";
    const tester = new Intern("JD", 1, "test@test.com", 69);
    expect(tester.getRole()).toBe(role);
});

test('getId() needs to be a number', () => {
    const testId = 22;
    const tester = new Intern("JD", testId, "email@email.com", 69)
    expect(tester.getId()).toBe(testId);
});

test('name needs to be valid', () => {
    const nameTest = 'JD';
    const tester = new Intern(nameTest, 1, "test@test.com", 69)
    expect(tester.getName()).toBe(nameTest);
});

test('getSchool() must return school input', () => {
    const testSchool = 'UTA';
    const tester = new Intern("JD", 1, "test@test.com", testSchool);
    expect(tester.getSchool()).toBe(testSchool);
});