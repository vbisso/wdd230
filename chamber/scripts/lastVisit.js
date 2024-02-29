
//PAGE VISITS FOR DISCOVER PAGE!!
const discoverVisits = document.querySelector(".discoverVisits");
const currentDateDiscover = Date.now();
const millisecondsInDay = 1000 * 60 * 60 * 24; // Number of milliseconds in a day
let lastVisitDate = Number(window.localStorage.getItem("lastVisitDate"))||0;

if (!lastVisitDate) {
    discoverVisits.textContent = "Welcome! Let us know if you have any questions.";
} else {
    const daysDifference = Math.floor((currentDateDiscover - lastVisitDate) / millisecondsInDay);
    
    if (daysDifference < 1) {
        discoverVisits.textContent = "Back so soon! Awesome!";
    } else if (daysDifference === 1) {
        discoverVisits.textContent = `You last visited ${daysDifference} day ago.`;
    } else {
        discoverVisits.textContent = `You last visited ${daysDifference} days ago.`;
    }
}

window.localStorage.setItem("lastVisitDate", currentDateDiscover);

