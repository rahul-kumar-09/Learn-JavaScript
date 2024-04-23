// Arrays -> it is mutable, we can change
//String -> it is immutable, we can't change

let arr = [1, 2, 4, 7, 8]

console.log(arr)
console.log(arr.length)

arr[0] = 566;
console.log(arr[0])
console.log(arr[2])
console.log(arr[4])
console.log(arr[5]) // not exits in arrys,  print -> undefined


console.log(typeof arr) // print type -> object
console.log(arr.toString()) //convert in string

console.log(arr.join(" and "))

arr.pop() // pop, remove element at the end point -> 8
console.log(arr)


arr.push(788) // push, add element at the end point -> 788
console.log(arr)

arr.push("Rahul")
arr.push(99)
console.log(arr)


arr.shift() // remove the element at the start point 
console.log(arr)


arr.unshift("847488") //add the element at the satrt point
console.log(arr)

delete arr[3]
console.log(arr)

console.log(arr.length)

let a1 = [1, 2, 3]
let a2 = [4, 1, 8]
let a3 = [7, 8, 9]

console.log(a1.concat(a2, a3))

let ar = [98, 1, 56, 45,76, 87]
console.log(ar.sort()) // sort the elements in accending order

let spliceArr = [1, 32, 54, 2, 64, 31, 43, 32, 56, 76, 87]
console.log(spliceArr.splice(2, 4)) // between 2 to 4, cut the element and create new array


console.log(spliceArr) // doest exit cut the element using splice

console.log(spliceArr.splice(1, 3, 666, 7777)) //cute the element between 1, 3 index and add 666, 777

console.log(spliceArr)


console.log(spliceArr.splice(2))