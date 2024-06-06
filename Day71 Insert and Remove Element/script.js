/*

document.querySelector(".div").innerHTML
VM191:1 Uncaught TypeError: Cannot read properties of null (reading 'innerHTML')
    at <anonymous>:1:31
(anonymous) @ VM191:1Understand this error
document.querySelector(".box").innerHTML
'This is div box'
document.querySelector(".box").innerText
'This is div box'
document.querySelector(".container").innerText
'This is div box'
document.querySelector(".container").getInnerHTML
ƒ getInnerHTML() { [native code] }
document.querySelector(".container").innerHTML
'\n    <div class="box">This is div box</div>\n  '
document.querySelector(".container").outerHTML
'<div class="container">\n    <div class="box">This is div box</div>\n  </div>'
document.querySelector(".container").outerHTML
'<div class="container">\n    <div class="box">This is div box</div>\n  </div>'
document.querySelector(".container").tagName
'DIV'
document.querySelector(".container").nodeName
'DIV'
document.querySelector(".container").textContent
'\n    This is div box\n  '
document.querySelector(".container").hidden
false
document.querySelector(".container").hidden = true
true
document.querySelector(".container").hidden = flase
VM519:1 Uncaught ReferenceError: flase is not defined
    at <anonymous>:1:47
(anonymous) @ VM519:1Understand this error
document.querySelector(".container").hidden = false
false
document.querySelector(".container").innerHTML = "Welcome back "
'Welcome back '

*/
