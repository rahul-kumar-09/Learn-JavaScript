let heading1 = document.getElementById('one');
let heading2 = document.getElementById('two');
let heading3 = document.getElementById('three');

let btn = document.getElementById('btn');


btn.addEventListener('click', () => {
    addColor(heading1, 'red', 1000)

        .then(() => {
            return addColor(heading2, 'green', 1000)
        })

        .then(() => {
            return addColor(heading3, 'tomato', 1000)
        })

        .catch((error) => {
            console.log(error)
        })

})





function addColor(element, color, time) {
    return new Promise((resolve, reject) => {

        if (element) {
            
            setTimeout(() => {
                element.style.color = color
                resolve()
            }, time);

        } else {
            reject(new Error("no such element exists"))
        }
    })
}