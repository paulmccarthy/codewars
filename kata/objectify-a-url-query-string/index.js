const merge = require('lodash.merge');

function convertQueryToMap(query) {
    let result = {};

    if (query.length) {
        // handle multiple query strings
        const singleQueries = query.split('&');

        // check each query string
        for (let i = 0; i < singleQueries.length; i += 1) {
            // split the query string into keys and associated value
            const keyValues = singleQueries[i].split('=');

            // split the keys into their component parts, each part will be a nested object
            const keys = keyValues[0].split('.');

            // get the value associated with the full path
            const value = unescape(keyValues[1]);

            // for the first query string, the result will be an empty object and no nested objects
            // will exist, so we can create whatever we need
            if (i === 0) {
                // iterate backwards
                for (let j = keys.length - 1; j >= 0; j -= 1) {
                    if (j === keys.length - 1) {
                        // the deepest nest should refer to the value
                        result = {
                            [keys[j]]: value
                        };
                    } else {
                        // everything else should refer to the previously created object
                        result = {
                            [keys[j]]: result
                        };
                    }
                }
            } else {
                // for subsequent queries, the nested keys may exist
                // if we follow the previous methodology, we'll just end up overwriting the original object
                // create a temporary object
                let temp = {};

                for (let j = keys.length - 1; j >= 0; j -= 1) {
                    // only the last item should be assigned the value
                    if (j === keys.length - 1) {
                        temp = {
                            [keys[j]]: value
                        };
                    } else {
                        temp = {
                            [keys[j]]: temp
                        };
                    }
                }

                // merge the temporary object back into result
                merge(result, temp);

            }
        }
    }

    return result;
}

module.exports = convertQueryToMap;
