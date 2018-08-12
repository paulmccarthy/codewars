const expect = require('chai').expect;
const bowlingScore = require('../index');

describe('Tests for kata/ten-pin-bowling', function () {
    it('should return the correct score for a game with no strikes or spares', function (done) {
        const game = '11 11 11 11 11 11 11 11 11 11';
        const score = bowlingScore(game);

        expect(score).to.be.equal(20);

        done();
    });

    it('should handle the last frame being all strikes', function (done) {
        const game = '11 11 11 11 11 11 11 11 11 XXX';
        const score = bowlingScore(game);

        expect(score).to.be.equal(48);

        done();
    });

    it('should handle the last frame being a spare', function (done) {
        const game = '11 11 11 11 11 11 11 11 11 9/X';
        const score = bowlingScore(game);

        expect(score).to.be.equal(38);

        done();
    });

    it('should return the correct score for a game with all strikes', function (done) {
        const game = 'X X X X X X X X X XXX';
        const score = bowlingScore(game);

        expect(score).to.be.equal(300);

        done();
    });

    it('should return the correct score for a game with spares', function (done) {
        const game = '9/ 9/ 9/ 9/ 9/ 9/ 9/ 9/ 9/ 9/9';
        const score = bowlingScore(game);

        expect(score).to.be.equal(190);

        done();
    });

    it('should return the correct score for random game 1', function (done) {
        const game = '40 71 04 X 21 72 53 90 61 1/X';
        const score = bowlingScore(game);

        expect(score).to.be.equal(85);

        done();
    });

    it('should return the correct score for random game 2', function (done) {
        const game = '41 26 62 5/ 23 41 30 X X 1/X';
        const score = bowlingScore(game);

        expect(score).to.be.equal(107);

        done();
    });
});
