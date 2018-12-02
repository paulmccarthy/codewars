const expect = require('chai').expect;
const Calculator = require('../index');

const tests = [
    ['10 + 2 * 5', 20],
    ['1 + 2 + 3 + 4 * 5', 26],
    ['10 / 5 + 2 * 10', 22]
];

describe('Unit tests for calculator', function () {
    describe('Provided tests', function() {
        it('should return the correct results for the provided tests', function (done) {
            const calculate = new Calculator();
            expect(calculate.evaluate('127')).to.be.equal(127);
            done();
        });

        it('should return the correct results for the provided tests', function (done) {
            const calculate = new Calculator();
            expect(calculate.evaluate('2 + 3')).to.be.equal(5);
            done();
        });

        it('should return the correct results for the provided tests', function (done) {
            const calculate = new Calculator();
            expect(calculate.evaluate('2 - 3 - 4')).to.be.equal(-5);
            done();
        });

        it('should return the correct results for the provided tests', function (done) {
            const calculate = new Calculator();
            expect(calculate.evaluate('10 * 5 / 2')).to.be.equal(25);
            done();
        });
    });

    describe('Check order of operations', function () {
        for (let i = 0; i < tests.length; i += 1) {
            const test = tests[i];

            it(`${test[0]} = ${test[1]}`, function (done) {
                const calculate = new Calculator();
                expect(calculate.evaluate(test[0])).to.be.equal(test[1]);
                done();
            });
        }
    });
});
