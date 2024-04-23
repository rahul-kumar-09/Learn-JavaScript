let a = [1, 3, 5, 6, 77, 8, 99]

// print the element using arrays

// for (let index = 0; index < a.length; index++) {
//     const element = a[index];console.log(element)
//     console.log(element)
// }


// a.forEach((value, index, arr)=>{
//     console.log(value, index, arr)
// })


// for in loop

let obj = {
    a: 1, 
    b: 2,
    c: 3
}

// for (const key in obj) {
//     if (Object.hasOwnProperty.call(obj, key)) {
//         const element = obj[key];
//         console.log(key, element)
//     }
// }

// directly print array
for (const iterator of a) {
    console.log(iterator)
}


