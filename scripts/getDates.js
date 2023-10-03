const today = new Date();
let year = today.getFullYear();

let copyright = document.querySelector('#copyright');

if (copyright) {
    copyright.innerHTML = `&copy; ${year.toString()} |`;
}

let lastModified = document.lastModified;
let lastModifiedElement = document.querySelector('#last-modified');

if (lastModifiedElement) {
    lastModifiedElement.textContent =  `Last Modified: ${lastModified}`
};

// Adds Hamburger Menu 
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

// Add a dark mode button
const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");
const li = document.querySelector("#hyperlink");

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("☑️")) {
		main.style.background = "#293241";
		main.style.color = "#fff";
		modeButton.textContent = "❎";
        // li.style.color = "#fff";
	} else {
		main.style.background = "#eee";
		main.style.color = "#000";
		modeButton.textContent = "☑️";
	}
});
