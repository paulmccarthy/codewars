module.exports.toUnderscore = (word) => {
    return word.toString().split('').map((s, i) => {

        if (Number.isNaN(parseInt(s))) {
            if (s.toUpperCase() === s) {
                if (i > 0) {
                    return '_' + s.toLowerCase();
                }

                return s.toLowerCase();
            }
        }

        return s;
    }).join('');
};