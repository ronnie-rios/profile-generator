const Engineer = require('../lib/Engineer')

test('Creates a new engineer object', () => {
    const testEngineer = new Engineer('Ronald', 14, 'ronnie@gmail.com')

    expect(testEngineer.name).toBe(('Ronald'));
    expect(testEngineer.email).toBe(('ronnie@gmail.com'));
    expect(testEngineer.id).toEqual(expect.any(Number));
})