const Intern = require('../lib/Intern')

test('Creates a new intern object', () => {
    const testIntern = new Intern('Ronald', 14, 'ronnie@gmail.com')

    expect(testIntern.name).toBe(expect.any(String));
    expect(testIntern.email).toBe(expect.any(String));
    expect(testIntern.id).toEqual(expect.any(Number));
})