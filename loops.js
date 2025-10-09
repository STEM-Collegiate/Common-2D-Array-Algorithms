// 3x3 Arrays for testing
const testMatrices = [
    [   // ascending numbers
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8]
    ],
    [   // all even numbers
        [-2, 4, -6],
        [8, -10, 12],
        [14, -16, 18]
    ],
    [   // all odd numbers
        [1, 3, 5],
        [7, 9, 11],
        [13, 15, 17]
    ],
    [   // digits of pi pattern
        [3, -1, 4],
        [1, 5, -9],
        [2, 6, -5]
    ],
    [   // includes undefined values
        [0, 1, undefined],
        [13, 17, 19],
        [5, undefined, 8]
    ],
    [   // includes null values
        [0, 1, null],
        [13, null, 7],
        [9, 2, null]
    ],
    [   // identity matrix
        [1, 0, 0],
        [0, 1, 0],
        [0, 0, 1]
    ],
    [   // mixed small integers
        [5, 0, 2],
        [3, 1, 4],
        [7, -2, 6]
    ],
    [   // negative to positive range
        [-3, -2, -1],
        [0, 1, 2],
        [3, 4, 5]
    ],
    [   // uniform values
        [10, 10, 10],
        [10, 10, 10],
        [10, 10, 10]
    ]
];




// Example completed function
function sumMatrix(matrix) {
    let total = 0;
    for (const row of matrix) {
        for (const val of row) {
            total += val;
        }
    }
    console.log("The sum total is:", total);
    return total;
}

function rowSum(matrix) {
}

function colSum(matrix) {
}

function countZeros(matrix) {
}

function minValue2D(matrix) {
}

function maxValue2D(matrix) {
}

function doubleMatrix(matrix) {
}

function positiveMap(matrix) {
}

function diagonalSum(matrix) {
}

function transposeMatrix(matrix) {
}