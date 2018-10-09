
export class Validate {
    /**
     * The function returns true if the provided value is a string, else false
     * @param value
     */
    isString(value: any): boolean {
        return typeof value === 'string';
    }

    /**
     * The function returns true if provided value is a number, else false
     * @param value
     * @param strict When set to false the function will consider numbers passed as string to be true. Defaults to true.
     */
    isNumber(value: any, strict: boolean = true): boolean {
        if (strict) {
            return typeof value === 'number';
        } else {
            return this.isNumber(value) || (this.isString(value) && !isNaN(Number(value)));
        }
    }

    /**
     * The function returns true if provided value is an integer, else false
     * @param value
     * @param strict When set to false the function will consider numbers passed as string to be true. Defaults to true.
     */
    isInteger(value: any, strict: boolean = true): boolean {
        return this.isNumber(value, strict) && Number(value) % 1 === 0;
    }

    /**
     * The function returns true if provided value is an object.
     * @param value
     * @param strict When set to false the function will try to parse if value is string. Defaults to true.
     */
    isObject(value: any, strict: boolean = true): boolean {
        if (strict) {
            return typeof value === 'object' && !Array.isArray(value);
        } else {
            try {
                if (this.isString(value)) {
                    value = JSON.parse(value);
                }
                return this.isObject(value);
            } catch {
                return false;
            }
        }
    }

    /**
     * The function returns true if provided value is an array.
     * @param value
     */
    isArray(value: any, strict: boolean = true): boolean {
        if (strict) {
            return typeof value === 'object' && Array.isArray(value);
        } else {
            try {
                if (this.isString(value)) {
                    value = JSON.parse(value);
                }
                return this.isArray(value);
            } catch {
                return false;
            }
        }
    }
}
