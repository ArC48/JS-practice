const compose = (...functions) => {
    let str = ''
    for (let i = 0; i < functions.length; i++) {
        if (typeof str === 'undefined') {
            str = functions[i]()
        } else {
            str = functions[i](str)
        }
    }
    let changed = str.split('').reverse().join('')
    return ultimate => {
        return ultimate + changed;
    }
}
const composed = compose((str) => {
    return str + 'c';
}, (str) => {
    return str + 'b';
})('a')
console.log(composed);