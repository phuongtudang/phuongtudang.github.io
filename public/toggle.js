const button = document.getElementById("secret");
const nav = document.getElementById("sidebar");
const colorArray = ['red', 'orange', 'yellow', 'green', 'blue', 'brown'];
let i = 1;

button.addEventListener("click", function() {
    if (i < colorArray.length) {
        nav.classList.replace(colorArray[i - 1], colorArray[i]);
        i++; 
    } else {
        i = 0;
        nav.classList.replace(colorArray[colorArray.length - 1], colorArray[i])
    }
});