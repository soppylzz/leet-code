/**
 * Reflection:
 * 1. Don't forget optimization of fibonacci
 * */
function climbStairs(n: number): number {
    const fibonacciCached = [1,2]
    if (n <= 2) return fibonacciCached[n-1]

    let [a, b] = [1, 2];
    for (let i = 3; i < n; i++) {
        b = a + b;
        a = b - a;
    }
    return a + b;
}

function run() {
    console.log(climbStairs(4))
}

export {run }