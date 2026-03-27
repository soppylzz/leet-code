/**
 * Reflection:
 * 1. Notice state reset when dfs
 * */
function exist(board: string[][], word: string): boolean {
    const [_, col] = [board.length, board[0].length]
    const flat = board.flat()
    const used = new Array(flat.length).fill(false)
    const search = word.split("")

    function dfs(pos: number, depth: number): boolean {
        if (search[depth] !== flat[pos] || used[pos]) return false;
        if (
            flat[pos] === search[depth] &&
            depth === search.length - 1
        ) return true;

        // check neighbors
        used[pos] = true;

        const check =
            (
                pos + col < flat.length && dfs(pos + col, depth + 1)
            ) || (
                pos - col >= 0 && dfs(pos - col, depth + 1)
            ) || (
                // situation: left row
                pos % col !== 0 && dfs(pos - 1, depth + 1)
            ) || (
                (pos + 1) % col !== 0 && dfs(pos + 1, depth + 1)
            )
        if (check) return true;
        used[pos] = false;
        return false;
    }

    for (let i = 0; i < flat.length; i++) {
        if (dfs(i, 0)) return true;
    }
    return false
}

function run() {
    const board = [["A","B","C","E"],["S","F","E","S"],["A","D","E","E"]]
    const word = "ABCESEEEFS"
    console.log(exist(board, word))
}

export { run }