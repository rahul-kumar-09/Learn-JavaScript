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
console.log(arr)