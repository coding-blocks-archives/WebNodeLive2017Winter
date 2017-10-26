

function createCounter (initVal, delta) {
    let val = initVal;

    let counter = {
        incr: function () {
            val += delta;
        },
        decr: function () {
            val -= delta;
        },
        show: function () {
          console.log(val)  
        }
    }

    return counter

}

let a = createCounter(50, 5)
a.show(); // 50
a.incr();
a.incr();
a.show(); // 60
console.log(typeof a)           // object
console.log(typeof a.show)      // function
console.log(typeof a.show())    // undefined