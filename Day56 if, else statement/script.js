console.log("Hello world");

let age = 19;
let grace = 2;

age += grace; // age = age + grace
console.log(age); // 21 = 19 + 2
//Arthmetic Operator
console.log(age + grace);
console.log(age - grace);
console.log(age * grace);
console.log(age ** grace); //find square
console.log(age / grace); // find divide
console.log(age % grace); // find modulus

if((age + grace) > 18){
    console.log("You can drvie.");
}else{
    console.log("You can't drive.")
}


//Comparision Operator


// using ==
// match the value 
console.log("Match the value ")
if (age == 21) { // 21 == 21
    console.log("Equal")
}else{
    console.log("not Equla")
}




//using ==
// not match type 
console.log("Match the value not type ")
if (age == "21") { // 21 == 21
    console.log("Equal")
} else {
    console.log("not Equal")
}



// using ===
console.log("Match the value and type ")
if (age === 21) {
    console.log("both are Equal ")
} else {
    console.log("not Equal")
}



// using ===
console.log("Match the value and type ")
if (age === "21") {
    console.log("both are equal ")
} else {
    console.log("not equal ")
}




// turnary operator ?:
var num1 = 9;
var num2 = 15;

var res = num1 > num2 ? (num1 - num2) : (num2 - num1)
console.log(res)





