//MEMBERS JSON
const url = 'https://raw.githubusercontent.com/vbisso/wdd230/master/chamber/data/members.json';
const article = document.querySelector('article');
async function getMembers(){
    const response = await fetch(url);
    const data = await response.json();
    displayMembers(data);
}
function displayMembers(data){

    for (let i = 0; i < data.companies.length; i++){
        const member = data.companies[i];
        const card = document.createElement('section');
        card.setAttribute('class', 'card');
        const name = document.createElement('h3');
        const address = document.createElement('p');
        const phone = document.createElement('p');
        const website = document.createElement('p');
        const image = document.createElement('img');

        name.textContent = member.name;
        name.setAttribute('class', 'name');
        address.textContent = member.address;
        phone.textContent = member.phone;
        website.textContent = member.website;
        website.setAttribute('class', 'website');
        image.setAttribute('src', member.image);
        image.setAttribute('alt', member.name);
        card.appendChild(name);
        card.appendChild(image);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);
        article.appendChild(card);

}}


getMembers();

//GRID AND LIST VIEWS
const gridBtn = document.querySelector('#gridBtn');
const listBtn = document.querySelector('#listBtn');

gridBtn.addEventListener('click', ()=>{
    article.classList.remove('list');
    article.classList.add('grid');
})
listBtn.addEventListener('click', ()=>{
    article.classList.remove('grid');
    article.classList.add('list');

})