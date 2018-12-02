const expect = require('chai').expect;
const checker = require('../index');

describe('Unit tests for kata/catching-car-mileage-numbers', function() {
    it('should return 0 if the number is less than 100', function(done) {
        let result = checker.isInteresting(97, []);
        expect(result).to.be.equal(0);
        done();
    });

    it('should return 1 if the number is 98', function(done) {
        let result = checker.isInteresting(98, []);
        expect(result).to.be.equal(1);
        done();
    });

    it('should return 2 if the number is a digit followed by all zeros', function(done) {
        let result = checker.isInteresting(100, []);
        
        expect(result).to.be.equal(2);

        done();
    });

    it('should return 1 if the number within 2 of being a digit followed by all zeros', function(done) {
        let result = checker.isInteresting(198, []);
        
        expect(result).to.be.equal(1);

        done();
    });

    it('should return zero if the number is more than one digit followed by all zeros', function(done) {
        let result = checker.isInteresting(1100, []);

        expect(result).to.be.equal(0);

        done();
    });

    it('should return 2 if the number contains all the same digits', function(done) {
        let result = checker.isInteresting(2222, []);

        expect(result).to.be.equal(2);

        done();
    });

    it('should return 1 if the number is within two of containing all the same digits', function(done) {
        let result = checker.isInteresting(2221, []);

        expect(result).to.be.equal(1);

        done();
    });

    it('should return 0 if the number does not contain all the same digits', function(done) {
        let result = checker.isInteresting(2227, []);

        expect(result).to.be.equal(0);

        done();
    });

    it('should return 2 if the number is incrementing sequentially', function(done) {
        let resultOne = checker.isInteresting(1234, []);
        let resultTwo = checker.isInteresting(7890, []);

        expect(resultOne).to.be.equal(2);
        expect(resultTwo).to.be.equal(2);

        done();
    });

    it('should return 1 if the number is within two of being an incrementing sequentially number', function(done) {
        let resultOne = checker.isInteresting(1232, []);
        let resultTwo = checker.isInteresting(7889, []);

        expect(resultOne).to.be.equal(1);
        expect(resultTwo).to.be.equal(1);

        done();
    });

    it('should return 0 if the number is incrementing sequentially with 0 before 1', function(done) {
        let result = checker.isInteresting(01234, []);

        expect(result).to.be.equal(0);

        done();
    });

    it('should return 2 if the number is decrementing sequentially', function(done) {
        let resultOne = checker.isInteresting(9876, []);
        let resultTwo = checker.isInteresting(3210, []);

        expect(resultOne).to.be.equal(2);
        expect(resultTwo).to.be.equal(2);

        done();
    });

    it('should return 1 if the number is within two of being a decrementing sequentially number', function(done) {
        let resultOne = checker.isInteresting(9875, []);
        let resultTwo = checker.isInteresting(3208, []);

        expect(resultOne).to.be.equal(1);
        expect(resultTwo).to.be.equal(1);

        done();
    });

    it('should return 2 if the number is a palindrome', function(done) {
        let resultOne = checker.isInteresting(121, []);
        let resultTwo = checker.isInteresting(1221, []);
        let resultThree = checker.isInteresting(3451543, []);

        expect(resultOne).to.be.equal(2);
        expect(resultTwo).to.be.equal(2);
        expect(resultThree).to.be.equal(2);

        done();
    });

    it('should return 1 if the number is within 2 of being a palindrome', function(done) {
        let resultOne = checker.isInteresting(119, []);
        let resultTwo = checker.isInteresting(1220, []);
        let resultThree = checker.isInteresting(3451542, []);

        expect(resultOne).to.be.equal(1);
        expect(resultTwo).to.be.equal(1);
        expect(resultThree).to.be.equal(1);

        done();
    });

    it('should return 2 if the number is in the supplied array', function(done) {
        let result = checker.isInteresting(177, [177, 188]);

        expect(result).to.be.equal(2);

        done();
    });

    it('should return 1 if the number is within w of being in the supplied array', function(done) {
        let result = checker.isInteresting(176, [177, 188]);

        expect(result).to.be.equal(1);

        done();
    });

    it('should return 0 if the number is not in the supplied array', function(done) {
        let result = checker.isInteresting(177, [170, 188]);

        expect(result).to.be.equal(0);

        done();
    });
});