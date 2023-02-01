// Your code goes here
document.addEventListener("DOMContentLoaded", function() {
  console.log("The DOM has loaded");
});

document.addEventListener("DOMContentLoaded", changeText);

console.log(
    "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
  );

function changeText(){
    let t = document.querySelector('#text')
    console.log(t)
    t.textContent = 'This is really cool!'
    
    
}