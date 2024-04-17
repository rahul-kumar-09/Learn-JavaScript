
let random = Math.random()

let a = prompt("Enter first number: ")
let c = prompt("Enter Operator ")
let b = prompt("Ener second number: ")


let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**",
}

if (random > 0.1) {
    console.log("The result is ", a, c, b)

}else{
    c = obj[c]
    console.log("The result is ", a, b, c)
    alert("The result is ", a, b, c)

}