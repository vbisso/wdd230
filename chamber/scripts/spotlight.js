const url = 'https://raw.githubusercontent.com/vbisso/wdd230/master/chamber/data/members.json';
const compimg1 = document.querySelector('#compImg1');
const comptext1 = document.querySelector('#compText1');
const compimg2 = document.querySelector('#compImg2');
const comptext2 = document.querySelector('#compText2');
const compimg3 = document.querySelector('#compImg3');
const comptext3 = document.querySelector('#compText3');
async function getMembers() {
    const response = await fetch(url);
    const data = await response.json();
    displayMembers(data);
}

function displayMembers(data) {

    let list = [];



    for (let i = 0; i < data.companies.length; i++) {
        if (data.companies[i].membership_level == 'Silver' || data.companies[i].membership_level == 'Gold') {
            list.push(data.companies[i]);
        }
    }

    let randomIndex1 = Math.floor(Math.random() * list.length);
    let randomIndex2 = Math.floor(Math.random() * list.length);
    let randomIndex3 = Math.floor(Math.random() * list.length);

    compimg1.innerHTML = `<img src="${data.companies[randomIndex1].image}" alt="${data.companies[randomIndex1].name}">`;
    comptext1.innerHTML = `
    <p>${data.companies[randomIndex1].name}</p>
        <p>${data.companies[randomIndex1].address}</p>
        <p>${data.companies[randomIndex1].phone}</p>
        <p>${data.companies[randomIndex1].website}</p>`

    compimg2.innerHTML = `<img src="${data.companies[randomIndex2].image}" alt="${data.companies[randomIndex2].name}">`;
    comptext2.innerHTML = `
        <p>${data.companies[randomIndex2].name}</p>
            <p>${data.companies[randomIndex2].address}</p>
            <p>${data.companies[randomIndex2].phone}</p>
            <p>${data.companies[randomIndex2].website}</p>`

    compimg3.innerHTML = `<img src="${data.companies[randomIndex3].image}" alt="${data.companies[randomIndex3].name}">`;
    comptext3.innerHTML = `
    <p>${data.companies[randomIndex3].name}</p>
        <p>${data.companies[randomIndex3].address}</p>
        <p>${data.companies[randomIndex3].phone}</p>
        <p>${data.companies[randomIndex3].website}</p>`


}
getMembers();