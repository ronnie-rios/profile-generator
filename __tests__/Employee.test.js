const Employee = require('../lib/Employee')

test('Creates a new employee object', () => {
    const testEmployee = new Employee('Ronald', 14, 'ronnie@gmail.com')

    expect(testEmployee.name).toBe(('Ronald'));
    expect(testEmployee.email).toBe(('ronnie@gmail.com'));
    expect(testEmployee.id).toEqual(expect.any(Number));
})

