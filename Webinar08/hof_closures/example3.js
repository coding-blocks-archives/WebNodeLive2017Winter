

function f1 () {
    function f2 () {
        return 5; //now this is executed (because of line 12) 
    }

    return f2;
}

let x = f1();
let p = x();
console.log(p); // is 5
