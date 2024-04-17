
// Arrays of first names and last names
const firstNames = ['John', 'Jane', 'Alex', 'Emily', 'Chris', 'Nina', 'Sam', 'Linda'];
const lastNames = ['Smith', 'Johnson', 'Brown', 'Williams', 'Jones', 'Davis', 'Miller', 'Wilson'];

function getRandomName(){
    var firstIndex = Math.floor(Math.random()* firstNames.length)
    var secondIndex = Math.floor(Math.random()*lastNames.length)

    var firstR = firstNames[firstIndex]
    var lastR = lastNames[secondIndex]

    return firstR + "  " + lastR
}

console.log(getRandomName())
