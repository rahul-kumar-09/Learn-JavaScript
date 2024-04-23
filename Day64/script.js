let rand = Math.random()
let first, second, third;
// 0.33 0.66 1 = 1/3


// generate first word
if (rand < 0.33) {
    first = "Crazy";
} else if (rand < 0.66 && rand >= 0.33) {
    first = "Amezing";
} else {
    first = "Fire";
}



 rand = Math.random()
// generate second word
if (rand < 0.33) {
    second = "Engine";
} else if (rand < 0.66 && rand >= 0.33) {
    second = "Food";
} else {
    second = "Garments";
}



 rand = Math.random()
// generate third word
if (rand < 0.33) {
    third = "Bros";
} else if (rand < 0.66 && rand >= 0.33) {
    third = "Limited";
} else {
    third = "Hub";
}



console.log(`${first} ${second} ${third}`)
