const SIZE = 9;

const TOTAL = SIZE * (SIZE + 1) / 2;

// sums all the numbers in an array
const sum = nums => nums.reduce((acc, v) => v + acc, 0);

// checks if the line is full
const isFilled = nums => sum(nums) === TOTAL;

// counst how the missing numbers in a line
const countMissing = nums => nums.reduce((acc, v) => v === 0 ? acc + 1 : acc, 0);

const checkLine = line => {
    if (isFilled(line)) {
        return line;
    }

    // if only one number is missing then fill the missing number
    if (countMissing(line) === 1) {
        const missingNum = TOTAL - sum(line);
        const index = line.indexOf(0);
        line[index] = missingNum;

        return line;
    }

    return line;
}

// converts a column to a line
const convertColToLine = (puzzle, col) => {
    const line = [];

    for (let i = 0; i < puzzle.length; i += 1) {
        line.push(puzzle[i][col]);
    }

    return line;
};

// rotates the puzzle, converts lines to columns
const rotatePuzzle = (puzzle) => {
    const size = puzzle.length;
    const rotated = [];

    // create an empty array to hold our results
    for (let i = 0; i < size; i += 1) {
        rotated.push(new Array(size));
    }

    for (let row = 0; row < size; row += 1) {
        for (let col = 0; col < size; col += 1) {
            rotated[col][row] = puzzle[row][col];
        }
    }

    return rotated;
};

const checkBlock = (puzzle, block) => {

}

module.exports = {
    checkLine,
    isFilled,
    countMissing,
    convertColToLine,
    rotatePuzzle,
    checkBlock
};
