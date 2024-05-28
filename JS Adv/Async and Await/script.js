let heading1 = document.getElementById("one");
let heading2 = document.getElementById("two");
let heading3 = document.getElementById("thre"); //error here

let btn = document.getElementById("btn");

btn.addEventListener("click", async () => {
  try {
    await addColor(heading1, "red", 1000);
    await addColor(heading3, "blue", 1000); //occure error for this line, so don't go to next line
    await addColor(heading2, "blue", 1000);
  } catch (error) {
    console.log(error, "Something went wrong");
  }
});

function addColor(element, color, time) {
  return new Promise((resolve, reject) => {
    if (element) {
      setTimeout(() => {
        element.style.color = color;
        resolve();
      }, time);
    } else {
      reject(new Error("no such element exists"));
    }
  });
}
