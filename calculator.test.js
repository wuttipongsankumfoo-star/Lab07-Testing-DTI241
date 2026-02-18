// calculator.test.js

const { calculateGrade } = require('./calculateGrade');

// Happy path tests
test('score 90 should return A', () => {
    // Arrange
    const score = 90;
    // Act
    const result = calculateGrade(score);
    // Assert
    expect(result).toBe('A');
});

test('score 77 should return B+', () => {
    expect(calculateGrade(77)).toBe('B+');
});

test('score 30 should return F', () => {
    expect(calculateGrade(30)).toBe('F');
});

// Boundary value tests
test('boundary between A and B+', () => {
    expect(calculateGrade(80)).toBe('A');   // exactly at boundary
    expect(calculateGrade(79)).toBe('B+');  // just below
});

test('boundary between D and F', () => {
    expect(calculateGrade(50)).toBe('D');   // exactly at boundary
    expect(calculateGrade(49)).toBe('F');   // just below
});

// Edge cases
test('perfect score 100 should return A', () => {
    expect(calculateGrade(100)).toBe('A');
});

test('zero score should return F', () => {
    expect(calculateGrade(0)).toBe('F');
});

// Error cases
test('negative score should throw RangeError', () => {
    expect(() => calculateGrade(-1)).toThrow('Score must be between 0 and 100');
});

test('score over 100 should throw RangeError', () => {
    expect(() => calculateGrade(101)).toThrow(RangeError);
});

test('string score should throw TypeError', () => {
    expect(() => calculateGrade('ninety')).toThrow(TypeError);
});