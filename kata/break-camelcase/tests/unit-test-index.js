'use strict';

const expect = require('chai').expect;
const converter = require('../index');

describe('Unit tests for break camel case', function() {
    it('should handle two combined words', function(done) {
        let result = converter.withRegex('camelCase');
        expect(result).to.be.equal('camel Case');
        done();
    });

    it('should handle multiple combined words', function(done) {
        let result = converter.withRegex('camelCaseIsTheWayToGo');
        expect(result).to.be.equal('camel Case Is The Way To Go');
        done();
    });

    it('should handle a single non-camelCase word', function(done) {
        let result = converter.withRegex('snake_case');
        expect(result).to.be.equal('snake_case');
        done();
    })
});
