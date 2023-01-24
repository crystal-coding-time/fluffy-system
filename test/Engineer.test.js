// Using Engineer constructor 
const Engineer = require('../lib/Engineer');

// Creates the engineer object
test('Creates an Engineer object', () => {
    const engineer = new Engineer('Eli', 30, 'test@test.com');

    expect(engineer.github) .toEqual(expect.any(String));
});

// Gets GitHub from getGitHub() method
test('Gets engineer github value', () => {
    const engineer = new Engineer('Eli', 30, 'test@test.com');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

// gets role from getRole() 
test('gets role of employee', () => {
    const engineer = new Engineer('Eli', 30, 'test@test.com', 'crystal-coding-time');

    expect(engineer.getRole()).toEqual("Engineer");
});