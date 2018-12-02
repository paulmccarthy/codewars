'use strict';

function SudokuSolutionValidator() {

    let self = this;

    // only works for a 9 x 9 array
    this.transpose = (arr) => {
        let result = [
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0]
        ];

        for (let i=0; i<arr.length; i++) {
            for (let j=0; j<arr[i].length; j++) {
                result[j][i] = arr[i][j];
            }
        }

        return result;

    };

    this.createBlocks = (solution) => {
        let result = [
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0]
        ];

        for (let i=0; i<solution.length; i++) {
            
        }
    }

    this.checkRows = (solution) => {

        // should be 9 cells
        if (solution.length !== 9) {
            console.log('incorrect length');
            return false;
        }

        let allowedNums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

        for (let i=0; i<solution.length; i++) {

            for (let j=0; j<solution[i].length; j++) {

                // each number should be between 1 and 9 inclusive
                if (allowedNums.indexOf(solution[i][j]) === -1) {
                    return false;
                }

            }

            // the array should contain all the numbers
            let sortedArray = solution[i].slice(0).sort((a, b) => {
                return a - b;
            });

            for (let k=0; k<allowedNums.length; k++) {
                if (allowedNums[k] !== sortedArray[k]) {
                    return false;
                }
            }
        }

        return true;

    };


    this.checkBlocks = (solution) => {
        let 
    }


}

module.exports = SudokuSolutionValidator;