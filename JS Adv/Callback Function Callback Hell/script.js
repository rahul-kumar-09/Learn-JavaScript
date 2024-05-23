// A function is passed in another function that is called callback function
/*
function add(a, b){
    return a+b;
}

function calculate(a, b, add){
    console.log("Result is: ", add(a,b));
}

calculate(5,6, add)

*/
// __________________________________________________________






// callback function in async
function add(a, b) {
    console.log(a + b);
}

setTimeout(() => {
    add(3, 6)
})





// Callback Hell 
let heading1 = document.getElementById('one');
let heading2 = document.getElementById('two');
let heading3 = document.getElementById('three');

let btn = document.getElementById('btn');

btn.addEventListener('click', ()=>{

    setTimeout(() =>{
        heading1.style.color = 'red';
        setTimeout(() =>{
            heading2.style.color = 'blue';
            setTimeout(() => {
                heading3.style.color = 'green';
            }, 1000);
        }, 1000);
    }, 1000);
})