const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');

async function getProphetData(){
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data.prophets)
    displayProphets(data.prophets);
}
const displayProphets = (prophets) =>{
    prophets.forEach((prophets) => {
        const card = document.createElement('section');
        const fullName = document.createElement('h2');
        const portrait = document.createElement('img');
        fullName.textContent = `${prophets.name} ${prophets.lastname}`;
        portrait.setAttribute('src',`${prophets.imageurl}`);
        portrait.setAttribute('alt',`${prophets.name} ${prophets.lastname}`);
        portrait.setAttribute('load','lazy');
        portrait.setAttribute('width','340');
        portrait.setAttribute('height','440');
        card.appendChild(fullName);
        card.appendChild(portrait);
        cards.appendChild(card);
    });
}
getProphetData();