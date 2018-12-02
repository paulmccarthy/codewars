const alphabet = 'abcdefghijklmnopqrstuvwxyz';
const lower = alphabet.split('');
const upper = alphabet.toUpperCase().split('');

module.exports.rot13 = (str) => {
    return str.toString().split('').map(s => {
        if (lower.indexOf(s) > -1) {
            return lower[(lower.indexOf(s) + 13) % 26]
        }

        if (upper.indexOf(s) > -1) {
            return upper[(upper.indexOf(s) + 13) % 26]
        }

        return s
    })
    .join('');
}