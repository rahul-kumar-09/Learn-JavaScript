let a = "Computer";

// find string at particular index 
console.log(a[0])
console.log(a[1])
console.log(a[2])
console.log(a[3])
console.log(a[4])
console.log(a[5])
console.log(a[6])
console.log(a[7])
console.log(a[8]) // these one is undefined, because this index is not present

let MyName = "Rahul";
let friend = "John";

console.log("His name is " + MyName + " and his friend name is " + friend)
// console.log('His name is ${MyName} and his friend name is ${friend} ')   //string interpolation


console.log(MyName.toUpperCase()) //convert uper case
console.log(friend.toLowerCase()) // convert lower case
console.log("His name is " + MyName.toUpperCase() + " and his friend name is " + friend.toLowerCase())

// find length
console.log(MyName.length)

console.log(MyName.slice(1, 4)) // that means 1, 2, 3
console.log(MyName.slice(2)) // that means 2, 3, 4, 5

console.log(MyName.replace("Ra", "Shaa"))

console.log(MyName.charAt(3))
console.log(MyName.indexOf("hu"))
console.log(MyName.indexOf("as"))

console.log(MyName.startsWith("Ra"))
console.log(MyName.endsWith("ul"))


