const Manager = require('../lib/Manager')

test('Creates a new manager object', () => {
    const testManager = new Manager('Ronald', 14, 'ronnie@gmail.com')

    expect(testManager.name).toBe(expect.any(String));
    expect(testManager.email).toBe(expect.any(String));
    expect(testManager.id).toEqual(expect.any(Number));
})