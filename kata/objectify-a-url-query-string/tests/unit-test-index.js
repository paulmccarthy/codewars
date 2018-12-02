const expect = require('chai').expect;
const objectify = require('../index');

describe('Tests for kata/objectify-a-url-query-string', function () {
    it('should handle an empty query', function (done) {
        const query = '';
        const expectedResult = {};

        const result = objectify(query);

        expect(result).to.deep.equal(expectedResult);

        done();
    });

    it('should return an object in the correct format', function (done) {
        const query = 'user.name=Bob';
        const expectedResult = {
            'user': {
                'name': 'Bob'
            }
        };

        const result = objectify(query);

        expect(result).to.deep.equal(expectedResult);

        done();
    });

    it('should return an object in the correct format', function (done) {
        const query = 'user.firstname=Bob&user.lastname=Doe';
        const expectedResult = {
            'user': {
                'firstname': 'Bob',
                'lastname': 'Doe'
            }
        };

        const result = objectify(query);

        expect(result).to.deep.equal(expectedResult);

        done();
    });
});
