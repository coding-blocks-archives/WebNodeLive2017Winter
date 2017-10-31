let a = false; 


setTimeout(function() {
    a = true
}, 1000)

while(!a) {
    console.log(1)
}
