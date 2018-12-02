const expect = require('chai').expect;
const UriBuilder = require('../index');

describe('Tests for kata/51eead3461ccf7db04000017', function () {
    it('should return the base url', function (done) {
        const uriBuilder = new UriBuilder('http://example.com');
        const result = uriBuilder.build();

        expect(result).to.be.equal('http://example.com');

        done();
    });

    it('should handle an existing param', function (done) {
        const uriBuilder = new UriBuilder('http://example.com?page=1');
        const result = uriBuilder.build();

        expect(result).to.be.equal('http://example.com?page=1');

        done();
    });

    it('should handle multiple existing params', function (done) {
        const uriBuilder = new UriBuilder('http://example.com?page=1&name=one&age=10');
        const result = uriBuilder.build();

        expect(result).to.be.equal('http://example.com?page=1&name=one&age=10');

        done();
    });

    it('should handle modifying an existing param', function (done) {
        const uriBuilder = new UriBuilder('http://example.com?page=1');
        uriBuilder.params.page = 2;
        const result = uriBuilder.build();

        expect(result).to.be.equal('http://example.com?page=2');

        done();
    });

    it('should handle modifying an existing param and adding a new param', function (done) {
        const uriBuilder = new UriBuilder('http://example.com?page=1');
        uriBuilder.params.page = 2;
        uriBuilder.params.name = 'one';

        const result = uriBuilder.build();

        expect(result).to.be.equal('http://example.com?page=2&name=one');

        done();
    });

    it('should handle deleting an existing param', function (done) {
        const uriBuilder = new UriBuilder('http://example.com?page=1');
        delete uriBuilder.params.page

        const result = uriBuilder.build();

        expect(result).to.be.equal('http://example.com');

        done();
    });

    it('should handle deleting an existing param and adding a new param', function (done) {
        const uriBuilder = new UriBuilder('http://example.com?page=1');
        delete uriBuilder.params.page;
        uriBuilder.params.name = 'one';

        const result = uriBuilder.build();

        expect(result).to.be.equal('http://example.com?name=one');

        done();
    });
});
