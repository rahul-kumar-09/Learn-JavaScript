
const promise = new Promise((resolve, reject) => {
    const randomNum = Math.random()

    if (randomNum > 0.5) {
        resolve(randomNum)
    } else {
        reject(new Error("Then random no. is less then 0.5"))
    }
})

promise.then((result) => {
    console.log('The random no. is ', result)
})

    .catch((error) => {
        console.log(error)
    })