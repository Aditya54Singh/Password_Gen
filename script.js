let inputSlider = document.getElementById("inputSlider");
let sliderValue = document.getElementById("SliderValue");
let passBox = document.getElementById("passBox");

let lowercase = document.getElementById("lowercase");
let uppercase = document.getElementById("uppercase");
let numbers = document.getElementById("numbers");
let symbols = document.getElementById("symbols");
let genBtn = document.getElementById("getBtn");

sliderValue.textContent = inputSlider.value;

inputSlider.addEventListener("input", () => {
    sliderValue.textContent = inputSlider.value;
});

genBtn.addEventListener("click", () => {
    passBox.value = generatePassword();
});

let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerChars = "abcdefghijklmnopqrstuvwxyz";
let allnumbers = "0123456789";
let allsymbols = "~!@#$%^&*";

function generatePassword() {
    let genPassword = "";
    let allChars = "";

    allChars += lowercase.checked ? lowerChars : "";
    allChars += uppercase.checked ? upperChars : "";
    allChars += numbers.checked ? allnumbers : "";
    allChars += symbols.checked ? allsymbols : "";

    if (allChars.length === 0) {
        return "Select options";
    }

    for (let i = 0; i < inputSlider.value; i++) {
        genPassword += allChars.charAt(
            Math.floor(Math.random() * allChars.length)
        );
    }

    return genPassword;
}
