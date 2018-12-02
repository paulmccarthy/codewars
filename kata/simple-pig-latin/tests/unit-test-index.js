const expect = require('chai').expect;
const pigIt = require('../index').pigIt;

describe('Unit tests for kata/simple-pig-latin', function() {
    it('should return pig latin for a word', function(done) {
        const result = pigIt('Pig latin');
        expect(result).to.be.equal('igPay atinlay');
        done();
    });

    it('should ignore punctuation', function(done) {
        const result = pigIt('Pig latin !');
        expect(result).to.be.equal('igPay atinlay !');
        done();
    });
});