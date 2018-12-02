/* eslint-disable prefer-arrow-callback */

const expect = require('chai').expect;
const sumStrings = require('../index');

describe('Tests for kata/5324945e2ece5e1f32000370', function () {
    for (let i = 0; i < 1E1; i += 1) {
        const numOne = Math.floor(Math.random() * 1000);
        const numTwo = Math.floor(Math.random() * 1000);
        const sum = (numOne + numTwo).toString();

        it(`should return "${numOne}" + "${numTwo}" = "${sum}"`, function (done) {
            const result = sumStrings(numOne.toString(), numTwo.toString());
            expect(result).to.be.a('string');
            expect(result).to.be.equal(sum);
            done();
        });
    }

    it('should handle empty strings', function (done) {
        const resultOne = sumStrings('', '100');
        expect(resultOne).to.be.a('string');
        expect(resultOne).to.be.equal('100');

        const resultTwo = sumStrings('200', '');
        expect(resultTwo).to.be.a('string');
        expect(resultTwo).to.be.equal('200');

        const resultThree = sumStrings('', '');
        expect(resultThree).to.be.a('string');
        expect(resultThree).to.be.equal('0');

        done();
    });

    it('should handle large numbers', function (done) {
        const resultOne = sumStrings('712569312664357328695151392', '8100824045303269669937');
        expect(resultOne).to.be.a('string');
        expect(resultOne).to.be.equal('712577413488402631964821329');

        const resultTwo = sumStrings('50095301248058391139327916261', '81055900096023504197206408605');
        expect(resultTwo).to.be.a('string');
        expect(resultTwo).to.be.equal('131151201344081895336534324866');

        done();
    });
});
