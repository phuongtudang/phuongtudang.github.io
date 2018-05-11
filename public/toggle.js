const button = document.getElementById("secret");
const nav = document.getElementById("sidebar");
const title = document.getElementById("main-title");
const colorArray = ['red', 'orange', 'yellow', 'green', 'blue', 'brown'];
const colorLetterArray = ['redLetter', 'orangeLetter', 'yellowLetter', 'greenLetter', 'blueLetter', 'brownLetter'];
let i = 1;

button.addEventListener("click", function() {
    if (i < colorArray.length) {
        nav.classList.replace(colorArray[i - 1], colorArray[i]);
        title.classList.replace(colorLetterArray[i - 1], colorLetterArray[i]);        
        i++; 
    } else {
        i = 0;
        nav.classList.replace(colorArray[colorArray.length - 1], colorArray[i]);
        title.classList.replace(colorLetterArray[colorLetterArray.length - 1], colorLetterArray[i]);        
    }
});