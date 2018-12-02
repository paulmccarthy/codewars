'use strict';

const expect = require('chai').expect;
const SimpleMath = require('../index');
const math = new SimpleMath();

const funcs = [
    {func: math.round, name: 'round'},
    {func: math.ceil, name: 'ceil'}
];

const config = {
    round: {
        func: math.round,
        name: 'round',
        tests: [
            {args: 1.2, expected: 1},
            {args: 1.5, expected: 2},
            {args: 0.2, expected: 0},
            {args: 0.000002, expected: 0},
            {args: 1.499999999, expected: 1},
            {args: 1.50000000001, expected: 2},
        ]
    },
    ceil: {
        func: math.ceil,
        name: 'ceil',
        tests: [
            {args: 1.2, expected: 2},
            {args: 1.5, expected: 2},
            {args: 0.2, expected: 1},
            {args: 0.000002, expected: 1},
            {args: 1.499999999, expected: 2},
            {args: 1.50000000001, expected: 2},
        ]
    },
    floor: {
        func: math.floor,
        name: 'floor',
        tests: [
            {args: 1.2, expected: 1},
            {args: 1.5, expected: 1},
            {args: 0.2, expected: 0},
            {args: 0.000002, expected: 0},
            {args: 1.499999999, expected: 1},
            {args: 1.50000000001, expected: 1},
        ]
    }
};

for (let i in config) {

    describe('Unit tests for math-issues#' + config[i].name, function() {

        config[i].tests.forEach(function(test) {

            it('should return ' + test.expected + ' when passed in ' + test.args, function(done) {
                let result = config[i].func.apply(SimpleMath, [test.args]);

                expect(result).to.be.equal(test.expected);

                done();

            });

        });

    });

};
