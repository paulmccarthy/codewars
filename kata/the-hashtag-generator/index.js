module.exports.generateHashtag = (str) => {
    if (str.length === 0) {
        return false;
    }

    const result = '#' + str.split(' ').map(word => {
        if (word) {
            return word[0].toUpperCase() + word.substring(1);
        }

        return '';
        
    }).join('');

    return result.length < 140 ? result : false;
}