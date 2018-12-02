'use strict';

module.exports.withRegex = (str) => {
    return str.replace(/[A-Z]/g, (match, offset, string) => {
        return (offset > 0 ? ' ' : '') + match;
    })
}