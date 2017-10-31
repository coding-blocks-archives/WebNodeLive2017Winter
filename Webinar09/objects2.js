let obj = {
    aNumber: 123,
    aString: "asdas",
    aFunction: function () {
        return (this.aNumber + this.aString)
    }
}

console.log(obj.aFunction())