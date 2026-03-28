function isValidSudoku(board: string[][]): boolean {
    const flatBoard = board.flat()

    function checkNine(indexes: number[]) {
        const checkCache: string[] = []
        for (const i of indexes) {
            if (flatBoard[i] === ".") continue;
            if (checkCache.includes(flatBoard[i])) return false;
            checkCache.push(flatBoard[i])
        }
        return true
    }

    // shortcoming: iterate board three times
    // improve: use 3(row, col, grid) x 9(1-9) x 9(pos) cache
    for (let i = 0; i < 9; i++) {
        const indexes =  Array.from({length: 9}).map((_, j) => i * 9 + j)
        if (!checkNine(indexes)) return false;
    }
    for (let i = 0; i < 9; i++) {
        const indexes =  Array.from({length: 9}).map((_, j) => i + j * 9)
        if (!checkNine(indexes)) return false;
    }
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            const indexes = [ 0, 1, 2, 9, 10, 11, 18, 19, 20 ].map((val) =>
                val + i * 27 + j * 3)
            if (!checkNine(indexes)) return false;
        }
    }
    return true;
}

function run() {
    const board =
        [["5", "3", ".", ".", "7", ".", ".", ".", "."],
            ["6", ".", ".", "1", "9", "5", ".", ".", "."],
            [".", "9", "8", ".", ".", ".", ".", "6", "."],
            ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
            ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
            ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
            [".", "6", ".", ".", ".", ".", "2", "8", "."],
            [".", ".", ".", "4", "1", "9", ".", ".", "5"],
            [".", ".", ".", ".", "8", ".", ".", "7", "9"]]
    console.log(isValidSudoku(board))
}

export { run }