// console.log("Hey Harry you are nice!")
// console.log("Hey Harry you are good!")
// console.log("Hey Harry you are Awesome!")
// console.log("Hey Harry you are Intelligent!")

function nice(name) {
    console.log("Hey " + name +  " you are nice!")
    console.log("Hey " + name +  " you are good!")
    console.log("Hey " + name +  " you are Awesome!")
    console.log("Hey " + name +  " you are Intelligent!")
}

nice("Shiva")
nice('Ram')




// use parameter
function sum(a, b) {
    console.log(a + b)
}
sum(8, 2)




// return keyword
function add(a, b, c = 3) { // overide 3 -> 2
    // console.log(a + b)
    return a + b + c
}
result = add(8, 2)
console.log("Sum of two Num ", result)

result = add(8, 2, 2)
console.log("Sum of two Num ", result)




//Aero function
const func1 = (x) =>{
    console.log("This one is aero function ", x)
}

func1(20)
func1(22)



