const boxEl = document.getElementsByClassName("box")

//select all class 
document.querySelectorAll(".box").forEach(e =>{
    e.style.backgroundColor = "blue"
})

console.log(boxEl);

// select using the class name using array 
boxEl[2].style.backgroundColor = "red"; 

// select particular element 
document.getElementById("redbox").style.backgroundColor = "green"


// select only first element
document.querySelector(".box").style.backgroundColor = "purple";

// select all tag
document.getElementsByTagName("div")[5].style.color = "white";




//console
/*
e[2].matches(".redbox")
false





*/