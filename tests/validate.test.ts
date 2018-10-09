import { Validate } from "../src/validate";

describe('validate', () => {
    let validate: any;
    let result: boolean;

    beforeEach(() => {
        validate = new Validate();
    });

    describe('isString', () => {
        test('returns true when value is string', () => {
            result = validate.isString('foo');
            expect(result).toBe(true);
        });

        test('returns false when value is not string', () => {
            result = validate.isString(123);
            expect(result).toBe(false);
        });
    });

    describe('isNumber', () => {
        test('returns true when value is number', () => {
            result = validate.isNumber(123);
            expect(result).toBe(true);
        });

        test('returns false when number is passed as string', () => {
            result = validate.isNumber('123');
            expect(result).toBe(false);
        });

        test('returns true when number is passed as string and strict is set to false', () => {
            result = validate.isNumber('123', false);
            expect(result).toBe(true);
        });

        test('returns false when value is not number and strict is set to false', () => {
            result = validate.isNumber('foo', false);
            expect(result).toBe(false);
        });
    });

    describe('isInteger', () => {
        test('returns true when value is integer', () => {
            result = validate.isInteger(123);
            expect(result).toBe(true);
        });

        test('returns false when value is a floating point number', () => {
            result = validate.isInteger(12.3);
            expect(result).toBe(false);
        });

        test('returns true when integer is passed as string and strict is set to false', () => {
            result = validate.isInteger('123', false);
            expect(result).toBe(true);
        });

        test('returns false when floating point number is passed as string and strict is set to false', () => {
            result = validate.isInteger('12.3', false);
            expect(result).toBe(false);
        });
    });

    describe('isObject', () => {
        test('returns true when value is JSON object', () => {
            result = validate.isObject({});
            expect(result).toBe(true);
        });

        test('returns false when value is JSON array', () => {
            result = validate.isObject([]);
            expect(result).toBe(false);
        });

        test('returns true when passed stirng that can be parsed to JSON object and strict is set to false', () => {
            result = validate.isObject('{}', false);
            expect(result).toBe(true);
        });

        test('returns false when passed stirng that can be parsed to JSON array and strict is set to false', () => {
            result = validate.isObject('[]', false);
            expect(result).toBe(false);
        });

        test('returns false when passed non-parseable string and strict is set to false', () => {
            result = validate.isObject('foo');
            expect(result).toBe(false);
        });
    });

    describe('isArray', () => {
        test('returns true when value is JSON array', () => {
            result = validate.isArray([]);
            expect(result).toBe(true);
        });

        test('returns false when value is JSON object', () => {
            result = validate.isArray({});
            expect(result).toBe(false);
        });

        test('returns true when passed string that can be parsed to JSON array and strict is set to false', () => {
            result = validate.isArray('[]', false);
            expect(result).toBe(true);
        });

        test('returns false when passed string that can be parsed to JSON object and strict is set to false', () => {
            result = validate.isArray('{}', false);
            expect(result).toBe(false);
        });

        test('returns false when passed non-parseable string and strict is set to false', () => {
            result = validate.isArray('foo', false);
            expect(result).toBe(false);
        });
    });
});