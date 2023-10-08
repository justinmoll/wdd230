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