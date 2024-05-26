// const plus = 6 + '2'
// const test1 = 6 * '2'
// const test2 = 6 * 2
// console.log([1, 'a', {}])

// console.log(plus)
// console.log(typeof plus)
// console.log(test1)
// console.log(typeof test1)
// console.log(test2)
// console.log(typeof test2)

// const test = Math.PI
// const test1 = 1 - Math.random()
// const test2 = Math
// console.log(test)
// console.log(test1)
// console.log(test2)



function weirdNumbers(delta) {
    return 1 + delta - Math.random();
}


for (let i = 0; i < 10; i++) {
    test = weirdNumbers(0.5);
    console.log(test);
}

console.log("------")
for (let i = 0; i < 10; i++) {
    test = weirdNumbers(0.2);
    console.log(test);
}