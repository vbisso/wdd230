const menuButn = document.querySelector('#menuButton');
const navList = document.querySelector('.navigationList');
const navigation = document.querySelector('nav');
const body = document.body;


menuButn.addEventListener('click', () => {
    navList.classList.add('open');
    menuButn.classList.add('open');

    const newPage = document.createElement('div');
    newPage.classList.toggle('new-page');

    newPage.appendChild(navList); //Appends the navigation list to the new page (div new-page) and not the navList);//Appends the navigation list to the new page
    body.appendChild(newPage); //Appends the new page to the body    

    const newButton = document.createElement('button');
    newButton.textContent = 'X';
    newButton.classList.toggle('new-button');
    newPage.appendChild(newButton);

    newButton.addEventListener('click', () => {
        navList.classList.remove('open');
        menuButn.classList.remove('open');
        navigation.appendChild(navList);
        body.removeChild(newPage);
    })

    window.addEventListener('resize', function () {
        const screenWidth = window.innerWidth || document.documentElement.clientWidth;

        if (screenWidth >= 650) {
            navList.classList.remove('open');
            menuButn.classList.remove('open');
            navigation.appendChild(navList);
            if (body.contains(newPage)) {
                // Remove newPage from the body
                body.removeChild(newPage);
            }
        }
    });
})

//get current year
let currentDate = new Date();
let currentYear = currentDate.getFullYear();
document.getElementById("copyright").innerHTML = `&copy;${currentYear} | Valeria Bisso | A WDD 230 Project`;


//get last modified
let lastModifiedDate = document.lastModified;
document.getElementById("lastModified").textContent = `Last Modified: ${lastModifiedDate}`;


