let inputSlider = document.getElementById("inputSlider");
let sliderVale = document.getElementById("sliderValue");
let passBox = document.getElementById('passBox');

let lowercase = document.getElementById('lowercase');
let uppercase = document.getElementById('uppercase');
let numbers = document.getElementById('numbers');
let symbols = document.getElementById('symbols');
let genBtn = document.getElementById('genBtn');

sliderVale.textContent = inputSlider.value;
inputSlider.addEventListener('input', () => {
    sliderVale.textContent = inputSlider.value;
})

genBtn.addEventListener('click', () => {
    passBox.value = generatepassword();
})

let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerChars = "abcdefghijklmnopqrstuvwxyz";
let allnumbers = "0123456789";
let allsymbols = "~!@#$%^&*";

function generatepassword() {
    let genPassword = "";
    let allChars = "";

    allChars += lowercase.checked ? lowerChars : "";
    allChars += uppercase.checked ? upperChars : "";
    allChars += numbers.checked ? numbers : "";
    allChars += symbols.checked ? allsymbols : "";

    let i = 1;
    while(i <= inputSlider.value){
        genPassword += allChars.charAt(Math.floor(Math.random() * upperChars.length));
        i++;
    }

    return genPassword;
}