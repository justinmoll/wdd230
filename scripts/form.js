// Check if password is correct 
const pas1 = document.querySelector("#password1");
const pas2 = document.querySelector("#password2");
const message = document.querySelector("#passmessage");

pas2.addEventListener("focusout", checkSame);

function checkSame() { 
    if (pas1.value != pas2.value) {
        message.textContent = "Password does not match!";
        message.style.visibility = "show";
        pas2.style.backgroundColor = "#fff0f3";
        pas2.value = "";
    } else {
        message.style.display = "none";
        pas2.style.backgroundColor = "#fff";
        pas2.style.color = "#000";
    }
    }

// Slider bar 
const rangevalue = document.getElementById("rangevalue");
const range = document.getElementById("r");

range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    rangevalue.innerHTML = range.value;
}
