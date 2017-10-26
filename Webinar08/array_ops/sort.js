
let arr = [6,3,9,1,7,2, 14, 26, 35]
// console.log(arr.sort())
// Js by default does a lexicographical

function compare (a, b) {
    return (a%10) - (b%10);
}

arr.sort(compare)
console.log(arr)
