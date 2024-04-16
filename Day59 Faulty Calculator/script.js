const randomNumber = Math.floor(Math.random() * 100) + 1;

// Output the random number
console.log(randomNumber);

var a = window.prompt("Enter first number: ")
var b = window.prompt("Enter second number: ")

var sum = a + b;
var sub = a - b;

if (randomNumber < 11) {
   confirm("sum of number " + sum)
}
else {
    confirm("sub of number"+ sub)
}