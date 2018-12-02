/** Digit followed by all zeros */
let hasAllZeros = (num) => {
    let digits = num.toString().split('');

    if (digits[0] !== '0') {
        for (let i = 1; i < digits.length; i += 1) {
            if (digits[i] !== '0') {
                return false;
            }
        }

        return true;
    } 

    return false;
};

/** All the same digits */
let hasSameDigit = (num) => {
    let digits = num.toString().split('');

    let digit = digits[0];

    for (let i = 1; i < digits.length; i += 1) {
        if (digits[i] !== digit) {
            return false;
        }
    }

    return true;
};

/** Sequential, incrementing digits */
let hasIncrementingDigits = (num) => {
    let digits = num.toString();

    return '1234567890'.indexOf(digits) > -1 ? true : false;
};

let hasDecrementingDigits = (num) => {
    let digits = num.toString();
    
    return '9876543210'.indexOf(digits) > -1 ? true : false;
};

let isPalindrome = (num) => {
    let digits = num.toString();
    let last = digits.length - 1;

    for (let i = 0; i < digits.length; i += 1) {
        if (digits[i] !== digits[last]) {
            return false;
        }

        last -= 1;
    }

    return true;
};

let isAwesome = (num, awesomePhrases) => {
    return awesomePhrases.indexOf(num) > -1 ? true : false;
};

let checkIsInteresting = (number, awesomePhrases, iteration) => {
    const result = iteration === 0 ? 2 : 1;

    if (number < 100) {
        return 0;
    }

    if (hasAllZeros(number) ||
        hasSameDigit(number) ||
        hasIncrementingDigits(number) ||
        hasDecrementingDigits(number) ||
        isPalindrome(number) ||
        isAwesome(number, awesomePhrases)) {
        return result;
    }


    return 0;
};

module.exports.isInteresting = (number, awesomePhrases) => {
    let result = [];

    for (let i = number; i <= number + 2; i += 1) {
        result.push(checkIsInteresting(i, awesomePhrases, i - number));
    }
    
    return Math.max(...result);
};