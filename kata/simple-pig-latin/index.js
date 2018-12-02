'use strict';

const letters = 'abcdefghijklmnopqrstuvwxyz';

let checkPunctuation = (word) => {
    const lower = word.toLowerCase();

    for (let i = 0; i < lower.length; i += 1) {
        if (letters.indexOf(lower[i]) === -1) {
            return false;
        }
    }

    return true;
};

module.exports.pigIt = (str) => {
    return str.trim().split(' ').map(word => {
        if (word) {
            if (checkPunctuation(word)) {
                return word.substring(1) + word[0] + 'ay';
            }

            return word;
        }

        return '';
    }).join(' ');
}