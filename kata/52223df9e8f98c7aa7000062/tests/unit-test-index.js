const expect = require('chai').expect;
const rot13 = require('../index').rot13;

describe('Unit tests for kata/52223df9e8f98c7aa7000062', function() {
    it('should be able to handle all lower case words', function(done) {
        expect(rot13('thisisaword')).to.be.equal('guvfvfnjbeq');
        done();
    });

    it('should be able to handle all upper case words', function(done) {
        expect(rot13('THISISAWORD')).to.be.equal('GUVFVFNJBEQ');
        done();
    });

    it('should be able to handle mixed case words', function(done) {
        expect(rot13('ThisIsAWord')).to.be.equal('GuvfVfNJbeq');
        done();
    });

    it('should be able to handle punctuation', function(done) {
        expect(rot13('This is a sentence.')).to.be.equal('Guvf vf n fragrapr.');
        expect(rot13('This is a sentence!')).to.be.equal('Guvf vf n fragrapr!');
        done();
    });

    it('should be able to handle numbers', function(done) {
        expect(rot13('This is the number 7')).to.be.equal('Guvf vf gur ahzore 7');
        done();
    })
});