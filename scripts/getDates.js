//get current year
let currentDate = new Date();
let currentYear= currentDate.getFullYear();
document.getElementById("copyright").innerHTML =`&copy;${currentYear} | Valeria Bisso | Peru`;

//get last modified
let lastModifiedDate = document.lastModified;
document.getElementById("lastModified").textContent = `Last Modified: ${lastModifiedDate}`;
