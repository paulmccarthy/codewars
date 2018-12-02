'use strict';

const expect = require('chai').expect;
const intervals = require('../index');

describe('Unit tests for index.js', function() {
    it('should return null if the intervals are not defined', function(done) {
        let result = intervals.sum();
        expect(result).to.be.null;
        done();
    });

    it('should return null if an empty array is passed in', function(done) {
        let result = intervals.sum([]);
        expect(result).to.be.null;
        done();
    });

    it('should return the correct result for a single interval', function(done) {
        let result = intervals.sum([[1, 10]]);
        expect(result).to.be.equal(9);
        done();
    });

    it('should return the correct result when there are multiple, non-overlapping intervals', function(done) {
        let testIntervals = [ [1, 3], [7, 11] ];
        let result = intervals.sum(testIntervals);
        expect(result).to.be.equal(6);
        done();
    });

    it('should return the correct result when there are two overlapping intervals', function(done) {
        let testIntervals = [ [1, 10], [2, 11] ];
        let result = intervals.sum(testIntervals);
        expect(result).to.be.equal(10);
        done();
    });
});