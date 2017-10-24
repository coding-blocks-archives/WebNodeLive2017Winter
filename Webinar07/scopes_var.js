var x = 10;

function myFun () {
    var x = 20;
    x += 1;
    console.log("line6 " + x);
    if (true) {
        var x = 30;
        x += 1;
        console.log("line10 " + x)
    }
    console.log("line12 " + x)

}
myFun();
console.log("line16 " + x);
