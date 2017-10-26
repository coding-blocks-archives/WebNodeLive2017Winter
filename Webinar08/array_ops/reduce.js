
let arr = [1,2,3,4,5,6,7,8]

let sum = arr.reduce(function(accum, item) {
    return accum + item
})

console.log(sum)

let fact = arr.reduce(function (accum, item) {
    return accum * item
})

console.log(fact)