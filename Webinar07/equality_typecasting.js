1 == "1"; // true
1 === "1"; //false

console.log((1 + "1") == 11) //true
console.log("11" - 1 == 1)//false (NaN not a number) "11" - 1, 11 typecast to number 11, so 10
console.log([] == "") //true
console.log([] == 0)//true
console.log(0 == "")//true
// "" can be typecast to 0, [] can also be typecast to ""

//unary + operator
console.log("1")
console.log(+"1")