// Using Employee constructor 
const Employee = require('../lib/Employee');

// Creates the Employee Object
test('Creates an employee object', () => {
    const employee = new Employee('Eli', 30, 'test@test.com');

    expect(employee.name).toEqual(expect.any(string));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});
