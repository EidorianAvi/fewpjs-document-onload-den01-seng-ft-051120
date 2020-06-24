// Your code goes here

document.addEventListener("DOMContentLoaded", function() {
    console.log("The DOM has loaded");
    let replace = document.querySelector('#text')
    console.log(replace)
    replace.textContent = "This is really cool!"
})

console.log("This console.log() fires when index.js loads 0 before DOMContentLoaded is triggered");