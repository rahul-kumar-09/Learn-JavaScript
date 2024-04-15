console.log("This is 55 practice code...")

var a = 8;
var b = 6;
var c = "Rahul";
var _d = 'A';
// var 2e = "Kumar"; not valide name becasue number is not allows on first letter

console.log(a + b + 5);

console.log(typeof a, typeof b, typeof c, typeof d);


// JavaScript is case sensitive 
const n1 = "Rahul";
const n2 = "rahul";

if (n1 == n2){
    console.log("both are equal");
}else{
    console.log("not equal");
}

// var -> var is global varible 
// let -> let is block of variable
// const => const can't resign value

const num = 55;
num + 8; // can't resign 
console.log(num) // print -> 55


let num1 = 88;
num1 + 5;
console.log(num1); //print -> 88

let x = "Rahul Kumar";
let y = 20;
let z = 20.5;
const p = true;
let q = undefined;
let r = null;

console.log(x, y, z, q, p, r);
console.log(typeof x, typeof y, typeof z, typeof q, typeof p, typeof r);

let o = {
    name: "Rahul",
    "Job Code": 5600, 
    Address: "Noida",
    "Phone no.": 9898287892 
}
console.log(o);

o.salary = 900000;
console.log(o);
o.salary = 10000000;
console.log(o);



