import { calculatePasswordStrength } from '../src/password-strength';

describe('calculatePasswordStrength', () => {

    test('Very Weak: short password without symbols', () => {
        expect(calculatePasswordStrength('abc')).toBe('Very Weak');
    });

    test('Very Weak: only numbers, short', () => {
        expect(calculatePasswordStrength('1234')).toBe('Very Weak');
    });

    test('Weak: 8 characters, only numbers and letters', () => {
        expect(calculatePasswordStrength('abc12345')).toBe('Weak');
    });

    test('Moderate: includes uppercase', () => {
        expect(calculatePasswordStrength('Abc12345')).toBe('Moderate');
    });

    test('Strong: includes special characters', () => {
        expect(calculatePasswordStrength('Abc12345!')).toBe('Strong');
    });

    test('Strong: long, all types of characters', () => {
        expect(calculatePasswordStrength('P@ssw0rdStrong123!')).toBe('Strong');
    });

    test('Very Weak: empty password', () => {
        expect(calculatePasswordStrength('')).toBe('Very Weak');
    });

    test('Weak: length 12, lowercase only', () => {
        expect(calculatePasswordStrength('abcdefghijkz')).toBe('Weak');
    });

    test('Moderate: length 12, numbers and lowercase', () => {
        expect(calculatePasswordStrength('abc123def456')).toBe('Moderate');
    });

    test('Strong: length 12, letters of all cases and special characters', () => {
        expect(calculatePasswordStrength('Abcdef123!@#')).toBe('Strong');
    });

});