// Using Employee constructor 
const Employee = require('../lib/Employee');

// Creates the Employee Object
test('Creates an employee object', () => {
    const employee = new Employee('Eli', 30, 'test@test.com');

    expect(employee.name).toEqual(expect.any(string));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

// Gets name from getName() method
test('Gets employee name', () => {
    const employee = new Employee('Eli', 30, 'test@test.com');

    expect(employee.getName()).toEqual(expect.any(String));
});

// Gets ID from getID() method
test('Gets employee ID', () => {
    const employee = new Employee('Eli', 30, 'test@test.com');

    expect(employee.getID()).toEqual(expect.any(Number));
});

// Gets email from getEmail() method
test('Gets employee email', () => {
    const employee = new Employee('Eli', 30, 'test@test.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

// Gets role from getRole() method
test('Gets role of employee', () => {
    const employee = new Employee('Eli', 30, 'test@test.com');

    expect(employee.getRole()).toEqual("Employee");
}); 