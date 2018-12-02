const expect = require('chai').expect;
const checker = require('../index');

describe('Unit tests for kata/convert-pascalcase-string-into-snake-case', function() {
    it('should convert a single word', function(done) {
        expect(checker.toUnderscore('Word')).to.equal('word');
        done();
    });

    it('should convert multiple words', function(done) {
        expect(checker.toUnderscore('MoreThanOneWord')).to.equal('more_than_one_word');
        done();
    });

    it('should handle numbers in words', function(done) {
        expect(checker.toUnderscore('MoreThan1Word')).to.equal('more_than1_word');
        done();
    });

    it('should handle just numbers', function(done) {
        expect(checker.toUnderscore(11111)).to.equal('11111');
        done();
    });
});