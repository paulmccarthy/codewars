const expect = require('chai').expect;
const VignereCipher = require('../index');

const key = 'password';
const alphabet = 'abcdefghijklmnopqrstuvwxyz';

describe('Unit tests for the Vignere Cipher', function () {
    it('should correctly encode a message', function (done) {
        const cipher = new VignereCipher(key, alphabet);
        const result1 = cipher.encode('codewars');
        const result2 = cipher.encode('waffles');
        const result3 = cipher.encode('CODEWARS');

        expect(result1).to.be.equal('rovwsoiv');
        expect(result2).to.be.equal('laxxhsj');
        expect(result3).to.be.equal('CODEWARS');

        done();
    });

    it('should correctly decode a message', function (done) {
        const cipher = new VignereCipher(key, alphabet);
        const result1 = cipher.decode('rovwsoiv');
        const result2 = cipher.decode('laxxhsj');
        const result3 = cipher.decode('CODEWARS');

        expect(result1).to.be.equal('codewars');
        expect(result2).to.be.equal('waffles');
        expect(result3).to.be.equal('CODEWARS');

        done();
    });
});
