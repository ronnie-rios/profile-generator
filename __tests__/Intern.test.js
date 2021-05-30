const Intern = require('../lib/Intern')

test('Creates a new intern object', () => {
    const testIntern = new Intern('Ronald', 14, 'ronnie@gmail.com')

    expect(testIntern.name).toBe(('Ronald'));
    expect(testIntern.email).toBe(('ronnie@gmail.com'));
    expect(testIntern.id).toEqual(expect.any(Number));
})