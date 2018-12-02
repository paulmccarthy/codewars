'use strict';

let simplifyIntervals = (intervals) => {
    let result = [];
    let intervalStartPoints = [];
    let intervalEndPoints = [];

    // create arrays to hold all the starting points and ending points;
    for (let i = 0; i < intervals.length; i++) {
        intervalStartPoints.push(intervals[i][0]);
        intervalEndPoints.push(intervals[i][1]);
    }

    // sort the arrays into numeric order
    intervalStartPoints.sort((a, b) => {return a - b;});
    intervalEndPoints.sort((a, b) => {return a - b;});

    // if any starting point is less than the end point we have an overlap
    let lastIntervalEndPoint = intervalEndPoints[intervalEndPoints.length - 1];

    return result;
};

module.exports.sum = (intervals) => {

    if (intervals != null && intervals.length > 0) {
        let result = 0;
        let simplifiedIntervals = simplifyIntervals(intervals);

        for (let i = 0; i < simplifiedIntervals.length; i++) {
            result += simplifiedIntervals[i].reduceRight((prev, curr) => {
                return prev - curr;
            });
        }

        return result;

    } else {
        return null;
    }
    
};