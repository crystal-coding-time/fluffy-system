// Uses Manager constructor 
const Manager = require('../lib/Manager');

// Creating Manager object  
test('creates an Manager object', () => {
    const manager = new Manager('Eli', 30, 'test@test.com');
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

// Gets role from getRole() method
test('gets role of employee', () => {
    const manager = new Manager('Eli', 30, 'test@test.com');

    expect(manager.getRole()).toEqual("Manager");
}); 