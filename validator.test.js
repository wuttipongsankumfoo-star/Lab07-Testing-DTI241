const { validateEmail } = require('./validator');

test('valid simple email returns true', () => {
    expect(validateEmail("user@example.com")).toBe(true);
});

test('valid email with dots returns true', () => {
    expect(validateEmail("first.last@example.com")).toBe(true);
});

test('valid email with plus returns true', () => {
    expect(validateEmail("user+tag@example.com")).toBe(true);
});

test('missing @ sign returns false', () => {
    expect(validateEmail("userexample.com")).toBe(false);
});

test('missing domain returns false', () => {
    expect(validateEmail("user@")).toBe(false);
});

test('missing tld returns false', () => {
    expect(validateEmail("user@example")).toBe(false);
});

test('empty string returns false', () => {
    expect(validateEmail("")).toBe(false);
});

test('null input returns false', () => {
    expect(validateEmail(null)).toBe(false);
});

test('spaces in email returns false', () => {
    expect(validateEmail("user @example.com")).toBe(false);
});
