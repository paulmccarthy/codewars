const expect = require('chai').expect;
const generateHashtag = require('../index').generateHashtag;

describe('Unit tests for kata/the-hashtag-generator', function() {
    it('should return false for an empty string', function(done) {
        const result = generateHashtag('');
        expect(result).to.be.false;
        done();
    });

    it('should return a string starting with #, with no spaces and with title case', function(done) {
        const result = generateHashtag('a string');
        expect(result).to.be.equal('#AString');
        done();
    });

    it('should return false for a string that results in a hashtag longer than 140 characters', function(done) {
        const str = 'a word'.repeat(71);
        const result = generateHashtag(str);
        expect(result).to.be.false;
        done();
    });

    it('should return a hash tag for a string that results in a hashtag equal to 140 characters', function(done) {
        const str = 'this is a test of the character limit to 140 characters ' +
            'it should have 139 characters without spaces it is a bit longer ' +
            'than you think it is and it takes a bit more to fill a';
        const result = generateHashtag(str);
        expect(result).to.be.equal('#ThisIsATestOfTheCharacterLimitTo140CharactersItShouldHave139CharactersWithoutSpacesItIsABitLongerThanYouThinkItIsAndItTakesABitMoreToFillA');
        done();
    });

});