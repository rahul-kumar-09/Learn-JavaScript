let target = document.getElementById("box");
console.log(target);

let p = document.getElementsByClassName('para');
console.log(p);

let target2 = document.getElementsByTagName('div');
console.log(target2);


//return first element of matched the .para
let target3 = document.querySelector(".para");
console.log(target3);

let target4 = document.querySelectorAll(".para");
console.log(target4);


// create the element
let tartget5 = document.createElement("li");
// console.log(tartget5);
//add the element in the box
let newEle = target.appendChild(tartget5);
console.log(newEle);

let crEle = document.createElement("a");
let newEle2 = target.insertAdjacentElement("afterbegin", crEle);
console.log(newEle2);


