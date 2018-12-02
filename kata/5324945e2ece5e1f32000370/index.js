function sumStrings(a, b) {
    const initialSum = (parseInt(a, 10) || 0) + (parseInt(b, 10) || 0) + '';

    // handle large numbers
    if (initialSum.toLowerCase().indexOf('e') >= 0) {
        // we're in floating point representation, so we need to add the numbers digit by digit
        // get the longest, so that we can pad the other
        const longest = a.length > b.length ? a : b;
        let shortest = longest === a ? b : a;
        const diff = longest.length - shortest.length;
        shortest = '0'.repeat(diff) + shortest;
        let carry = 0;
        let result = '';

        for (let i = longest.length - 1; i >= 0; i -= 1) {
            const digitLongest = parseInt(longest[i], 10);
            const digitShortest = parseInt(shortest[i], 10);
            let sum = digitLongest + digitShortest + carry;

            if (sum >= 10) {
                sum -= 10;
                carry = 1;
            } else {
                carry = 0
            }

            result = sum + result;
        }

        if (carry === 1) {
            result = carry.toString() + result;
        }

        return result;
    }

    return initialSum;
}

module.exports = sumStrings;
