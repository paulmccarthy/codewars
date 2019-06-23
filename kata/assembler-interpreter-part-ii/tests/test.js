/* eslint-disable prefer-arrow-callback */
/* eslint-disable import/no-extraneous-dependencies */

const expect = require('chai').expect;
const assemblerInterpreter = require('../index');
const utils = require('../utils');
const assembly = require('./helpers/assembly');
const expectedResults = require('./helpers/expectedResults');

describe.only('Tests for assembler-interpreter-part-ii', function () {
    describe('Unit tests for program parser', function () {
        it('Simple arithmetic program', function () {
            const result = utils.programParser(assembly.program);
            expect(result).to.deep.equal(expectedResults.program);
        });

        it('Factorial program', function () {
            const result = utils.programParser(assembly.programFactorial);
            expect(result).to.deep.equal(expectedResults.programFactorial);
        });

        it('Fibonacci program', function () {
            const result = utils.programParser(assembly.programFibonacci);
            expect(result).to.deep.equal(expectedResults.programFibonacci);
        });

        it('Modulus program', function () {
            const result = utils.programParser(assembly.programMod);
            expect(result).to.deep.equal(expectedResults.programMod);
        });

        it('GCD program', function () {
            const result = utils.programParser(assembly.programGcd);
            expect(result).to.deep.equal(expectedResults.programGcd);
        });

        it('Failed program', function () {
            const result = utils.programParser(assembly.programFail);
            expect(result).to.deep.equal(expectedResults.programFail);
        });

        it('Exponents program', function () {
            const result = utils.programParser(assembly.programPower);
            expect(result).to.deep.equal(expectedResults.programPower);
        });
    });

    describe('Provided tests for assembler-interpreter-part-ii', function () {
        it('Simple arithmetic', function () {
            expect(assemblerInterpreter(assembly.program)).to.be.equal('(5+1)/2 = 3');
        });

        it.only('Factorial', function () {
            expect(assemblerInterpreter(assembly.programFactorial)).to.be.equals('5! = 120');
        });

        it('Fibonacci', function () {
            expect(assemblerInterpreter(assembly.programFibonacci)).to.be.equal('Term 8 of Fibonacci series is: 21');
        });

        it('Modulus', function () {
            expect(assemblerInterpreter(assembly.programMod)).to.be.equal('mod(11, 3) = 2');
        });

        it('GCD', function () {
            expect(assemblerInterpreter(assembly.programGcd)).to.be.equals('gcd(81, 153) = 9');
        });

        it('Failed program', function () {
            expect(assemblerInterpreter(assembly.programFail)).to.be.equals(-1);
        });

        it('Exponents', function () {
            expect(assemblerInterpreter(assembly.programPower)).to.be.equals('2^10 = 1024');
        });
    });
});
