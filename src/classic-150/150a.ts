/**
 * Reflection:
 * 1. Math.floor round down
 * 2. Math.trunc round to 0
 * 3. Math.ceil round up
 * */
function evalRPN(tokens: string[]): number {
    const numStack: number[] = []
    let tokenCnt: number = 0;

    while (!(numStack.length === 1 && tokenCnt === tokens.length)) {
        if (!["+", "-", "*", "/"].includes(tokens[tokenCnt])) {
            numStack.push(Number(tokens[tokenCnt]))
        } else {
            const [b, a] = [numStack.pop()!, numStack.pop()!]
            switch (tokens[tokenCnt]) {
                case "+": { numStack.push(a + b); break; }
                case "-": { numStack.push(a - b); break; }
                case "*": { numStack.push(a * b); break; }
                case "/": { numStack.push(Math.trunc(a / b)); break }
            }
        }
        tokenCnt++
    }
    return Number(numStack.pop())
}

function run() {
    const tokens = ["4","-2","/","2","-3","-","-"]
    console.log(evalRPN(tokens))
}

export { run }