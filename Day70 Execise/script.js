const randomColor = [
    '#FF5733', // Red-Orange
    '#33FF57', // Green
    '#5733FF', // Blue-Violet
    '#FF33A6', // Pink
    '#33FFF5', // Aqua
    '#FF8C33', // Orange
    '#33FFBE', // Mint Green
    '#8C33FF', // Violet
    '#FF3333', // Red
    '#33FF33', // Light Green
    '#3357FF', // Blue
    '#FF33F1', // Magenta
    '#33FF82', // Sea Green
    '#FFB833', // Yellow-Orange
    '#33D7FF', // Sky Blue
    '#FF5733', // Coral
    '#33FFD5', // Turquoise
    '#FF33C1', // Fuchsia
    '#3363FF', // Royal Blue
    '#FFAF33'  // Gold
];

function getRandomColor() {
    var gColor = Math.floor(Math.random() * randomColor.length)

    var pColor = randomColor[gColor];

    return pColor;
}

setInterval(function(){

    document.querySelectorAll(".box").forEach(e =>{
        e.style.backgroundColor = getRandomColor()
    })

},1000)



console.log(getRandomColor())