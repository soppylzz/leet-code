function wordPattern(pattern: string, s: string): boolean {
    const map = new Map()
    const cache: string[] = []

    const wordArr = s.split(" ")
    const pArr = pattern.split("")

    if (wordArr.length !== pArr.length) return false;

    for (let i = 0; i < wordArr.length; i++) {
        if (!map.has(pArr[i])) {
            if (cache.includes(wordArr[i])) return false;
            map.set(pArr[i], wordArr[i])
            cache.push(wordArr[i])
        }
        if (map.get(pArr[i]) !== wordArr[i]) return false;
    }
    return true;
}

function run() {
    const pattern = "a"
    const str = "dog"
    console.log(wordPattern(pattern, str))
}

export { run }