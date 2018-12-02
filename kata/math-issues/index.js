'use strict';

class simpleMath {

    /**
     * @description Rounds a number to the nearest integer. Rounds up on 0.5
     * @param {Number} n The number to round
     */
    round(n) {
        let parts = ('' + n).split('.');
        if ( Number('0.' + parts[1]) >= 0.5 ) {
            return Number(parts[0]) + 1;
        }

        return Number(parts[0]);

    }

    /**
     * @description Returns the next highest integer.
     * @param {Number} n The number to ceil
     */
    ceil(n) {
        let parts = ('' + n).split('.');
        if ( Number('0.' + parts[1]) > 0 ) {
            return Number(parts[0]) + 1;
        }

        return Number(parts[0]);
    }


    /**
     * @description Rounds to the nextlowest integer.
     * @param {Number} n The number to floor
     */
    floor(n) {
        let parts = ('' + n).split('.');
        return Number(parts[0]);
    }

    
}

module.exports = simpleMath;