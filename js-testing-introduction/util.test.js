const {generateText, checkAndGenerate} = require('./util');

test('should output name and age - unit test', () => {
    const text = generateText('Priyanka', 33);
    expect(text).toBe('Priyanka (33 years old)');
});

test('should generate a valid text output integration test', () => {
    const  text = checkAndGenerate('Priyanka', 33);
    expect(text).toBe('Priyanka (33 years old)');
});

//TODO learn e2e testing using Puppeteer -,park it for future