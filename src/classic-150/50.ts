function myPow_(x: number, n: number): number {
    function pow(x: number, posN: number): number {
        if (posN === 0) return 1;
        return pow(x, posN - 1) * x
    }
    if (n >= 0) return pow(x, n)
    return 1 / pow(x, -n)
}

/**
 * Reflection:
 * 1. JS 位运算只支持 32 位有符号整数, 这里有两种解决方案
 *  1) 直接 num/2
 *  2) 使用无符号右移 >>>
 * */
function myPow(x: number, n: number): number {
    const cache: [number, number, number][] = []    // x, posN, val

    function efficientPow(x: number, posN: number): number{
        // static cache
        if (x === 1) return 1;
        if (posN === 0) return 1;
        if (posN === 1) return x;
        // dynamic cache
        const find = cache.findIndex(([_x, _n, _]) => x === _x && posN === _n)
        if (find !== -1) return cache[find][2];

        // find x^posN = (x^m)^2 * x^n
        const [m, n] = [posN >>> 1, posN & 1]
        const res = efficientPow(x*x, m) * (n ? x : 1)
        cache.push([x, posN, res])
        return res
    }

    if (n >= 0) return efficientPow(x, n)
    return 1 / efficientPow(x, -n)
}


function run() {
    console.log(myPow(2, 2147483648))
}

export { run }