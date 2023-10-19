// calculate number of visits

let numVisits = 1;

if (localStorage.getItem('numVisits')) {
    numVisits = parseInt(localStorage.getItem('numVisits'));
    numVisits++; 
}

// set local storage with number of visits
localStorage.setItem('numVisits', numVisits);


// display number of visits
let numVisitsSapn = document.querySelector('#number-of-visits');
numVisitsSapn.textContent = numVisits;