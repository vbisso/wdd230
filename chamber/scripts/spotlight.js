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

    console.log(list);

    let randomIndex1 = Math.floor(Math.random() * list.length);
    let randomIndex2 = Math.floor(Math.random() * list.length);
    let randomIndex3 = Math.floor(Math.random() * list.length);

    compimg1.innerHTML = `<img src="${list[randomIndex1].image}" alt="${list[randomIndex1].name}">`;
    comptext1.innerHTML = `
    <p>${list[randomIndex1].name}</p>
        <p>${list[randomIndex1].address}</p>
        <p>${list[randomIndex1].phone}</p>
        <p>${list[randomIndex1].website}</p>`

    compimg2.innerHTML = `<img src="${list[randomIndex2].image}" alt="${list[randomIndex2].name}">`;
    comptext2.innerHTML = `
        <p>${list[randomIndex2].name}</p>
            <p>${list[randomIndex2].address}</p>
            <p>${list[randomIndex2].phone}</p>
            <p>${list[randomIndex2].website}</p>`

    compimg3.innerHTML = `<img src="${list[randomIndex3].image}" alt="${list[randomIndex3].name}">`;
    comptext3.innerHTML = `
    <p>${list[randomIndex3].name}</p>
        <p>${list[randomIndex3].address}</p>
        <p>${list[randomIndex3].phone}</p>
        <p>${list[randomIndex3].website}</p>`


}
getMembers();