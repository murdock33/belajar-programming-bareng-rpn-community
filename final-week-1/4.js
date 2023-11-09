function xo(str) {
    let countX = 0
    let countO = 0
    for (let i = 0; i <= str.length - 1; i++) {
        if (str[i] == "x") {
            countX++
        } else if (str[i] == "o") {
            countO++
        }
    }
    if (countX == countO) {
        return true
    } else {
        return false
    }
}

console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true