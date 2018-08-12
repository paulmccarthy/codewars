/* eslint-disable prefer-arrow-callback */
/* eslint-env mocha */

const expect = require('chai').expect;
const User = require('../index');

describe('Tests for kata/51fda2d95d6efda45e00004e', function () {
    it('should return a user with the default rank and progress', function (done) {
        const user = new User();
        expect(user.rank).to.be.equal(-8);
        expect(user.progress).to.be.equal(0);
        done();
    });

    it('should increase progress by 1 point for a task that is one lower than the users current rank', function (done) {
        const user = new User();
        user.rank = -7;
        user.incProgress(-8);
        expect(user.rank).to.be.equal(-7);
        expect(user.progress).to.be.equal(1);
        done();
    });

    it('should increase progress by three points for a task with the same rank as the user', function (done) {
        const user = new User();
        user.incProgress(-8);
        expect(user.rank).to.be.equal(-8);
        expect(user.progress).to.be.equal(3);
        done();
    });

    it('should increase progress by ten points for a task that is one level higher than the users current rank', function (done) {
        const user = new User();
        user.incProgress(-7);
        expect(user.rank).to.be.equal(-8);
        expect(user.progress).to.be.equal(10);
        done();
    });

    it('should increase progress by 60 points and the rank by 1 for a task that is 4 levels higher than the users current rank', function (done) {
        const user = new User();
        user.incProgress(-4);
        expect(user.rank).to.be.equal(-7);
        expect(user.progress).to.be.equal(60);
        done();
    });

    it('should not assign a rank of zero to a user', function (done) {
        const user = new User();
        user.rank = -1;
        user.progress = 90;
        user.incProgress(1);
        expect(user.rank).to.be.equal(1);
        expect(user.progress).to.be.equal(0);
        done();
    });

    it('should not increase the users rank beyond 8', function (done) {
        const user = new User();
        user.rank = 8;
        user.progress = 99;
        user.incProgress(8);
        expect(user.rank).to.be.equal(8);
        expect(user.progress).to.be.equal(2);
        done();
    });

    it('should handle multiple attempts', function (done) {
        const user = new User();
        user.rank = -7;
        user.incProgress(-8);
        user.incProgress(-4)
        expect(user.rank).to.be.equal(-7);
        expect(user.progress).to.be.equal(91);
        done();
    });
});
