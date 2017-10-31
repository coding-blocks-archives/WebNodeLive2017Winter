function Person (name, age) {
    this.firstName = name.split(" ")[0]
    this.lastName = name.split(" ")[1]
    //now 'age' is like a private variable
    this.isAdult = function () {
        return age > 18
    }
}

let p = new Person("John Smith", 30)
let h = new Person("Harry Potter", 12)
console.log(p)
console.log(p.isAdult())
console.log(h.isAdult())