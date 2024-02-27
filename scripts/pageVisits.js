//PAGE VISITIS FOR INDEX PAGE!!    
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
