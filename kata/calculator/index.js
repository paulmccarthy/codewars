const multiply = (a, b) => Number(a) * Number(b);
const divide = (a, b) => Number(a) / Number(b);
const add = (a, b) => Number(a) + Number(b);
const subtract = (a, b) => Number(a) - Number(b);

const Calculator = function () {
    this.operators = ['*', '/', '+', '-'];



    this.evaluate = string => {
        let parts = string.split(' ');

        if (parts.length === 1) {
            return Number(string);
        }

        // first pass - multiplication and division
        for (let i = 1; i < parts.length; i += 2) {
            if (parts[i] === '*' || parts[i] === '/') {
                let num;

                if (parts[i] === '*') {
                    num = multiply(parts[i - 1], parts[i + 1]);
                } else {
                    num = divide(parts[i - 1], parts[i + 1]);
                }

                parts[i] = null;
                parts[i - 1] = null;
                parts[i + 1] = num;
            }
        }

        // remove nulls
        parts = parts.filter(item => item != null);

        // second pass - addition and subtraction
        for (let i = 1; i < parts.length; i += 2) {
            let num;

            if (parts[i] === '+') {
                num = add(parts[i - 1], parts[i + 1]);
            } else {
                num = subtract(parts[i - 1], parts[i + 1]);
            }

            parts[i] = num;
            parts[i - 1] = null;
            parts[i + 1] = null;
        }

        // calculate result
        return parts.reduce((acc, val) => {
            if (val != null) {
                return acc + Number(val);
            }

            return acc;
        }, 0);
    }
};

module.exports = Calculator;
