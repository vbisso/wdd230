//get current year
let currentDate = new Date();
let currentYear= currentDate.getFullYear();
document.getElementById("copyright").innerHTML =`&copy;${currentYear} | Valeria Bisso | Peru`;

//get last modified
let lastModifiedDate = document.lastModified;
document.getElementById("lastModified").textContent = `Last Modified: ${lastModifiedDate}`;


//responsive menu nav
const buttonElement = document.querySelector('#button');
const menuListElement = document.querySelector('.menuList');

buttonElement.addEventListener('click', () => {
    menuListElement.classList.toggle('open');
    buttonElement.classList.toggle('open');
})

//DARK MODE
const darModeElement = document.querySelector('#darkMode');


darModeElement.addEventListener('click', () => {
    document.querySelector('body').classList.toggle('dark');
})

//PAGE VISITIS!!    
const visitsDisplay = document.querySelector(".visits");

let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

if (numVisits !== 0) {
    visitsDisplay.textContent = numVisits;
}
    else{
        visitsDisplay.innerHTML = " This is your first visit 🥹 <br> Welcome!! ";
    }
numVisits++;
localStorage.setItem("numVisits-ls", numVisits);