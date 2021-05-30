const Manager = require('../lib/Manager')

test('Creates a new manager object', () => {
    const testManager = new Manager('Ronald', 14, 'ronnie@gmail.com')

    expect(testManager.name).toBe(('Ronald'));
    expect(testManager.email).toBe(('ronnie@gmail.com'));
    expect(testManager.id).toEqual(expect.any(Number));
})