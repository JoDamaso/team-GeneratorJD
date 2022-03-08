const Engineer = require('../lib/Engineer');

test('getRole() needs to be "Engineer"', () => {
    const role = "Engineer";
    const tester = new Engineer("JD", 1, "test@test.com", 69);
    expect(tester.getRole()).toBe(role);
});

test('getId() needs to be a number', () => {
    const testId = 22;
    const tester = new Engineer("JD", testId, "email@email.com", 69)
    expect(tester.getId()).toBe(testId);
});

test('name needs to be valid', () => {
    const nameTest = 'JD';
    const tester = new Engineer(nameTest, 1, "test@test.com", 69)
    expect(tester.getName()).toBe(nameTest);
});

test('getSchool() must return school input', () => {
    const testGithub = 'UTA';
    const tester = new Engineer("JD", 1, "test@test.com", testGithub);
    expect(tester.getGithub()).toBe(testGithub);
});