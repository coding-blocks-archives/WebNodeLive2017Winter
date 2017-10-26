function greeter () {
    console.log("Hello !")
}

let helloSayer = greeter;
console.log(helloSayer == greeter)

helloSayer();