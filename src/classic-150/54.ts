// just recursive
function spiralOrder(matrix: number[][]): number[] {
    let iter: number = 0
    const result = matrix.flat().fill(0)

    function spiralOnce(rect: [number, number, number, number]) {
        const [ left, top, right, bottom ] = rect
        if (left >= right || top >= bottom) return;

        for (let i = left; i < right; i++) {
            result[iter++] = matrix[top][i]
        }
        for (let i = top+1; i < bottom; i++) {
            result[iter++] = matrix[i][right-1]
        }
        if (bottom - top > 1) {
            for (let i = right-2; i>=left; i--) {
                result[iter++] = matrix[bottom-1][i]
            }
        }
        if (right - left > 1) {
            for (let i = bottom-2; i>top; i--) {
                result[iter++] = matrix[i][left]
            }
        }
        spiralOnce([left + 1, top + 1, right - 1, bottom - 1])
    }
    const [m, n] = [matrix.length, matrix[0].length]
    spiralOnce([0, 0, n, m])
    return result
}

function run() {
    const matrix = [
        [2,5,8],
        [4,0,-1]
    ]
    console.log(spiralOrder(matrix))
}

export { run }