const Engineer = require('../lib/Engineer')

test('Creates a new engineer object', () => {
    const testEngineer = new Engineer('Ronald', 14, 'ronnie@gmail.com')

    expect(testEngineer.name).toBe(expect.any(String));
    expect(testEngineer.email).toBe(expect.any(String));
    expect(testEngineer.id).toEqual(expect.any(Number));
})