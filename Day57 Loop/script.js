console.log("How to print number using looop")

let a = 1;
// console.log(a)
// console.log(a+1)
// console.log(a+2)


//print counting 1-100
console.log("Print n Number")
for (let i  = 0; i  < 100; i ++) {
    console.log(a + i)
}

// use for in loop
let obj = {
    name: "Rahul Kumar",
    age: 22,
    company: "xyz",
    role: "developer"
}

for (const key in obj) {
    console.log(obj)
}




// use for of loop
for (const c of "Rahul") {
    console.log(c)  // print character by character 
}



//whiel loop
let i = 0;
console.log("These one is while loop")
while (i <= 10) {
    console.log(i)
    i++;
}

//do while loop
// at-least one time print, does not metter condition true or false
console.log("Do while loop")
let j = 10;
do {
    console.log(j)
} while (j < 5);