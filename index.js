// Your code goes here
document.addEventListener("DOMContentLoaded", function() {
    let words = document.querySelector("#text")
    // if console.log("The DOM has loaded");
    words.innerHTML = "This is really cool!"
});

console.log(
    "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
);
