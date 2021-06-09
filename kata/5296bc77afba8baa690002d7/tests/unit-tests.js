const expect = require('chai').expect;
const { isFilled, checkLine, rotatePuzzle } = require('../index');

describe('Unit tests for kata/5296bc77afba8baa690002d7', () => {
    describe('#isFilled()', () => {
        const line = [1, 2, 3, 4, 5, 6, 7, 8, 9];

        it('should return true when the line is filled', () => {
            expect(isFilled(line)).to.deep.equal(true);
        });

        it('should return false when the line is not filled', () => {
            for (let i = 0; i < line.length; i += 1) {
                const testLine = line.slice(); // shallow copy
                testLine[i] = 0;

                // don't need to test every combination, because order is lost once we sum the numbers
                // if one zero returns false, then any number of zeros will return false
                expect(isFilled(testLine)).to.deep.equal(false);
            }
        });
    });

    describe('#checkLine()', () => {
        const line = [1, 2, 3, 4, 5, 6, 7, 8, 9];

        it('should not make any changes if the line is already filled', () => {
            expect(checkLine(line)).to.deep.equal(line);
        });

        it('should complete the line when there is a single entry missing', () => {
            for (let i = 0; i < line.length; i += 1) {
                const testLine = line.slice(); // shallow copy
                testLine[i] = 0;

                expect(checkLine(testLine)).to.deep.equal(line);
            }
        });
    });

    describe('rotatePuzzle()', () => {
        it('should rotate the puzzle so that the columns become lines', () => {
            const puzzle = [
                [1, 2, 3],
                [4, 5, 6],
                [7, 8, 9]
            ];

            const expected = [
                [1, 4, 7],
                [2, 5, 8],
                [3, 6, 9]
            ];

            expect(rotatePuzzle(puzzle)).to.deep.equal(expected);
        });
    });
});
